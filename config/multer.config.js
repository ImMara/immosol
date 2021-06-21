const multer = require('multer');
const path = require('path');

exports.uploadLocation = multer({
    storage: multer.diskStorage({

        destination: (req, file, callback) => {
            callback(null, path.join(__dirname, '../public/images/locations/gallery'))
        },

        filename: (req, file, callback) => {
            callback(null, `${Date.now()}-${file.originalname}`)
        }

    })
})

exports.uploadCoverLocation = multer({
    storage: multer.diskStorage({

        destination: (req, file, callback) => {
            callback(null, path.join(__dirname, '../public/images/locations/cover'))
        },

        filename: (req, file, callback) => {
            callback(null, `${Date.now()}-${file.originalname}`)
        }

    })
})