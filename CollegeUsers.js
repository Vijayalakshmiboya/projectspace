
const mongoose = require('mongoose');

const schema = mongoose.Schema;
const CollegeUser = new schema({
    roll_number :{
        type: String
    },
    student_name:{
        type : String
    },
    college:{
        type : String
    },
    branch:{
        type : String
    },
    passout_year:{
        type : String
    },
    ssc_percent:{
        type : String
    },
    btech_percent:{
        type : String
    },
    backlogs:{
        type : String
    },
    gender:{
        type : String
    },
    rank:{
        type : String
    },
    seat_type:{
        type : String
    },
    mobile:{
        type : String
    },
    added_by: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 200
    },
    created_date:{
        type:String,
    },
    updated_date:{
        type:String,
    }

});

module.exports = mongoose.model("CollegeUser", CollegeUser);


