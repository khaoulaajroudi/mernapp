const mongoose= require('mongoose');
const schema = mongoose.Schema

const contactschema= new schema ({

    name:{
        type:String,
        required:true,
    },

    phone:{
        type:String,
    },

    email:{
        type:String,
        required:true,
    },
    tab:[]
})


const contact= mongoose.model("contact",contactschema)
module.exports= contact