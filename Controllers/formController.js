/*
 * Title: Form Controller File
 * Description: Form Controller File for api
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mmesba
 * Date: 19/01/2022
 */
 
// Dependencies.
 const FormModel = require('../Models/Form');
  
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
            res.render({data: req.body})
        }
   })
 }
 
 
 
// export the module.
 module.exports = submit;