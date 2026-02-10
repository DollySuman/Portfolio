import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import nodemailer from "nodemailer";

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post('/mail', (req,res)=>{
  const {name , email, Message} = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "",
      pass: ""
    } 
  })
})

app.get('/mail', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
