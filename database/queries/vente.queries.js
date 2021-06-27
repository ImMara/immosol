const Vente = require('../schemas/vente.model');

exports.findAllVente = () =>{
    return Vente.find();
}

exports.createVente = (body) => {
    const newVente = new Vente(body);
    return newVente.save();
}

exports.findVente = (id) =>{
    return Vente.findById(id);
}

exports.deleteVente = (id) =>{
    return Vente.findByIdAndDelete(id).exec()
}

exports.updateVente = (id,body) =>{
    return Vente.findByIdAndUpdate(id,{$set:body},{runValidators:true});
}

exports.findFeatured = () =>{
    return Vente.find({featured:'on'});
}

exports.findLastVente = (limit) =>{
    return Vente.find().sort({field:'asc',_id:-1}).limit(limit)
}