import React, { useState }from "react";
import axios from "axios";

function Booking(){
    // function handleClick() {
    //     window.location.href = '/bookingconfirm'; 
    //   } 
    const [name, setName] = useState('');
    const [phoneno, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = '/bookingconfirm';
        const url="http://localhost/nursebooking/src/api/booking.php";
  
        let data=new FormData();
        data.append('name',name);
        data.append('phoneno',phoneno);
        data.append('gender',gender);
        data.append('age',age);
        data.append('address',address);
        data.append('time',time);
        data.append('date',date);
  
        axios.post(url,data)
        .then(response=>alert(response.data))
        .catch(error=>alert(error));
      }
      console.log(`Name: ${name}, Phonenumber: ${phoneno}, Gender: ${gender}, Age: ${age}, Address: ${address}, Time: ${time}, Date: ${date}`);



    const handleLogout = () => {
        window.location.href='/';
        };
    return(
        <div className="container">
           <h1>BOOKING</h1> 
    <form method="post" action='booking.php'>
      <label>
        Name:
        <input className="name" type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Phone Number:
        <input className="phoneno" type="text" value={phoneno} onChange={e => setPhone(e.target.value)} />
      </label>
      <br />
      <label>
        Gender:
        <select className="gender" value={gender} onChange={e => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Age:
        <input className="age" type="number" value={age} onChange={e => setAge(e.target.value)} />
      </label>
      <br />
      <label>
        Address:
        <textarea className="address" value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <br />
      <label>
        Time:
        <input className="time" type="time" value={time} onChange={e => setTime(e.target.value)} />
      </label>
      <br />
      <label>
        Date:
        <input className="date" type="date" value={date} onChange={e => setDate(e.target.value)} />
      </label>
      <br />
      <p><button className="but1" onClick={handleSubmit} type='submit'>Confirm Booking</button></p>
      {/* <button type="submit">Submit</button> */}
    </form>
            
            <button className="but" onClick={handleLogout} >Logout</button>
        </div>
    )
};

export default Booking;