exports.getLocations = async (req,res,next) =>{
    try{
        res.render('locations/index')
    }catch (e) {
        next(e)
    }
}