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
    const handleSubmit= async(e)=>{
        let formField=new FormData
        formField.append("name",crushName)
        formField.append("author_name",yourName)
        formField.append("message",message)
        formField.append("email",email)
        formField.append("auth_phno",pno)
        await axios({
          method:'post',
          url:`${baseUrl}/person/`,
          data: formField
        }).then((response)=>{
          console.log(response)
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
 
      <input className='field1' value={crushName} placeholder="&#xf007; Your crush name" type="text" tabindex="1" required autofocus onChange={(e)=>{setCrushName(e.target.value)}}/>
   
      <input className='field1' value={yourName} placeholder="&#xf007; Your name" type="text" tabindex="1" required autofocus onChange={(e)=>{setYourName(e.target.value)}}/>
   
      <input className='field1' value={email} placeholder="&#xf0e0; Your Email Address" type="email" tabindex="2" required onChange={(e)=>{setEmail(e.target.value)}}/>
   
      <input className='field1' value={pno} placeholder="&#xf095; Your Phone Number (optional)" type="tel" tabindex="3" required onChange={(e)=>{setPno(e.target.value)}}/>
   
      <textarea  className='field2' value={message} placeholder=" &#xf27a; Type your message here...." tabindex="5" required onChange={(e)=>{setMessage(e.target.value)}}></textarea>
    
      <button className='field3'
      name="submit" type="submit" id="contact-submit" data-submit="...Sending">Send</button>
    
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