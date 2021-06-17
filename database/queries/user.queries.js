const User = require('../schemas/user.model')

// CREATE USER

exports.createUser = async (user) => {
    try {

        const hashedPassword = await User.hashPassword(user.password);

        const newUser = new User({
            username: user.username,
            local: {
                email: user.email,
                password: hashedPassword
            }
        })

        return newUser.save();

    } catch (e) {

        throw e;

    }
}

// FIND USER

exports.findUser = (id) => {
    return User.findById(id)
}

// FIND USER BY EMAIL

exports.findUserPerEmail = (email) => {

    return User.findOne({'local.email': email}).exec();

}

exports.findUserPerId = (id) => {

    return User.findById(id).exec();

}

// UPDATE USER

exports.findUserAndUpdate = (id, user) => {

    return User.findByIdAndUpdate(id, {$set: user}, {runValidators: true});

}

// ALL USER

exports.findAllUsers = () => {

    return User.find({}, '-local.password');

}


// DELETE USER

exports.deleteUsers = (id) => {

    return User.findByIdAndDelete(id).exec();

}