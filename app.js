const { response } = require('express');
const express = require('express');
const dotenv = require('dotenv');

const app = express()
dotenv.config()

app.use(express.static('public'))

var port=process.env.PORT;
// if(process.env.PORT != undefined){
//   port=process.env.PORT;
// }
// else {
//   port='3001';
// }

app.listen(port, 
  function(){
    console.log('App listening on port '+port);
  }
)