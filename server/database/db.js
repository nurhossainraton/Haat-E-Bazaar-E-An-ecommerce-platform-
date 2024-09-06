import mongoose from "mongoose";

export const db =async(username,password)=> {
   // const url = process.env.MONGODB_URI || `mongodb://${username}:${password}@ac-njdmwnc-shard-00-00.ibaqknc.mongodb.net:27017,ac-njdmwnc-shard-00-01.ibaqknc.mongodb.net:27017,ac-njdmwnc-shard-00-02.ibaqknc.mongodb.net:27017/?ssl=true&replicaSet=atlas-ogpspv-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;

   const url = process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@cluster0.ibaqknc.mongodb.net/`;


    try{
        console.log("connecting to database")
        await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true,serverSelectionTimeoutMS: 30000, // Increase the timeout
        socketTimeoutMS: 45000 })// Increase the socket timeout);    
        console.log("Database connected succccessfully");
    }catch(error){
        console.log("error while connecting "+error.message)
    }
}

export default db;