const example = require('../schemas/example.model')

exports.findAllBlogs = () => {

    return example.find();

};