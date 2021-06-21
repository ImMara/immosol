const multer = require('multer');
const path = require('path');

exports.uploadLocation = multer({
    storage: multer.diskStorage({

        destination: (req, file, callback) => {
            callback(null, path.join(__dirname, '../public/images/locations/'))
        },

        filename: (req, file, callback) => {
            callback(null, `${Date.now()}-${file.originalname}`)
        }

    })
})