const {deleteType} = require("../database/queries/type.queries");
const {findAllType} = require("../database/queries/type.queries");
const {createType} = require("../database/queries/type.queries");

exports.getType = async (req,res,next) =>{
    try{
        const types = await findAllType();
        const message = req.query.success
        res.render('type/index',{currentUser:req.user, types , message})
    }catch (e) {
        next(e)
    }
 }

 exports.createType = async (req,res,next) => {
    try{
        const body = req.body;
        await createType(body);

        const string = `creation du type ${body.title}`
        res.redirect('/type/?success='+string)
    }catch (e) {
     next(e)
    }
 }

 exports.deleteType = async (req,res,next) => {
    try{
        const id = req.params.id
        await deleteType(id)
        const string =`suppression du type ${id}`
        res.redirect('/type/?success='+string)
    }catch (e) {
        next(e)
    }
 }