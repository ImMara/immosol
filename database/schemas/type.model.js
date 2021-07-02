const mongoose = require('mongoose');
const schema = mongoose.Schema;

const typeSchema = schema({

    title: {
        type: String,
        required: [true, 'Nommez le nouveau type de bien'],
        unique: true,
        maxLength: [100, 'Le nom du type est trop long'],
    },

})

const type = mongoose.model('type',typeSchema)
module.exports = type;