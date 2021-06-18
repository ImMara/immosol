const {deleteType} = require("../database/queries/type.queries");
const {findAllType} = require("../database/queries/type.queries");
const {createType} = require("../database/queries/type.queries");
exports.getType = async (req,res,next) =>{
    try{
        const types = await findAllType();
        res.render('type/index',{currentUser:req.user, types})
    }catch (e) {
        next(e)
    }
 }

 exports.createType = async (req,res,next) => {
    try{
        const body = req.body;
        await createType(body);
        const types = await findAllType()
        res.render('type/index',{currentUser : req.user , types})
    }catch (e) {
     next(e)
    }
 }

 exports.deleteType = async (req,res,next) => {
    try{
        const id = req.params.id
        await deleteType(id)

        const types = await findAllType();
        res.render('type/index',{currentUser : req.user , types})
    }catch (e) {
        next(e)
    }
 }