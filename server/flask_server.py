from flask import Flask, request, jsonify
import os
from Gemini_AI import generate_dish, image_to_json
import firebase_admin
from firebase_admin import credentials, db
import json

# Initialize the Firebase Admin SDK
cred = credentials.Certificate('firebase_service_account.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://foodframe-422304-default-rtdb.firebaseio.com'
})

app = Flask(__name__)

@app.route('/upload_image_info', methods=['POST'])
def upload_image_info():
    data = request.json
    print(data)
    image_url = data['image_url']
    ingredient_name = data['ingredient_name']

    # call image_to_json
    json_ingredient = image_to_json(ingredient_name, image_url)

    # Upload json_ingredient to Firebase under the /ingredients/ path
    ref = db.reference('/ingredients/')
    ref.set(json_ingredient)

    
    return jsonify({'status': 'success', 'message': 'Data received'}), 200

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=int(os.environ.get('PORT', 3000)))
