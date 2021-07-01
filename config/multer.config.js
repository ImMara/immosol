const multer = require('multer');
const path = require('path');

exports.uploadLocation = multer({
    storage: multer.diskStorage({

        destination: (req, file, callback) => {
            callback(null, path.join(__dirname, '../public/images/locations/'))
        },

        filename: (req, file, callback) => {
            callback(null, `${Math.random()}-${Date.now()}-${file.originalname}`)
        },

    }),
    fileFilter: function (req, file, callback) {
        let ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
})
exports.uploadVente = multer({
    storage: multer.diskStorage({

        destination: (req, file, callback) => {
            callback(null, path.join(__dirname, '../public/images/ventes/'))
        },

        filename: (req, file, callback) => {
            callback(null, `${Math.random()}-${Date.now()}-${file.originalname}`)
        },

    }),
    fileFilter: function (req, file, callback) {
        let ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
})
exports.uploadRegion = multer({
    storage: multer.diskStorage({

        destination: (req, file, callback) => {
            callback(null, path.join(__dirname, '../public/images/region/'))
        },

        filename: (req, file, callback) => {
            callback(null, `${Math.random()}-${Date.now()}-${file.originalname}`)
        },

    }),
    fileFilter: function (req, file, callback) {
        let ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
})