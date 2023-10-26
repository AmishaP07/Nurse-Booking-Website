import React, { useState } from 'react';
import '../Login.css';
import axios from 'axios';

function Signup() {
  // function handleClick() {
  //   window.location.href = '/home'; 
  // } 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(phoneNumber.length!==10){
      alert("Enter 10 digit number");
    }
    if(email.length===0){
      alert("Enter email");
    }
    else if(password.length===0){
      alert("Enter password");
    }
    else if(phoneNumber.length===10){
      // alert("Registered!!");
      window.location.href = '/';
      const url="http://localhost/nursebooking/src/api/signup.php";

      let data=new FormData();
      data.append('email',email);
      data.append('password',password);
      data.append('phoneno',phoneNumber);

      axios.post(url,data)
      .then(response=>alert(response.data))
      .catch(error=>alert(error));
    }
    // else{
    //   window.location.href = '/home';
    // }
    console.log(`Email: ${email}, Password: ${password}`,`PhoneNumber: ${phoneNumber}`);
  };

  return (
    <div className="container">
      <h1>SIGNUP</h1>
      <form method="post" action='signup.php'>
        <label className='regemailtxt'>
          Email:
          <input className='regemail' required type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label className='regpasstxt'>
          Password:
          <input classname='regpassword' required type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <label className='regnotxt'>
        Phone Number:
        <input className='regphoneno' required
          type="tel"
          name="phoneno"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </label>
      <br/>
        <button className='but' onClick={handleSubmit} type="submit">SIGN UP</button>
      </form>
      <p>Already registered? <a href="/">Login here</a></p>
    </div>
  );
}

export default Signup;
