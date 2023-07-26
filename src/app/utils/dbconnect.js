const mongoose = require('mongoose');
const dotenv = require('dotenv');

const dbconnect = async () => {
    try{
        mongoose.set('strictQuery',false);
      if(mongoose.connect(process.env.MONGO_URI)){ 
        console.log("MONGO CONNECT")}
    }catch(err){
         console.log(err);
         process.exit();
    }
     };

module.exports = dbconnect;
