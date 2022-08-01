import axios from 'axios'
import React from 'react'
import './Card.css'
import { baseUrl } from '../../utils/urls'

const Card = (props) => {
  
  return (
    <div>
        <div class="card">
    <div class="icon">
      <ion-icon name="globe-outline"></ion-icon>
    </div>
    <div class="content">
      <h2>To: {props.name}</h2>
      <p>Message: {props.message}</p>
      <p>author: {props.auth_name}</p>
      <p>Email: {props.email}</p>
      <p>Author Phone: {props.phno}</p>
      <button onClick={()=>{
        axios.delete(`${baseUrl}/person/${props.id}/`).then(res=>{
          console.log(res)
          window.location.reload();
        })
      }}>remove</button>
      
    </div>
  </div>
    </div>
  )
}

export default Card