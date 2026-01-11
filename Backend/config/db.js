const mongoose = require('mongoose');

const connectToDataBase=async()=>{
        try {
            const resp=await mongoose.connect(process.env.MONGO_URI);
            if(resp){
                console.log("Connection Successful");
            }else{
                console.log("Connection UnSuccessful");
                
            }
        } catch (error) {
            console.log(error);
        }
}

module.exports={connectToDataBase}