const mongoose = require('mongoose');
const schema = mongoose.Schema;

const exampleSchema = schema({

    title: {
        type: String,
        required: true,
        unique: true,
        minLength: [3, 'title is to short'],
        maxLength: [100, 'title is to long'],
    },

    content: {
        type: String,
        minLength: [50, 'your post is to short'],
        required: [true, 'content is required'],
    }
})

const Example = mongoose.model('example', exampleSchema)
module.exports = Example;