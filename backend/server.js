const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware.js')
const connectDB  = require('./config/db')
const PORT = process.env.PORT || 7000

// Connect to databse
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => { 
  // res.send('hello')
  res.status(200).json({message: 'Wellcome to the Support Desk API'})
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`server start at ${PORT}`))


