import React from "react";
// import nurses from "../nurses";

function Nursedetails(props){
    
    return(
        <div className="nursedetails">
            {props.key} <h2>Nurse Name: {props.name}</h2>
            <p>From {props.hospital}</p>
            <img src={props.img} alt=""/>
            <br></br>
            <small><b>Address:</b> {props.loc}</small>
            <p>Phone Number: <b>{props.ph}</b></p>
            <p>Rating: {props.rating}</p>
            <p><a href='/booking'>Book here</a></p>
            <hr className="separator"></hr>
        </div>
    )

}

export default Nursedetails;