const express = require('express');
const Router = express.Router();
const UserController = require('../controllers/CollegeUserController')
Router.post('/add-college-user', UserController.addCollegeUser);
Router.get('/college-users-list',UserController.getCollegeUsers);
Router.get('/college-gender',UserController.getCollegeGender);
Router.get('/college-branch',UserController.getCollegeBranch);
Router.get('/college-college',UserController.getCollegeCollege);
Router.get('/college-year',UserController.getCollegeYear);
// Router.get('/getdata',UserController.getrequired);
module.exports = Router;