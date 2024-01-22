import mongoose from "mongoose";

let inConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL not found')
    if(inConnected) return console.log('already connected')

    try {
        await mongoose.connect(process.env.MONGODB_URL);

        inConnected = true;
        console.log('connected to MONGODB')
    } catch (error) {
        console.log(error)
    }
}