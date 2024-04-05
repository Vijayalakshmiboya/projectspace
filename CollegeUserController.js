const CollegeUser = require('../Models/CollegeUsers');
const addCollegeUser = async (req, res, next) => {
  const { roll_number, student_name, college, branch, passout_year, ssc_percent, btech_percent, backlogs, gender, rank, seat_type, mobile, added_by, created_date, updated_date, } = req.body;
  let user;
  college_user = new CollegeUser({
    roll_number,
    student_name,
    college,
    branch,
    passout_year,
    ssc_percent,
    btech_percent,
    backlogs,
    gender,
    rank,
    seat_type,
    mobile,
    added_by,
    created_date,
    updated_date,
  });
  // if((extension!='.png' || extension != '.jpg') && size>70000){
  //     return res.status(500).json({message:"file type should be .jpg or .png and file size should not be greater than 70kb"})
  // }else{

  // }
  await college_user.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });

    }
  ).catch(
    (error) => {
      console.log(error)
      res.status(400).json({
        message: "adding user failed"
      });
    }
  );
  // if (!user) {
  //     return res.status(500).json({ message: "User details not saved" })
  // }
  // return res.status(201).json({ message:"User Added successfully" })
}

const getCollegeUsers = async (req, res, next) => {
  let users;
  try {
    users = await CollegeUser.find({})

  } catch (err) {
    console.log(err)
  }
  if (!users) {
    return res.status(500).json({ message: "Users not found" })
  }
  return res.status(201).json({ users })
}





const getCollegeGender = async (req, res, next) => {
  let users;

  try {
    users = await CollegeUser.aggregate(
      [

        {
          $group: {
            _id: '$gender',
            count: { $sum: 1 }
          }
        },
        {
          $match: {
            _id: { $in: ['Female', 'Male'] } // Specify the classifications you want to count
          }
        },
        { $sort: { count: -1 } },
      ],
      { maxTimeMS: 60000, allowDiskUse: true }
    );

  } catch (err) {
    console.log(err)
  }
  if (!users) {
    return res.status(500).json({ message: "Users not found" })
  }
  return res.status(201).json({ users })
}
const getCollegeCollege = async (req, res, next) => {
  let users;
  try {
    users = await CollegeUser.aggregate(
      [
        {
          $group: {
            _id: '$college',
            count: { $sum: 1 }
          }
        },
        {
          $match: {
            _id: { $in: ['AEC', 'ACET', 'ACOE'] } // Specify the classifications you want to count
          }
        },
        { $sort: { count: -1 } },

      ],
      { maxTimeMS: 60000, allowDiskUse: true }
    );

  } catch (err) {
    console.log(err)
  }
  if (!users) {
    return res.status(500).json({ message: "Users not found" })
  }
  return res.status(201).json({ users })

}
const getCollegeBranch = async (req, res, next) => {
  let users;
  try {
    users = await CollegeUser.aggregate(
      [
        {
          $group: {
            _id: '$branch',
            count: { $sum: 1 }
          }
        },
        // {
        //   $match: {
        //     _id: { $in: ['CSE', 'ECE', 'EEE', 'IT', 'IOT', 'MECH', 'ALML'] } // Specify the classifications you want to count
        //   }
        // },
        {
          $limit: 100
        }
      ],
      { $sort: { count: -1 } },
      { maxTimeMS: 60000, allowDiskUse: true }
    );
  } catch (err) {
    console.log(err)
  }
  if (!users) {
    return res.status(500).json({ message: "Users not found" })
  }
  return res.status(201).json({ users })

}
const getCollegeYear = async (req, res, next) => {
  let users;
  try {
    users = await CollegeUser.aggregate(
      [
        {
          $group: {
            _id: '$passout_year',
            count: { $sum: 1 }
          }
        },
        {
          $match: {
            _id: {
              $in: ['2020', '2021', '2022', '2023', '2024', '2025']
            } // Specify the classifications you want to count
          }
        },
        { $sort: { count: -1 } },
      ],
      { maxTimeMS: 60000, allowDiskUse: true }
    );
  } catch (err) {
    console.log(err)
  }
  if (!users) {
    return res.status(500).json({ message: "Users not found" })
  }
  return res.status(201).json({ users })

}
// const getrequired=async (req, res) => {
//   try {
//     // Extract query parameters from request
//     const { college, passout, gender, branch } = req.query;

//     // Construct query object based on provided fields
//     const query = {};
//     if (college) query.college = college;
//     if (passout) query.passoutYear = passout;
//     if (gender) query.gender = gender;
//     if (branch) query.branch = branch;

//     // Query the database based on the constructed query object
//     const filteredData = await college_user.find(query);

//     // Return filtered data as JSON response
//     res.json(filteredData);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }



exports.addCollegeUser = addCollegeUser;
exports.getCollegeUsers = getCollegeUsers;
exports.getCollegeGender = getCollegeGender;
exports.getCollegeBranch = getCollegeBranch;
exports.getCollegeCollege = getCollegeCollege;
exports.getCollegeYear = getCollegeYear;
// exports.getrequired=getrequired;