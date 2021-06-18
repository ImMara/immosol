const {findAllLocations} = require("../database/queries/locations.queries");
const {createLocation} = require("../database/queries/locations.queries");
exports.getLocations = async (req,res,next) =>{
    try{
        const locations = await findAllLocations();
        res.render('locations/index',{currentUser: req.user , locations})
    }catch (e) {
        next(e)
    }
}

exports.formLocations = async (req,res,next) =>{
    try{
        res.render('locations/create',{currentUser: req.user})
    }catch (e){
        next(e)
    }
}

exports.createLocations = async(req,res,next) =>{
    try{
        const body = req.body;
        const loca = {
            title:body.title,
            contact:{
                name:body.name,
                email:body.email,
                phone:body.phone,
                facebook:body.facebook
            },
            city:body.city,
            zip:body.zip,
            country:body.country,
            details:{
                surface:body.surface,
                bedroom:body.bedroom,
                bathroom:body.bathroom,
                kitchen:body.kitchen,
                pool:body.pool,
                type:body.type
            },
            featured:body.featured,
            description:body.description,
            cost:body.cost,
        }
        await createLocation(loca)
        const location = await findAllLocations();

        res.render('locations/index',{
            currentUser: req.user,
            location
        })
    }catch (e) {
        next(e)
    }
}