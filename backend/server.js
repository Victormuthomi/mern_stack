const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 8000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//goals routes
app.use('/api/goals', require('./routes/goalRoutes')) 

//users routes
app.use('/api/users', require('./routes/userRoutes'))



app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))


