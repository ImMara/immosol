const {updateLocation} = require("../database/queries/locations.queries");
const {deleteLocation} = require("../database/queries/locations.queries");
const {findLocation} = require("../database/queries/locations.queries");
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
            details: {
                surface:body.surface,
                bedroom:body.bedroom,
                bathroom:body.bathroom,
                parking:body.parking? body.parking :null,
                kitchen:body.kitchen? body.kitchen :null,
                pool:body.pool? body.pool :null,
                type:body.type
            },
            featured:body.featured? body.featured :null,
            description:body.description,
            cost:body.cost
        }
        await createLocation(loca);
        const locations = await findAllLocations();

        res.render('locations/index',{
            currentUser: req.user,
            locations
        })
    }catch (e) {
        next(e)
    }
}

exports.getLocation = async (req,res,next) => {
    try{
        const id = req.params.id
        const location = await findLocation(id)
        res.render('locations/create',{currentUser:req.user ,location})
    }catch (e) {
        next(e)
    }
}

exports.updateLocation = async(req,res,next) => {
    try{
        const body = req.body;
        const id = req.params.id

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
            details: {
                surface:body.surface,
                bedroom:body.bedroom,
                bathroom:body.bathroom,
                kitchen:body.kitchen,
                parking:body.parking,
                pool:body.pool,
                type:body.type
            },
            featured:body.featured,
            description:body.description,
            cost:body.cost
        }

        await updateLocation(id,loca)

        const locations = await findAllLocations();
        res.render('locations/index',{ locations , currentUser:req.user})

    }catch (e) {
        next(e)
    }
}

exports.deleteLocation = async(req,res,next) => {
    try{
        const id = req.params.id
        await deleteLocation(id)

        const locations = await findAllLocations();
        res.render('locations/index',{ locations , currentUser:req.user})

    }catch (e) {
        next(e)
    }
}