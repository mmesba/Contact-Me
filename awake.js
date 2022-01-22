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
 awake.awake = (link)=>{
    //  wrap everything in an interval function
    setInterval(() => {
    //  Sanity Checking of link
     link = typeof(link) === 'string' && link.trim().length > 0 ? link : false;
     //  Perform https get request
      https.get(link, (res)=>{
          console.log(`Requesting: ${link} `);
          console.log(`Status Code:  \x1b[31m${res.statusCode}\x1b[0m`);
      }).on('error', (e)=>{
          console.log(e);
      })
    }, 1000*60*15);
 }
 
// export the module.
 module.exports = awake;