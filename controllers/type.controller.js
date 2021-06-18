 exports.getType = (req,res,next) =>{
    try{
        res.render('type/index',{currentUser:req.user})
    }catch (e) {
        next(e)
    }
 }