const example = require('../schemas/user.model')

exports.findAllBlogs = () => {

    return example.find();

};