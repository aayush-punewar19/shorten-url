import { Router } from "express"
import urlModel from "../model/uri.model.js"
import generateCode from "../utils/generateCode.js"

const router = Router()



router.post("/create",async(req,res)=>{
    let {url} = req.body

    if(!url){
        return res.status(400).json({
            error:"url not found"
        })
    }
    if(url.startsWith("http://") == false && url.startsWith("https://")== false){
    return res.status(400).json({
        error:"invalid url ! url must startsWith https://"
        })
    }
    if(url.length > 2048){
        return res.status(400).json({
            error:"url is too long"
        })
    }

    let code = generateCode()

    let newUrl = await urlModel.create({
        originalUri:url,
        ShortCode:code
    })

    return res.status(201).json({
        message:"url shortend successfully",
        data:{
            newUrl
        }
    })

})

router.get("/all",async(req,res)=>{
    let allUrls = await urlModel.find()

    return res.status(200).json({
        message:"All urls fetched successfully",
        data:{
            allUrls
        }
    })
})

router.delete("/:id", async(req,res)=>{
    let {id} = req.params

    let deleteUrl = await urlModel.findByIdAndDelete(id) 
     if (!deleteUrl) {
        return res.status(404).json({
            error: "url not exist"
        })
    }
    return res.status(200).json({
        message:"url deleted successfully"
    })


})


export default router