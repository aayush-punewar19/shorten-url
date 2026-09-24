import mongoose from "mongoose"

const urlSchema = new mongoose.Schema({
    originalUri:{
        type:String,
        required:true,
    },
    ShortCode:{
        type:String,
        required:true,
        unique:true,
    },
    clicks:{
        type:Number,
        default:0,
    }
},
{timestamps:true})

const urlModel = mongoose.model("url", urlSchema)

export default urlModel;