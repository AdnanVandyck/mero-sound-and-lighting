// DEPENDENCIES
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// CONFIGURATION
const app = express();
require('dotenv').config()
const PORT = process.env.PORT;

app.use(cors());


app.get('/', async (req, res) => {
    console.log("I was hit")
})


app.listen(PORT, () => {
    console.log('Hello From the Back End')
})
