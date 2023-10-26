import React from "react";

function Bookingconfirm(){
    const handleLogout = () => {
        window.location.href='/';
        };
    return(
        <div className="navbar">
            <p className="bookingconfirm"><h1>BOOKING CONFIRMED!!</h1></p>
            <button className="but" onClick={handleLogout} >Logout</button>
        </div>
    )
}

export default Bookingconfirm;