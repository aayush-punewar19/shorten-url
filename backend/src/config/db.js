import config from "./config.js"

const PORT = process.env.PORT || 3000;

const ConnectDB  = async()=>{
    try {
     await mongoose.connect(config.MONGO_URI)
    console.log("MongoDB connected")
        
    } catch (error) {
        console.log("error in MONGO_URI",error)
    }
}
export default ConnectDB;