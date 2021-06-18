const mongoose = require('mongoose');
const schema = mongoose.Schema;

const venteSchema = schema({

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
        kitchen:{type:Boolean},
        parking:{type:Boolean},
        pool:{type:Boolean},
        type:{type:String},
    },

    featured:{type:Boolean},

    description:{type:String},

    cost : Number,

    gallery:[{type:String}],

    image : { type:String , required:true },

})


const vente = mongoose.model('vente', venteSchema)
module.exports = vente;