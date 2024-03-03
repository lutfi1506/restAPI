import mongoose from 'mongoose';
const uri = process.env.MONGODB_URI;

mongoose.connect(uri).then(() => console.log("connected mongo")).catch(console.dir)