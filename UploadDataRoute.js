const express = require('express');
const Router = express.Router();

const UploadDataController = require('../controllers/UploadDataController');

Router.post('/api/UploadData', UploadDataController.StudentsUpload);

module.exports = Router;