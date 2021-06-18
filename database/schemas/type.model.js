const mongoose = require('mongoose');
const schema = mongoose.Schema;

const typeSchema = schema({

    title: {
        type: String,
        required: true,
        unique: true,
    },

})

const type = mongoose.model('type',typeSchema)
module.exports = type;