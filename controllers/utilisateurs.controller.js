const {createUser} = require("../database/queries/user.queries");
const {findAllUsers} = require("../database/queries/user.queries");

exports.getUtilisateurs = async (req,res,next) =>{
    try{
        const users = await findAllUsers();
        res.render('utilisateurs/index',{ users })
    }catch (e) {
        next(e)
    }
}

exports.formUtilisateur = async(req,res,next) =>{
    try{
        res.render('utilisateurs/create')
    }catch (e) {
        next(e)
    }
}

exports.createUtilisateur = async (req,res,next) =>{
    try{
        const body = req.body;
        await createUser(body);
        const users = await findAllUsers();
        res.render('utilsateurs/index',{ users, success: `successfully added ${body.username}` });
    }catch (e) {
        next(e)
    }
}