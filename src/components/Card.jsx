import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <>
      <div className="container">
        <div className="card">

        <div className="pic">
           <img src={props.img} alt="" /> 
           <img src={props.img1} alt="" /> 
           <img src={props.img2} alt="" /> 
        </div>

        <div className="text">
            {props.headline}
        </div>

        <div className="readme">
            <p>
                {props.text}
            </p> 
        </div>
        
        </div>
      </div>
    </>
  )
}

export default Card
