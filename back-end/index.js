require('./db')
const express=require('express')
const bodyParser= require('body-parser')
const cors=require('cors')

var postMessageRoutes=require('./controllers/postMessageController')

var app=express() //Work with server



//configure middleware server
app.use(bodyParser.json())
//Cross Origin Resource Sharing
app.use(cors({origin:'http://localhost:3000'}))

//configure route
app.use('/postMessages',postMessageRoutes)

//Start server
app.listen(4000,()=>console.log('Server started at: 4000'))

