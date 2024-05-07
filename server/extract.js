// Importing Firebase and Database functionalities with the new Modular SDK (v9+)
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, get } = require('firebase/database');


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiXpK0UMunTJiM8ZvaPutS-l9yOgieWiQ",
    authDomain: "foodframe-422304.firebaseapp.com",
    projectId: "foodframe-422304",
    storageBucket: "foodframe-422304.appspot.com",
    messagingSenderId: "121525382197",
    appId: "1:121525382197:web:f5a5a391a9a9236668957c",
    measurementId: "G-FHLHG5N0HW",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);

const dbRef = ref(db, "ingredients");

// Fetch data
get(dbRef).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
        const ingredients = snapshot.val();
        Object.keys(ingredients).forEach(key => {
            console.log(ingredients[key]); // Logs each ingredient object
            console.log("\n\n")
            // You can now work with each ingredient object as needed
        });
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});
