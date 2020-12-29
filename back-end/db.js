const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/postManagerDB',{useNewUrlParser : true,  useUnifiedTopology:  true}, err=>{
    if(!err)
    console.log('Mongodb connection succeeded')
    else if(!err)console.log('Error while connecting MongoDB'+JSON.stringify(err,undefined,2))
})