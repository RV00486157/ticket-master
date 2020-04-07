const express = require('express')
const cors = require('cors')
const app = express()
const connectDB = require('./config/db')
const routes = require('./config/routes')
const PORT = 3030

app.use(express.json())
app.use(cors())
app.use('/',routes)

connectDB()

app.listen(PORT,()=>{
    console.log(`Running server ${PORT}`)
})