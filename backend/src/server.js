import dns from "node:dns/promises"
dns.setServers(["1.1.1.1", "8.8.8.8"]); 

import app from "./app/app.js";
import ConnectDB from "./config/db.js";

await ConnectDB()

app.listen(3000 , ()=>{
    console.log("server is running on port 3000")
})
