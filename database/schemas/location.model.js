const mongoose = require('mongoose');
const schema = mongoose.Schema;

const locationSchema = schema({

    title: {
        type: String,
        required: [true, 'Votre annnonce doit avoir un titre'],
        unique: true,
        minLength: [3, 'Le titre est trop court'],
        maxLength: [300, 'Le titre est trop long'],
    },

    contact:{
        name:{type:String , required:[true, 'Le contact doit avoir un nom et/ou prénom']},
        email:{type:String , required: [true, 'Le contact doit avoir un email']},
        phone:{type:String},
        facebook:{type:String}
    },

    city:{type:String, required: [true, 'Veuillez entrer le nom de la ville']},

    zip:{type:String, required: [true, 'Veuillez entrer le nom de la région']},

    country: {type:String, required: [true, 'Veuillez entrer le pays']},

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

    description:{
        type:String ,
        required: [true, 'Veuillez écrire une description'],
    },

    cost : {type:Number},

    payement : {type:String , required: [true, 'Veuillez sélectionner une option']},

    gallery:[{type:String}],

    image : { type:String },

})


const location = mongoose.model('location', locationSchema)
module.exports = location;