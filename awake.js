/*
 * Title: Awake Idling Module
 * Description: Awake Idling Servers by frequent requesting.
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mmesba
 * Date: 23/01/2022
 */
 
// Dependencies.
 const https = require('https');
 
// App object or Module scaffolding.
 const awake = {};
// main functions or objects.
awake.link = 'https://mesba.azurewebsites.net/'
 awake.awake = ()=>{

     //  Perform https get request
      https.get(awake.link, (res)=>{
          console.log(`Requesting: ${awake.link} `);
          console.log(`Status Code:  \x1b[31m${res.statusCode}\x1b[0m`);
      }).on('error', (e)=>{
          console.log(e);
      })
 }
 
// export the module.
 module.exports = awake;