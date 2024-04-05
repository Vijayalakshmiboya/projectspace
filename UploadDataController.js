const ThubCollection = require("../Models/ThubUsers");

const StudentsUpload = async (req, res, next) => {
    const excel = req.body.excel;

    let inserted = 0;
    let alreadyexist = 0;
    let failed = 0;

    for (let i = 0; i < excel.length; i++) {
        excelRow = Object.values(excel[i]);
        // roll number from excel
        const roll_no = excelRow['1'];

        try {
            // Check if a record with the given empid exists
            const existingRecord = await ThubCollection.findOne({ roll_no });

            if (existingRecord) {
                alreadyexist++;
            } else {
                // If the record does not exist, create a new record
                const newRecord = new ThubCollection({
                    name : excel['2'],
                    roll_no,
                    mobile : excel['6'],
                    branch : excel['4'],
                    year : excel['5'],
                    college : excel['3'],
                    course : excel['8'],
                    course_type : excel['9'],
                    gender : excel['7'],
                    shirt : excel['10'],
                    attendence_eligibility : excel['11']
                });
                await newRecord.save();
                inserted++;
            }
        } catch (error) {
            failed++;
        }
    }

    return res.status(200).json({inserted : inserted, exist : alreadyexist, failed : failed});
};

exports.StudentsUpload = StudentsUpload;