const express = require('express')
const color = require('colors')
const dotenv = require('dotenv').config ()
const connectDB = require('./config/db')
const port = process.env.PORT || 5001

connectDB()

const app = express()
app.listen(port, () => console.log(`Server running on port ${port}`))