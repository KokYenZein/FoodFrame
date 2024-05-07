const express = require('express');
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, get } = require('firebase/database');

const app = express();
const PORT = 3000;

// Firebase configuration
const firebaseConfig = {
    apiKey: ,
    authDomain: ,
    projectId: ,
    storageBucket: ,
    messagingSenderId: ,
    appId: ,
    measurementId: 
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getDatabase();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route to fetch ingredients
app.get('/ingredients', async (req, res) => {
    const dbRef = ref(db, 'ingredients');
    try {
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            res.json(snapshot.val());
        } else {
            res.status(404).send('No ingredients found');
        }
    } catch (error) {
        console.error('Failed to fetch ingredients:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});