/*
 * Title: Form Controller File
 * Description: Form Controller File for api
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mmesba
 * Date: 19/01/2022
 */
 
// Dependencies.
 const FormModel = require('../Models/Form');
const nodemailer = require('nodemailer');
  
// main functions or objects.
 const submit = (req, res)=>{
   const formData = new FormModel({
       name : req.body.name,
       email : req.body.email,
       subject : req.body.subject,
       text : req.body.txt 
   })
   formData.save((err)=>{
       if (err) {
           res.status(500).send('error  '+err.message) 
         } else {
// Setting up configuration for mailing service
let output = `
<h3>Hey ${req.body.name} , I just received your submitted data and you will hear from me very soon</h3>
<br/>
<h4>Your Submitted Contact</h4>
<ul>
    <li>Name: ${req.body.name}</li>    
    <li>Email: ${req.body.email}</li>    
    <li>Subject: ${req.body.subject}</li>    
</ul>
<h4>Message</h4>
<p>${req.body.txt}</p>
`;
// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.CUSTOMCONNSTR_COME_HERE_BRO, // generated ethereal user
      pass: process.env.CUSTOMCONNSTR_GET_LOST, // generated ethereal password
    },
    tls: {
        rejectUnauthorized: false
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Mesba 👻" <mesbaul556@gmail.com>', // sender address
    to: req.body.email,  // list of receivers
    subject: "Submission Successful ✔", // Subject line
    html: output, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}


          // Call mailer function alongside submission

          main().catch(console.error);
            res.render('success.ejs', {data: req.body})
        }
   })
 }
 
 
 
// export the module.
 module.exports = submit;