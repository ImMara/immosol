const fs = require("fs");
const sharp = require("sharp");
const path = require("path");
const {createType} = require("../database/queries/type.queries");
const {findAllType} = require("../database/queries/type.queries");
const {updateLocation} = require("../database/queries/locations.queries");
const {deleteLocation} = require("../database/queries/locations.queries");
const {findLocation} = require("../database/queries/locations.queries");
const {findAllLocations} = require("../database/queries/locations.queries");
const {createLocation} = require("../database/queries/locations.queries");

exports.getLocations = async (req,res,next) =>{
    try{
        const message = req.query.success
        const locations = await findAllLocations();
        res.render('locations/index',{currentUser: req.user , locations , message})
    }catch (e) {
        next(e)
    }
}

exports.formLocations = async (req,res,next) =>{
    try{
        const types = await findAllType();
        res.render('locations/create',{currentUser: req.user , types})
    }catch (e){
        next(e)
    }
}

exports.createLocations = async(req,res,next) =>{
    try{
        const body = req.body;

        const galeries = []

        for (const f of req.files) {

            const {filename: gallery} = f

            await sharp(f.path)
                .webp({quality:90})
                .toFile(path.resolve(f.destination,"gallery",gallery))
            fs.unlinkSync(f.path)
        }

        req.files.forEach( f =>{
            galeries.push( f.filename )
        })

        const loca = {
            title:body.loca,
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
                type:body.type,
            },
            gallery: galeries,
            image:body.image,
            featured:body.featured? body.featured :null,
            description:body.description,
            cost:body.cost,
            payement:body.payement
        }
        await createLocation(loca);

        const string = `Cr??ation d'une nouvelle location : ${body.loca}`

        res.redirect('/locations/?success='+string)

    }catch (e) {
        if (req.files) {
            for (const f of req.files){
                const {filename: gallery} = f;
                fs.unlinkSync(path.resolve(f.destination, "gallery", gallery))
            }
        }
        next(e)
    }
}

exports.getLocation = async (req,res,next) => {
    try{
        const id = req.params.id
        const location = await findLocation(id)
        const types = await findAllType();
        res.render('locations/create',{currentUser:req.user ,location ,types})
    }catch (e) {
        next(e)
    }
}

exports.updateLocation = async(req,res,next) => {
    try{
        const body = req.body;
        const id = req.params.id

        let findLoca = await findLocation(id)
        let gal = findLoca.gallery

        for (const f of req.files) {

            const {filename: gallery} = f

            await sharp(f.path)
                .webp({quality:90})
                .toFile(path.resolve(f.destination,"gallery",gallery))
            fs.unlinkSync(f.path)
        }

        for (const f of req.files) {
            await gal.push( f.filename )
        }

        const loca = {
            title:body.loca,
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
            gallery:gal,
            image:body.image,
            description:body.description,
            cost:body.cost,
            payement:body.payement
        }

        await updateLocation(id,loca)

        const string = `mise ?? jour de la location ${findLoca.title}`
        res.redirect('/locations/?success= '+string)

    }catch (e) {
        next(e)
    }
}

exports.deleteLocation = async(req,res,next) => {
    try{
        const id = req.params.id
        const location = await findLocation(id)

        const image = location.gallery

        image.map(i =>{
            fs.unlink(path.join(__dirname, `../public/images/locations/gallery/${i}`), (err => err && console.error(err)))
        })

        await deleteLocation(id)

        const string = `Supression de la location ${location.title}`
        res.redirect('/locations/?success='+string)

    }catch (e) {
        next(e)
    }
}