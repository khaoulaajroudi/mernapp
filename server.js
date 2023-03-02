const express= require('express');
const connectdb=require('./config/connectdb')
const cors = require('cors')
// initialisation server express
const app = express();
require('dotenv').config()


// connection base données
connectdb()

// creation middleware
app.use(cors())
app.use(express.json())
app.use("/contact",require("./routes/contact"))



// creation server
port=process.env.PORT 
app.listen(port,(err)=>{
    err?console.log(err):console.log("server is already listening")
})