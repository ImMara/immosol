const path = require("path");
const fs = require("fs");
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
        console.log(index)

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
        console.log(index)

        await tab.splice(index,1)
        await updateVente(id,{...vente , gallery : tab })
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
