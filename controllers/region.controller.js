const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const {findRegionId} = require("../database/queries/region.queries");
const {updateRegion} = require("../database/queries/region.queries");
const {findRegion} = require("../database/queries/region.queries");

exports.getRegion = async (req, res,next) =>{
    try{
        const message = req.query.success;
        const region = await findRegion();
        res.render('region/index',{currentUser: req.user , region, message})
    }catch (e) {
        next(e)
    }
}

exports.updateRegion = async (req, res, next) =>{
    try{
        const body = req.body;
        const id = req.params.id;

        const region = await findRegionId(id);
        let gallery = region.gallery;

        for (const f of req.files){
            const {filename:gallery} = f
            await sharp(f.path)
                .webp({quality:90})
                .toFile(path.resolve(f.destination,"gallery",gallery))
            fs.unlinkSync(f.path)
        }
        for (const f of req.files){
            await gallery.push(f.filename)
        }

        await updateRegion(id,{
            title: body.title,
            description: body.description,
            gallery:gallery,
        })

        const string = `mise a jour de la région`
        res.redirect('/region/?success='+string)

    }catch (e) {
        next(e)
    }
}