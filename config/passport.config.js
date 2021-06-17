const {app} = require('../app');
const passport = require('passport');
const User = require("../database/schemas/user.model");
const localStrategy = require('passport-local').Strategy;
const {findUserPerEmail, findUserPerId} = require('../database/queries/user.queries')

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {

    done(null, user._id);

});

passport.deserializeUser(async (id, done) => {
    try {

        const user = await findUserPerId(id)
        done(null, user)

    } catch (e) {

        done(e);

    }
})

passport.use('local', new localStrategy({

    usernameField: 'email'

}, async (email, password, done) => {
    try {

        const user = await findUserPerEmail(email);

        if (user) {

            const match = await user.comparePassword(password);

            if (match) {

                done(null, user)

            } else {

                done(null, false, {message: 'wrong password'})

            }

        } else {

            done(null, false, {message: 'User not found'})

        }
    } catch (e) {

        done(e);

    }
}))

