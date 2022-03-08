const express = require('express');
const imageController = require('../controllers/image.controlller');
const imagaUploader = require('../helpers/image-uploader');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('/upload',checkAuth.checkAuth,imagaUploader.upload.single('image'),imageController.upload);

module.exports = router;