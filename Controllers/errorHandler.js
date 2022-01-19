/*
 * Title: Error Handler File
 * Description: Project's Error Handler File
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mmesba
 * Date: 19/01/2022
 */
 
// Dependencies.
 
 
// App object or Module scaffolding.
 
// main functions or objects.
const errorHandler = function(err, req, res, next) {
    if (err) {
        res.status(500).send(err.message) 
      } else {
         res.status(500).send('There was an error')
     }
} 
 
 
 
// export the module.
 module.exports = errorHandler;