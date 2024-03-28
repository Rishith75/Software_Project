const mongoose = require('mongoose');

const clerkSchema = new mongoose.Schema({
    UserID: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    suburb:{
        type: String,
    },
    city:{
        type: String,
    }
    
})

mongoose.model("CLERK" , clerkSchema)