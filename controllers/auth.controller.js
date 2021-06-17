const passport = require('passport')

// CAUTH-#001

exports.login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {

        if (err) {

            next(err)

        } else if (!user) {

            res.render('index', {errors: [info.message], isAuthenticated: req.isAuthenticated(), currentUser: req.user})

        } else {

            req.login(user, (err) => {
                if (err) {
                    next(err)
                } else {
                    res.redirect('/dashboard')
                }
            })

        }

    })(req, res, next)
}

exports.logout = (req, res, next) => {

    req.logout();
    res.redirect('/');

}