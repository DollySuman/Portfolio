import 'dotenv/config'
import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser'
import nodemailer from "nodemailer";

const app = express()
const port = 3000
app.use(cors())

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post('/contact', (req,res)=>{
  const {name , email, Message} = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
      
      
    } 
  })
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to:process.env.EMAIL_USER,
    subject: `Portfolio Checked by ${name}`,
    text: `${Message} || Email :- ${email}`,
    replyTo: email

  }

  transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
      console.error("ERROR OCCURED DEBUG IT", error);
      res.status(500).send('Error in sending email. Please try again later.')

    }

    else{
      console.log("Email sent successfully:", info.response);
      res.send('Email sent')
    }
  })
})

app.get('/mail', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})


// Steps internally:

// Connect to Gmail SMTP

// Authenticate

// Transmit message

// Receive response

// Callback receives:

// error → failure

// info → success metadata


/*Browser form submit
        ↓
POST /send-email
        ↓
body-parser middleware
        ↓
req.body extracted
        ↓
nodemailer SMTP connection
        ↓
email transmitted
        ↓
HTTP response returned
*/