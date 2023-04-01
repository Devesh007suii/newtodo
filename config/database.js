import mongoose from "mongoose";
export const connectDatabase = ()=> {
mongoose.connect("mongodb+srv://deveshs785dds:HvTjR4U9Mf2Wq7UX@cluster0.8w4hexg.mongodb.net/test").then(()=>{console.log(`MongoDb connected`)})
}