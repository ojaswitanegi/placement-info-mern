var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req,res,next){
  res.send("Welcome to Login");
})

var users=[
  {email: 'abc@gmail.com', password: 'password'
}
]



router.post('/adminlogin',function(req,res){
          let result=users.find(user => user.email == req.body.email);
          if(result){
              if(result.password == req.body.password){
                  res.status(200).send({
                      message:"Successful Login!!"
                  })
              }else {
                  res.status(200).send({
                      message: "Password incorrect!"
                  })
              }
          }
              else {
                  res.status(200).send({
                      message: "User not Found!"
                  })
              }
          
});




module.exports = router;
