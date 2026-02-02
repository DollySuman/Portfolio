import React from 'react'
import './About.css'
import Card from './Card'
import Navbar from './Navbar'

const About = () => {
  return (
    
    <div className=''>
      <Navbar/>
      <div className="intro">
       <div className="name"> Hey I'm Dolly Suman</div>
      <Card text="I'm a dedicated frontend developer with a strong foundation in JavaScript and React, focused on building efficient and scalable web applications. Passionate about learning and innovation, I strive to deliver impactful digital solutions through clean code and thoughtful design. "/>
       
      </div>


      <div className="stack">
      <img src="src/assets/stacks/css.0ce0f0a2b4c4aa34b64c40e5278af3d1.png" alt="" srcset="" />
      <img src="src/assets/stacks/git.3092b5991e8accb9e7c36817c048a8d5.png" alt="" srcset="" />
      <img src="src/assets/stacks/github-logo.d03ce87cf6b5a432c44f847eefec1204.png" alt="" srcset="" />
      <img src="src/assets/stacks/html.6aa56206be02cf6404844871df1d2da6.png" alt="" srcset="" />
      <img src="src/assets/stacks/js.f8a28e905c78dadb79434b7ceebd52a0.png" alt="" srcset="" />
      <img src="src/assets/stacks/react.cb15bfce2a9004ce61c5f79f805b067b.png" alt="" srcset="" />
      <img src="src/assets/stacks/node.png" alt="" srcset="" />
      <img src="src/assets/stacks/express.jpeg" alt="" srcset="" />
      
      </div>

    </div>
  )
}

export default About
