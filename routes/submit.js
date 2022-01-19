/*
 * Title: Submit Route
 * Description: Submit Route for app
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mmesba
 * Date: 19/01/2022
 */
 
// Dependencies.
 const express = require('express');
const router = express.Router();
 
 
// main functions or objects.
 router.post('/', (req, res)=>{
     res.send('ok')
 })
 
 
 
// export the module.
 module.exports = router;