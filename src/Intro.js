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
                <button><img src={require('./image/Mail.png')}/> Email</button>
                <button className='linkedin'><img src={require('./image/linkedin.png')}/>Linkedin</button>
            </div>
        </div>
    )
}