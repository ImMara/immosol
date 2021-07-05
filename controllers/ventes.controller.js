const fs = require("fs");
const sharp = require("sharp");
const path = require("path");
const {deleteVente} = require("../database/queries/vente.queries");
const {updateVente} = require("../database/queries/vente.queries");
const {findVente} = require("../database/queries/vente.queries");
const {createVente} = require("../database/queries/vente.queries");
const {findAllType} = require("../database/queries/type.queries");
const {findAllVente} = require("../database/queries/vente.queries");

exports.getVentes = async( req,res,next)=> {
    try {
        const ventes = await findAllVente();
        const message = req.query.success;
        res.render('ventes/index', { currentUser: req.user, ventes , message })
    } catch (e) {
        next(e)
    }
}

exports.formVentes = async (req,res,next) =>{
    try{
        const types = await findAllType()
        res.render('ventes/create',{currentUser:req.user,types})
    }catch (e) {
        next(e)
    }
}

exports.createVentes = async(req,res,next) =>{
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

        const v = {
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
                type:body.type,
            },
            gallery: galeries,
            image:body.image,
            featured:body.featured? body.featured :null,
            description:body.description,
            cost:body.cost,
            sold:body.sold
        }
        await createVente(v);

        const string = `Création d'une nouvelle vente : ${body.title}`

        res.redirect('/ventes/?success='+string)
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

exports.getVente = async(req,res,next) =>{
    try{
        const id = req.params.id
        const vente = await findVente(id)
        const types = await findAllType()
        res.render('ventes/create',{currentUser:req.user , vente , types})
    }catch (e){
        next(e)
    }
}

exports.updateVente = async(req,res,next) => {
    try{
        const body = req.body;
        const id = req.params.id

        let arrVente = await findVente(id)
        let gal = arrVente.gallery

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

        const v = {
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
            gallery:gal,
            image:body.image,
            description:body.description,
            cost:body.cost,
            sold:body.sold
        }

        await updateVente(id,v)

        const string = `Mise à jour de la vente ${id} réussie`
        res.redirect('/ventes/?success='+string)

    }catch (e) {
        next(e)
    }
}

exports.deleteVente = async(req,res,next) => {
    try{
        const id = req.params.id
        const vente = await findVente(id)

        if(vente.gallery){
            const image = vente.gallery
            image.map(i =>{
            fs.unlink(path.join(__dirname, `../public/images/ventes/gallery/${i}`), (err => err && console.error(err)           ))})
        }

        await deleteVente(id)

        const string = `Suppression de la vente ${id} réussie`

        res.redirect('/ventes/?success='+string)

    }catch (e) {
        next(e)
    }
}