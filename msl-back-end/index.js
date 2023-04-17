// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT;
const app = express();


app.listen(PORT, () => {
    console.log('Hello From the Back End')
})
