from flask import Flask, request, jsonify
import os
from Gemini_AI import generate_dish, image_to_json
import firebase_admin
from firebase_admin import credentials, db
import json
from google.cloud import storage

app = Flask(__name__)

import base64

def encode_key(url):
    # Encode the URL to a base64 string, making it Firebase-friendly
    encoded_bytes = base64.urlsafe_b64encode(url.encode('utf-8'))
    encoded_str = str(encoded_bytes, 'utf-8')
    return encoded_str

# Decode when needed
def decode_key(encoded_str):
    decoded_bytes = base64.urlsafe_b64decode(encoded_str.encode('utf-8'))
    decoded_url = str(decoded_bytes, 'utf-8')
    return decoded_url

# Initialize the Firebase Admin SDK
cred = credentials.Certificate('firebase_service_account.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://foodframe-422304-default-rtdb.firebaseio.com'
})

@app.route('/upload_image_info', methods=['POST'])
def upload_image_info():
    data = request.json
    print(data)
    image_url = data['image_url']
    ingredient_name = data['ingredient_name']

    # call image_to_json
    json_ingredient = image_to_json(ingredient_name, image_url)

    # Encode URL to use as a Firebase-friendly key
    encoded_url_key = encode_key(json_ingredient['url'])

    # Get a reference to the Firebase Realtime Database at the /ingredients/ path using the encoded URL
    ref = db.reference(f'/ingredients/{encoded_url_key}')

    # Set the json_ingredient to the database using the encoded URL as a key
    ref.set(json_ingredient)

    # Return success message and the key used
    return jsonify({'status': 'success', 'message': 'Data received', 'key': encoded_url_key}), 200

def get_ingredient_by_url(url):
    encoded_url = encode_key(url)
    ref = db.reference(f'/ingredients/{encoded_url}')
    
    # Attempt to fetch the data
    ingredient_data = ref.get()
    if ingredient_data:
        return ingredient_data
    else:
        return ('No data found for the provided URL')

@app.route('/create_dish', methods=['POST'])
def create_dish():
    data = request.json
    print(data)
    url_list = data['url_list']
    max_calories = data['max_calories']
    min_protein = data['min_protein']

    json_list = list()
    for i in range(len(url_list)):
        # call get_ingredient_by_url
        ingredient_json = get_ingredient_by_url(url_list[i])
        json_list.append(ingredient_json)

    # call generate_dish
    dish = generate_dish(json_list, max_calories, min_protein)

    # Encode URL to use as a Firebase-friendly key
    encoded_url_key = encode_key(dish['url'])

    # Get a reference to the Firebase Realtime Database at the /ingredients/ path using the encoded URL
    ref = db.reference(f'/dishes/{encoded_url_key}')

    # Set the json_ingredient to the database using the encoded URL as a key
    ref.set(dish)

    # Return success message and the key used
    return jsonify({'status': 'success', 'message': 'Dish created', 'key': encoded_url_key}), 200


if __name__ == '__main__':
    app.run(debug=True, host='172.20.10.10', port=int(os.environ.get('PORT', 3000)))