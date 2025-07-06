const mongoose = require('mongoose');

function connectToDatabase(){
    mongoose.connect(
        process.env.DB_CONNECT
    ).then(()=>{
        console.log('Connected to MongoDB...!!!');
    }).catch((err)=>{
        console.log("error connecting to MongoDB", err);
    })
}


module.exports = connectToDatabase;