const path = require("path");
const fs = require("fs");
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