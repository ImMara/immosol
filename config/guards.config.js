// GUARDS-#001
// USER CONNECTED

exports.ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {

        next()

    } else {

        res.render('403', {currentUser: req.user});

    }
}