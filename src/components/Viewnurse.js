import React from "react";
import nurses from "../nurses";
import Nursedetails from "./Nursedetails";

function Viewnurse(){
    const nurseDetails = nurses.map(item=>{
        return <Nursedetails
        key={item.id}
        name={item.nurseName}
        ph={item.phoneNumber}
        img={item.image}
        rating={item.rating}
        hospital={item.hospital}
        loc={item.address}/>

    })
    const handleLogout = () => {
        window.location.href='/';
        };
    return(
        <div className='navbar'>
            {nurseDetails}
            <button className="but" onClick={handleLogout} >Logout</button>
        </div>
        
    )

}
export default Viewnurse;