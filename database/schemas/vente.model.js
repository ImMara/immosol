const mongoose = require('mongoose');
const schema = mongoose.Schema;

const venteSchema = schema({

    title: {
        type: String,
        required: true,
        unique: true,
    },

    contact:{
        name:{type:String , required: true},
        email:{type:String , required: true},
        phone:{type:String},
        facebook:{type:String}
    },

    city:{type:String, required: true},

    zip:{type:String, required: true},

    country: {type:String, required: true},

    details:{
        surface:{type:Number},
        bedroom:{type:Number},
        bathroom:{type:Number},
        kitchen:{type:String },
        parking:{type:String },
        pool:{ type:String },
        type:{type:String},
    },

    featured:{type:String},

    description:{type:String , required: true },

    cost : {type:Number},

    gallery:[{type:String}],

    image : { type:String },

    sold: {type:String , required:true},

})


const vente = mongoose.model('vente', venteSchema)
module.exports = vente;