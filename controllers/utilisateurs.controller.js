const {findUser} = require("../database/queries/user.queries");
const {deleteUsers} = require("../database/queries/user.queries");
const {createUser} = require("../database/queries/user.queries");
const {findAllUsers} = require("../database/queries/user.queries");

exports.getUtilisateurs = async (req,res,next) =>{
    try{
        const users = await findAllUsers();
        const message = req.query.success;
        res.render('utilisateurs/index',{ users ,currentUser: req.user , message})
    }catch (e) {
        next(e)
    }
}

exports.formUtilisateur = async(req,res,next) =>{
    try{
        res.render('utilisateurs/create',{currentUser: req.user})
    }catch (e) {
        next(e)
    }
}

exports.createUtilisateur = async (req,res,next) =>{
    try{
        const body = req.body;
        await createUser(body);
        const string = `création du nouvel utilisateur ${body.username}`
        res.redirect('/utilisateurs/?success='+string);
    }catch (e) {
        next(e)
    }
}

exports.deleteUtilisateur = async (req,res,next) =>{
    const userID = req.params.id;
    try{
        await deleteUsers(userID);
        const string = `suppression de l'utilisateur ${userID}`
        res.redirect('/utilisateurs/?success='+string)
    }catch (e) {
        next(e)
    }
}