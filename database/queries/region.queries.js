const Region = require('../schemas/region.model');

exports.findRegion = () =>{
    return Region.find();
}

exports.updateRegion = (id,region) =>{
    return Region.findByIdAndUpdate(id,{$set:region},{runValidators:true});
}

exports.findRegionId = (id) =>{
    return Region.findById(id)
}