
const mongoose = require('mongoose');

const schema = mongoose.Schema;
const ThubUser = new schema({
    name:{
        type:String
    },
    roll_no:{
        type:String
    },
    mobile:{
        type:String
    },
    branch:{
        type:String
    },
    year:{
        type:String
    },
    college:{
        type:String
    },
    course:{
        type:String
    },
    course_type:{
        type:String
    },
    gender:{
        type:String
    },
    shirt:{
        type:String
    },
    attendence_eligibility:{
        type:String
    },
    
});

module.exports = mongoose.model("ThubUser", ThubUser);


