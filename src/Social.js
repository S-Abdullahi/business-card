import React from 'react'

export default function Social(){
    return(
        <div className='social-media'>
            <a href="https://twitter.com/_devfocus" target='_blank'><img src={require('./image/Twitter.png')}/></a>
            <a href="#" target='_blank'><img src={require('./image/Facebook.png')}/></a>
            <a href="#" target='_blank'><img src={require('./image/Instagram.png')}/></a>
            <a href="https://www.linkedin.com/in/saolalekan/" target='_blank'><img src={require('./image/linkedin-large.png')}/></a>
            <a href="https://github.com/S-Abdullahi" target='_blank'><img src={require('./image/GitHub.png')}/></a>
        </div>
    )
}