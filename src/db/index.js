import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDb = async ()=>{
    try{
         const connectionIntance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
         console.log(`Mongo CONNECTED ${connectionIntance.connection.host}`)
    }catch(err){
        console.log(`Mongo Db connection FAILED ${err}`)
        process.exit(1);
    }
}

export default connectDb                                                                                                                                                                                    