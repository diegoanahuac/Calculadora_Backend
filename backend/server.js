const express = require('express')
const color = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5001
const {errorHandler} = require('./middleware/errorMiddleware')
const cors = require('cors')

connectDB()

const app = express()

/*const corsOptions = {
    origin: 'https//midominio.com',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
*/

app.use(cors())

app.use(express.json())

app.use('/api/gastos', require('./routes/gastosRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))