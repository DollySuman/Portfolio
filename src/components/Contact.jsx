import React from 'react'
import { useForm } from 'react-hook-form'
import Navbar from './Navbar'
import './Contact.css'



const Contact = () => {

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  // const onSubmit = async(data) =>{
  //   let r = await fetch("http://localhost:5000/contact", {method: "POST", headers:{
  //     "Content-Type": "application/json",
  //   },body: JSON.stringify(data)})

  //   let res = await r.text();
  //   console.log(data,res);
  // }

  const onSubmit = async(data) => {
    let r = await fetch("http://localhost:5000/contact",{method: "POST", header:{
      "Content-Type": "application/json",
    }, body: JSON.stringify(data)
  })

  let res = await r.text();
  console.log(data,res);
  }
  return (
    <div>
      <Navbar/>
      <div className="connect">

        <div className="cont">Contact Me</div>
        <div className="note">Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</div>
        <div className="getemail">
          <form className='flex' action="" onSubmit={handleSubmit(onSubmit)}  >

            <div className="putname">
              <input type="text" placeholder='Name' {...register('name', { required: { value: true, message: "This field is required" } })} />
              {errors.name && <span className="error">{errors.name.message}</span>}
            </div>

            <div className="putemail">
              <input type="text" placeholder='Email' {...register('email', { required: { value: true, message: "This field is required" } })} />
            </div>

            <div className="putmsg">
              <input type="text" placeholder='Message' {...register('Message', { required: { value: true, message: "This field is required" } })} />
            </div>
            <input type="submit" value="Submit" />
          </form>

        </div>
      </div>
    </div>
  )
}


export default Contact
