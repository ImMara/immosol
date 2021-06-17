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