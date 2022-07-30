import React, { useEffect, useState } from 'react'
import './MainPage.css'
import Lottie from 'react-lottie'
import anim from '../../animations/anim.json'
import Card from '../../components/Card/Card'
import { baseUrl } from '../../utils/urls'
import axios from 'axios'
const MainPage = () => {
    const[persons,setPerson]=useState([])
    const[crushName,setCrushName]=useState('')
    const[yourName,setYourName]=useState('')
    const[email,setEmail]=useState('')
    const[pno,setPno]=useState(0)
    const[message,setMessage]=useState('')


    useEffect(()=>{
        axios.get(`${baseUrl}/person/`).then((response)=>{
            setPerson(response.data)
        },(error)=>{
            console.log(error)
        })
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.POST(`http://127.0.0.1:8000/person/`,{
            email:email,
            name:crushName,
            auth_name:yourName,
            message:message,
            auth_phno:pno,

        }).then((response)=>{
            console.log(response)
        },(error)=>{
            console.log(error)
        })
    }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: anim,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <div>
        <div className="parent__container">
        <div class="container">  
  
</div>
            <div className="title">My Dater</div>
            <div className="land__anim">
                <Lottie options={defaultOptions} style={{width:'90%' ,height:'30%'}}/>
            </div>

            <form  className='form-container' id="contact" onSubmit={handleSubmit}>
    <fieldset>
      <input className='field1'  value={crushName} placeholder="Your crush name" type="text" tabindex="1" required autofocus onChange={(e)=>{setCrushName(e.target.value)}}/>
    </fieldset>
    <fieldset>
      <input className='field1' value={yourName} placeholder="Your  name" type="text" tabindex="1" required autofocus onChange={(e)=>{setYourName(e.target.value)}}/>
    </fieldset>
    <fieldset>
      <input value={email} placeholder="Your Email Address" type="email" tabindex="2" required onChange={(e)=>{setEmail(e.target.value)}}/>
    </fieldset>
    <fieldset>
      <input value={pno} placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required onChange={(e)=>{setPno(e.target.value)}}/>
    </fieldset>
    <fieldset>
      <textarea value={message} placeholder="Type your message here...." tabindex="5" required onChange={(e)=>{setMessage(e.target.value)}}></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Send</button>
    </fieldset>
   
  </form>


            <div className="child__container">
                {persons.map((person)=>{
                    return(
                    <Card id={person.id} name={person.name} message={person.message} auth_name={person.author_name} email={person.email} phno={person.auth_phno} data={person.date} />
                    )
                })}

            </div>
        </div>

        <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
    </div>
  )
}

export default MainPage