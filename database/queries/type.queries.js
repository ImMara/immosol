const Type = require('../schemas/type.model');

exports.findAllType = () =>{
    return Type.find();
}

exports.createType = (type) => {
    const newType = new Type(type);
    return newType.save();
}

exports.deleteType = (id) =>{
    return Type.findByIdAndDelete(id).exec();
}
