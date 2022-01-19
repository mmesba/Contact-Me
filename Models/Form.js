/*
 * Title: Form Model
 * Description: Form Model to store user data
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mmesba
 * Date: 19/01/2022
 */
 
// Dependencies.
 const mongoose = require('mongoose');
  
// main functions or objects.
//  Creating Form Schema
const formSchema = mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    email : {
        type : String,
        required: true
    },
    subject : {
        type : String,
        required : true
    },
    text : {
        type : String,
        required : true
    }
})
 
 
// Creating Model using  form schema
const FormModel = mongoose.model('Contact', formSchema);


// export the module.
 module.exports = FormModel;