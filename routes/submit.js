/*
 * Title: Submit Route
 * Description: Submit Route for app
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mmesba
 * Date: 19/01/2022
 */
 
// Dependencies.
 const express = require('express');
const formController = require('../Controllers/formController')
const router = express.Router();
 
 
// main functions or objects.
 router.post('/', formController)
 
 
 
// export the module.
 module.exports = router;