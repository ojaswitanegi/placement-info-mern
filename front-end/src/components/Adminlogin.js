import React from 'react';
import axios from 'axios';

const Adminlogin=()=>{
    return ( 
        <div className="container">
       <form onSubmit= {(e)=>login(e)}>
  <div class="mb-3">
    <label for="" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit<a href="http://localhost:3000/changeroutelater">.</a></button>
</form>
</div>
    
    );
};

function login(e){
  e.preventDefault();
  let request= {
    email:  document.getElementById('exampleInputEmail1').value, 
    password: document.getElementById('exampleInputPassword1').value,
  }
   axios.post('http://localhost:3000/adminlogin', request)
   .then(resp =>{
     alert(resp.data.message);
   })
   .catch(err =>{
     console.log(err);
   })
}


export default Adminlogin;
