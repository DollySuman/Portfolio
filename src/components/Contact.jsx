import React from 'react'
import { Form , useForm} from 'react-hook-form'



const Contact = () => {
  
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  return (
    <div>
        <div className="connect">

      <div className="cont">Contact Me</div>
      <div className="note">Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</div>
      <div className="getemail">
      <form action="" ></form>
        <div className="putname">
        <input type="text" placeholder='Name' {...register('name',{required: {value: true, message: "This field is required"}})} />
        </div>

        <div className="putemail">
        <input type="text" placeholder='Email' {...register('email',{required: {value: true, message: "This field is required"}})} />
        </div>

        <div className="putmsg">
        <input type="text" placeholder='Message' {...register('Message', {required: {value: true, message: "This field is required"}})} />
        </div>
        <input  type="submit" value="Submit" />

        </div>
      </div>
    </div>
  )
}


export default Contact
