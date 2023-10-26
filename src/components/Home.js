import React from 'react';

function Home(){
    
    const handleLogout = () => {
    window.location.href='/';
    };
    return(
    <div className='navbar'>
        <p>
            <h1><b>WELCOME TO NURSE BOOKING WEBSITE</b></h1>
            <br></br>
            <p>The nurse booking website is a web-based application designed to help patients book nursing services online. The website enables patients to find and book registered nurses for various medical services from the comfort of their homes. The website provides a user-friendly interface that allows patients to search for nurses based on their location, specialty, availability, and ratings. The nurse booking website provides a convenient platform for both patients and nurses. </p>
            <br></br>
            {/* <h3>This website helps the patients to book nurse.</h3> */}
            <a href='/viewnurse'>View Nurse</a>
        </p>
        
        <button className='but' onClick={handleLogout} >Logout</button>
    </div>
)}
export default Home;