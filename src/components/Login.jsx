import React, { useState } from 'react';
import '../Login.css';
import axios from 'axios';
// import { response } from 'express';



function Login() {
  // function handleClick() {
  //   window.location.href = '/home'; 
  // }  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  // const[data,setData]=useState({
  //   email:"",
  //   password:""
  // })

  // const handleChange=(event)=>{
  //   setData({...data,[event.target.name]:event.target.value});
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    // const sendData={
    //   email:data.email,
    //   password:data.password
    // }
    // console.log(sendData);
    if(email.length===0){
      alert("Enter email");
    }
    else if(password.length===0){
      alert("Enter password");
    }
    else{
      window.location.href = '/home';
      const url="http://localhost/nursebooking/src/api/index.php";

      let data=new FormData();
      data.append('email',email);
      data.append('password',password);

      axios.post(url,data)
      .then(response=>alert(response.data))
      .catch(error=>alert(error));
    }
    console.log(`Email: ${email}, Password: ${password}`);


    // axios.post('http://localhost/nursebooking/src/api/index.php',sendData)
    // .then((result)=>{
    //   if(result.data.Status==='Invalid')
    //   alert('Invalid User');
    //   else
    //   window.location.href = '/home';
    // })
  };
  
  return (
    <div className="container">
      <h1>LOGIN</h1>
      <form method="post" action='index.php'>
        <div className='email'>
        <label className='emaillab'>
          <span className='teext'>Email:</span>
          <input className='email' required type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          {/* onChange={(event) => setEmail(event.target.value)} */}
        </label>
        </div>
        <br />
        <label className='passwordlab'>
          Password:
          <input className='password' required type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button className='but' onClick={handleSubmit} type="submit">Login</button>
      </form>
      <p>Not a user <a href="/signup"> Signup here</a></p>
      {/* <p className="links">Not a user <Link to="/signup"> Signup here</Link></p> */}
    </div>
  );
}

export default Login;
