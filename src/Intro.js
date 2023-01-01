import React from 'react'
import './style.css'

export default function Intro(){
    return (
        <div className='profile-con'>
            <div className="profile-picture-con">
                <img src={require('./profile.jpg')} alt='profile' className='profile-picture'/>
            </div>

            <h1 className='name'>Salawu Abdullahi 0.</h1>
            <p className='profession'>FrontEnd Developer</p>
            <p className='email'>s.abdullahi.com</p>
            <div className='contact-link'>
                
                <a href='mailto:salawu.abdullahi01@gmail.com'>
                    <button><img src={require('./image/Mail.png')}/> Email</button>
                </a>
                <a href='https://www.linkedin.com/in/saolalekan/' target='_blank'>
                    <button className='linkedin'><img src={require('./image/linkedin.png')}/>Linkedin</button>
                </a>
            </div>
        </div>
    )
}