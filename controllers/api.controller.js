const path = require("path");
const fs = require("fs");
const {findRegionId} = require("../database/queries/region.queries");
const {findRegion} = require("../database/queries/region.queries");
const {updateRegion} = require("../database/queries/region.queries");
const {findVenteAndLocation} = require("../database/queries/vente.queries");
const {findAllVente} = require("../database/queries/vente.queries");
const {findAllLocations} = require("../database/queries/locations.queries");
const {findVente} = require("../database/queries/vente.queries");
const {updateVente} = require("../database/queries/vente.queries");
const {updateLocation} = require("../database/queries/locations.queries");
const {findLocation} = require("../database/queries/locations.queries");

exports.example = async (req,res,next) =>{
    try{
        res.json({
            name:'json example',
            number:24,
        })
    }catch (e) {
        next(e)
    }
}

exports.deleteOne = async (req,res,next) => {
    try{
        const id = req.params.id
        const pos = req.params.pos

        let location = await findLocation(id)
        let tab = location.gallery

        await fs.unlink(path.join(__dirname, `../public/images/locations/gallery/${pos}`), (err => err && console.error(err)))

        let index = tab.findIndex((t) => t === pos )

        await tab.splice(index,1)
        await updateLocation(id,{...location , gallery : tab })
        res.end()

    }catch (e) {
        next(e)
    }
}

exports.deleteOneVente = async (req,res,next)=>{
    try{
        const id = req.params.id
        const pos = req.params.pos

        let vente= await findVente(id)
        let tab = vente.gallery

        await fs.unlink(path.join(__dirname, `../public/images/ventes/gallery/${pos}`), (err => err && console.error(err)))

        let index = tab.findIndex((t) => t === pos )

        await tab.splice(index,1)
        await updateVente(id,{...vente , gallery : tab })
        res.end()

    }catch (e) {
        next(e)
    }
}

exports.deleteOneRegion = async (req,res,next)=>{
    try{
        const id = req.params.id
        const pos = req.params.pos

        let region = await findRegionId(id)
        let tab = region.gallery

        await fs.unlink(path.join(__dirname, `../public/images/region/gallery/${pos}`),(err => err && console.error(err)))

        let index = tab.findIndex((t)=> t === pos)

        await tab.splice(index,1)
        await updateRegion(id,{...region,gallery : tab})
        res.end()

    }catch (e) {
        next(e)
    }
}

exports.getLocations = async (req,res,next) =>{
    try{
        const locations = await findAllLocations();
        res.json({locations})
    }catch (e) {
        next(e)
    }
}
exports.getLocation = async (req,res,next)=>{
    try{
        const id = req.params.id
        const location = await findLocation(id);
        res.json({location})
    }catch (e) {
        next(e)
    }
}

exports.getVentes = async (req,res,next) =>{
    try{
        const ventes = await findAllVente();
        res.json({ventes})
    }catch (e) {
        next(e)
    }
}

exports.getVente = async (req,res,next)=>{
    try{
        const id = req.params.id
        const vente = await findVente(id)
        res.json({vente})
    }catch (e) {
        next(e)
    }
}

exports.getVentesAndLocations = async(req,res,next) =>{
    try{
        const limit = req.params.limit
        const query = await findVenteAndLocation(parseInt(limit))
        res.json({query})
    }catch (e) {
        next(e)
    }
}