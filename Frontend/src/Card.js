import React from 'react';
import'./Card.css';

const Card=({name, email,address,phNo,image,time})=>{

return(
<div  id="card">
     <img alt="guy" className="cardimg" src={image}/>
      <div className="info">
          <p className="name"> <b>{name}</b> entered at {time}</p>
          <p>Email : {email}</p>
          <p>Phone No. : {phNo}</p>
          <p>Address : {address}</p>
      </div>
 </div>      
	);
}

export default Card;