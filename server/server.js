require('dotenv').config();  // MUST be first
const express = require('express');
const databaseConnection = require('./config/database');

// Connect to MongoDB
databaseConnection();

const app = express();
const PORT = process.env.PORT || 5000;

// Example test route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
