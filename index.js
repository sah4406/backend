 const express= require("express"); 
require('./db/config');

const User = require("./db/User");
 const app = express();

 app.use(express.json());

 app.post("/register", async (req, resp)=>{

let user= new User(req.body);
 var result = await user.save();
    
     resp.send("this api is working") 

 })




app.listen(5000)