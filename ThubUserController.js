const ThubUser = require('../Models/ThubUsers');
 const addThubUser = async (req, res, next) => {    
    const { name, roll_no,mobile,branch,year,college,course,course_type,gender,shirt,attendance_eligibility,} = req.body;
    let user;
    
        Thub_user = new ThubUser({
            name,
            roll_no,
            mobile,
            branch,
            year,
            college,
            course,
            course_type,
            gender,
            shirt,
            attendance_eligibility,
        });
        // if((extension!='.png' || extension != '.jpg') && size>70000){
        //     return res.status(500).json({message:"file type should be .jpg or .png and file size should not be greater than 70kb"})
        // }else{
            
        // }
        await Thub_user.save().then(
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

 const getThubUsers = async(req,res,next)=>{
    let users;

    try{
        users = await ThubUser.aggregate(
          [
            {
              $group: {
                _id: '$roll_no',
                distinct_user: { $first: '$$ROOT' }
              }
            },
            {
              $limit:100
            }
          ],
          { maxTimeMS: 60000, allowDiskUse: true })
    } catch(err){
        console.log(err)
    }
    if(!users){
        return res.status(500).json({message:"Users not found"})
    }
    return res.status(201).json({users})
}
const getThubGender= async(req,res,next)=>{
  let users;

  try{
      users = await ThubUser.aggregate(
        [
          {
            $group: {
              _id: '$roll_no',
              distince_user: { $first: '$$ROOT' }
            }
          },
          {
            $group: {
              _id: '$distince_user.gender',
              count: { $sum: 1 }
            }
          },
          { $sort: { count: -1 } }
        ],
        { maxTimeMS: 60000, allowDiskUse: true }
      );
      
  } catch(err){
      console.log(err)
  }
  if(!users){
      return res.status(500).json({message:"Users not found"})
  }
  return res.status(201).json({users})
}

const getThubDistinctUsers = async(req,res,next)=>{
  let users;
  try{
    users = await ThubUser.aggregate(
      [
        {
          $group: {
            _id: '$roll_no',
            distince_user: { $first: '$$ROOT' }
          }
        }
      ],
      { maxTimeMS: 60000, allowDiskUse: true }
    );
} catch(err){
    console.log(err)
}
if(!users){
    return res.status(500).json({message:"Users not found"})
}
return res.status(201).json({users})
  
}
const getThubCollege = async(req,res,next)=>{
  let users;
  try{
    users = await User.aggregate(
      [
        {
          $group: {
            _id: '$roll_no',
            distince_user: { $first: '$$ROOT' }
          }
        },
        {
          $group: {
            _id: '$distince_user.college',
            count: { $sum: 1 }
          }
        },
        { $sort: { count: -1 } }
      ],
      { maxTimeMS: 60000, allowDiskUse: true }
    );
    
} catch(err){
    console.log(err)
}
if(!users){
    return res.status(500).json({message:"Users not found"})
}
return res.status(201).json({users})
  
}
const getThubBranch = async(req,res,next)=>{
  let users;
  try{
    users = await User.aggregate(
      [
        {
          $group: {
            _id: '$roll_no',
            distince_user: { $first: '$$ROOT' }
          }
        },
        {
          $group: {
            _id: '$distince_user.branch',
            count: { $sum: 1 }
          }
        },
        { $sort: { count: -1 } }
      ],
      { maxTimeMS: 60000, allowDiskUse: true }
    );
} catch(err){
    console.log(err)
}
if(!users){
    return res.status(500).json({message:"Users not found"})
}
return res.status(201).json({users})
  
}
const getThubYear= async(req,res,next)=>{
  let users;
  try{
    users = await User.aggregate(
      [
        {
          $group: {
            _id: '$roll_no',
            distince_user: { $first: '$$ROOT' }
          }
        },
        {
          $group: {
            _id: '$distince_user.year',
            count: { $sum: 1 }
          }
        },
        { $sort: { count: -1 } }
      ],
      { maxTimeMS: 60000, allowDiskUse: true }
    );
} catch(err){
    console.log(err)
}
if(!users){
    return res.status(500).json({message:"Users not found"})
}
return res.status(201).json({users})
  
}
const getThubAttendence= async(req,res,next)=>{
  let users;
  try{
    users = await User.aggregate(
      [
        {
          $group: {
            _id: '$roll_no',
            distince_user: { $first: '$$ROOT' }
          }
        },
        {
          $group: {
            _id: '$distince_user.year',
            count: { $sum: 1 }
          }
        },
        { $sort: { count: -1 } }
      ],
      { maxTimeMS: 60000, allowDiskUse: true }
    );
} catch(err){
    console.log(err)
}
if(!users){
    return res.status(500).json({message:"Users not found"})
}
return res.status(201).json({users})
}

const getDataByFilter = (req,res) => {
  
}

exports.addThubUser = addThubUser;
exports.getThubUsers = getThubUsers;
exports.getThubGender=getThubGender;
exports.getThubBranch=getThubBranch;
exports.getThubCollege=getThubCollege;
exports.getThubYear=getThubYear;
exports.getThubAttendence=getThubAttendence;