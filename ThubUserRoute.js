const express = require('express');
const Router = express.Router();
const UserController = require('../controllers/ThubUserController')
Router.post('/add-thub-user', UserController.addThubUser);
Router.get('/thub-users-list', UserController.getThubUsers);
Router.get('/thub-gender',UserController.getThubGender);
Router.get('/thub-brancch',UserController.getThubBranch);
Router.get('/thub-college',UserController.getThubCollege);
Router.get('/thub-year',UserController.getThubYear);
Router.get('/thub-attendence',UserController.getThubAttendence);
module.exports = Router;
