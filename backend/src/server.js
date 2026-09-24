import dns from "node:dns/promises"
dns.setServers(["1.1.1.1", "8.8.8.8"]); 

import app from "./app/app.js";
import ConnectDB from "./config/db.js";
const PORT = process.env.PORT || 3000;
await ConnectDB()

app.listen(PORT , ()=>{
    console.log("server is running on port 3000")
})
