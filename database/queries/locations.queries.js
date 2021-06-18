const Location = require('../schemas/location.model');

exports.findAllLocations = () => {
    return Location.find();
}

exports.createLocation = (location) =>{
    const newLocation = new Location(location);
    return newLocation.save();
}

exports.findLocation = (id) =>{
    return Location.findById(id);
}

exports.deleteLocation = (id) =>{
    return Location.findByIdAndDelete(id).exec();
}

exports.updateLocation = (id,location)=>{
    return Location.findByIdAndUpdate(id,{$set:location},{runValidators:true});
}