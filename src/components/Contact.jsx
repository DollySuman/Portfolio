import React, {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import Navbar from './Navbar'
import './Contact.css'



const Contact = () => {

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting,isSubmitSuccessful },
  } = useForm({
    defaultValues:{
      name:"",
      email: "",
      Message: ""
    },
  });

  // const onSubmit = async(data) =>{
  //   let r = await fetch("http://localhost:5000/contact", {method: "POST", headers:{
  //     "Content-Type": "application/json",
  //   },body: JSON.stringify(data)})

  //   let res = await r.text();
  //   console.log(data,res);
  // }

  const [alert, setalert] = useState(null)
  const onSubmit = async(data) => {
    let r = await fetch("http://localhost:3000/contact",{method: "POST", headers:{
      "Content-Type": "application/json",
    }, body: JSON.stringify(data)
  })

  let res = await r.text();
  setalert(res)
  }

  useEffect(()=>{
    if (isSubmitSuccessful){
      reset();
    }
  },[isSubmitSuccessful,reset])


  useEffect(() => {
    if(alert){

      const timer = setTimeout(() => {
        setalert(null)
      }, 1000);

      return ()=> clearTimeout(timer);
      
    }
    
  }, [alert])
  

  return (
    <div>
      {alert && <div className='alert'> {alert}</div>}
      <Navbar/>
      <div className="connect">

        <div className="cont">Contact Me</div>
        <div className="note">Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</div>
        <div className="getemail">
          <form method='POST' className='flex' action="" onSubmit={handleSubmit(onSubmit)}  >

            <div className="putname">
              <input type="text" placeholder='Name' {...register('name', { required: { value: true, message: "This field is required" } })} />
              {errors.name && <div className="error">{errors.name.message}</div>}
            </div>

            <div className="putemail">
              <input type="text" placeholder='Email' {...register('email', { required: { value: true, message: "This field is required" } })} />
              {errors.email && <div className='error'>{errors.email.message} </div>}
            </div>

            <div className="putmsg">
              <input type="text" placeholder='Message' {...register('Message', { required: { value: true, message: "This field is required" } })} />
              {errors.Message && <div className='error'>{errors.Message.message} </div>}
            </div>
            <input type="submit" value="Submit" className='subbtn' />
          </form>

        </div>
      </div>
    </div>
  )
}


export default Contact
