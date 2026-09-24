import express from "express"
import uriRoute from "../routes/uri.routes.js"
import urlModel from "../model/uri.model.js"

const app = express()
app.use(express.json())

app.use("/api/url",uriRoute)
app.get("/:code", async(req,res)=>{

    let code = req.params.code

    let url = await urlModel.findOne({
        ShortCode:code
    })
    if(!url){
        return res.status(400).json({
            error:"url not found"
        })
    }

    res.redirect(302 ,url.originalUri)
    await urlModel.findOneAndUpdate({
        ShortCode:code
    },{
        $inc :{clicks:1}
    })


})
export default app


