const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const CollegeUsersRouter = require('../routes/CollegeUserRoute');
const ThubUsersRouter = require('../routes/ThubUserRoute');
const UploadDataRouter = require('../routes/UploadDataRoute');
const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.use(cors())  
app.use('/', CollegeUsersRouter);
app.use('/', ThubUsersRouter);
app.use('/', UploadDataRouter);
// app.use('/users-list',Router);
mongoose.connect("mongodb+srv://clg_thub_analysis:ylmzSRFZJRdq09wS@cluster0.f2240wq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log('connected to database'))

.then(()=>{
    app.listen(5001)
}).catch((err)=>console.log(err))
    