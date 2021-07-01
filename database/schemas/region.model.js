const mongoose = require('mongoose');
const schema = mongoose.Schema;

const regionSchema = schema({
    title:{
        type: String,
        required: [true, 'Votre annnonce doit avoir un titre'],
        unique: true,
        minLength: [3, 'Le titre est trop court'],
        maxLength: [300, 'Le titre est trop long'],
    },
    description:{
        type:String ,
        required: [true, 'Veuillez écrire une description'],
        minLength: [3, 'La description est trop courte'],
    },
    gallery:[{type:String}],
})

const region = mongoose.model('region',regionSchema)
module.exports = region;
