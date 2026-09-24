
import { axiosInstance } from "../../api/axiosInstance"

export const getAllUrl = ()=>{
    try {
        let res = axiosInstance.get("/all")
        return res
        
    } catch (error) {
        console.log("error in get url api",error)
        
    }
}