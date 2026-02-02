import React from 'react'
import Card from './Card.jsx'
import Navbar from './Navbar'
import city from '../assets/city.png'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="main">
      <Card img1 = 'https://i.pinimg.com/1200x/f7/b5/0e/f7b50ea3ddfd7a4b4454d438950297e7.jpg' img2 = {city} img= 'https://img.freepik.com/premium-photo/abstract-background-with-blue-wave-white_476363-5646.jpg?semt=ais_hybrid&w=740&q=80' headline = 'Frontend dev' text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel beatae blanditiis incidunt? Velit fugit necessitatibus praesentium quaerat accusantium beatae sequi?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel beatae blanditiis incidunt? Velit fugit necessitatibus praesentium quaerat accusantium beatae sequi?'/>
      <Card img1 = 'https://i.pinimg.com/1200x/f7/b5/0e/f7b50ea3ddfd7a4b4454d438950297e7.jpg' img2 = {city} img= 'https://img.freepik.com/premium-photo/abstract-background-with-blue-wave-white_476363-5646.jpg?semt=ais_hybrid&w=740&q=80' headline = 'Frontend dev' text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel beatae blanditiis incidunt? Velit fugit necessitatibus praesentium quaerat accusantium beatae sequi?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel beatae blanditiis incidunt? Velit fugit necessitatibus praesentium quaerat accusantium beatae sequi?'/>
      <Card img1 = 'https://i.pinimg.com/1200x/f7/b5/0e/f7b50ea3ddfd7a4b4454d438950297e7.jpg' img2 = {city} img= 'https://img.freepik.com/premium-photo/abstract-background-with-blue-wave-white_476363-5646.jpg?semt=ais_hybrid&w=740&q=80' headline = 'Frontend dev' text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel beatae blanditiis incidunt? Velit fugit necessitatibus praesentium quaerat accusantium beatae sequi?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel beatae blanditiis incidunt? Velit fugit necessitatibus praesentium quaerat accusantium beatae sequi?'/>
    
     </div>
    </div>
  )
}

export default Home
