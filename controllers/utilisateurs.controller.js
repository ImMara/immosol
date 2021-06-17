const {findUser} = require("../database/queries/user.queries");
const {deleteUsers} = require("../database/queries/user.queries");
const {createUser} = require("../database/queries/user.queries");
const {findAllUsers} = require("../database/queries/user.queries");

exports.getUtilisateurs = async (req,res,next) =>{
    try{
        const users = await findAllUsers();
        res.render('utilisateurs/index',{ users ,currentUser: req.user})
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
        const users = await findAllUsers();
        res.render('utilisateurs/index',{ users, success: `successfully added ${body.username}`, currentUser: req.user});
    }catch (e) {
        next(e)
    }
}

exports.deleteUtilisateur = async (req,res,next) =>{
    const userID = req.params.id;
    const user = await findUser(userID);
    try{
        let name = user.username;
        await deleteUsers(userID);
        const users = await findAllUsers();
        res.render('utilisateurs/index',{ users, success: `successfully deleted ${name}`, currentUser: req.user})
    }catch (e) {
        next(e)
    }
}