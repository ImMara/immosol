const mongoose = require('mongoose');
const schema = mongoose.Schema;

const locationSchema = schema({

    title: {
        type: String,
        required: true,
        unique: true,
    },

    contact:{
        name:{type:String},
        email:{type:String},
        phone:{type:String},
        facebook:{type:String}
    },

    city:{type:String},

    zip:{type:Number},

    country: {type:String},

    details:{
        surface:{type:Number},
        bedroom:{type:Number},
        bathroom:{type:Number},
        kitchen:{type:String },
        parking:{type:String },
        pool:{ type:String },
        type:{type:String},
    },

    featured:{type:String },

    description:{type:String},

    cost : Number,

    gallery:[{type:String}],

    image : { type:String },

})


const location = mongoose.model('location', locationSchema)
module.exports = location;