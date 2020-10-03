import React from 'react';
import'./Dbcard.css';

const Dbcard=({name, email,address,phNo,image,time})=>{

return(
<div  id="car">
     <img alt="guy" className='cardimg'src={image}/>
      <div className="inf">
          <p className="nam"> <b>{name}</b></p>
          <p id="email">Email :</p><p>{email}</p>
          <p>Phone No. : {phNo}</p>
          <p>Address : {address}</p>
      </div>
 </div>      
	);
}

export default Dbcard;