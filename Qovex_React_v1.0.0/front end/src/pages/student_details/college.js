// import React from "react"

// import Breadcrumbs from "../../components/Common/Breadcrumb"
// import { Row, Col, CardBody, Card, Progress } from "reactstrap"
// import { Link } from "react-router-dom"

// //Import Components
// import LineChart from "./line-chart"
// import RevenueChart from "./revenue-chart"
// import SalesAnalytics from "./sales-analytics"
// import ScatterChart from "./scatter-analytics"
// // import LatestTransaction from "./latest-transaction"
// const series = [70]


// const College = () => {
//   return (
//     <React.Fragment>
//             <div className="page-content">
//                 <Breadcrumbs title="Dashboard" breadcrumbItem="Dashboard 2" />

//         <Row>
//           {/* <Col lg={3}>
//              <Card>
//               <CardBody>
//                 <div className="d-flex align-items-start">
//                   <div className="avatar-sm font-size-20 me-3">
//                     <span className="avatar-title bg-soft-primary text-primary rounded">
//                       <i className="mdi mdi-tag-plus-outline"></i>
//                     </span>
//                   </div>
//                   <div className="flex-1">
//                     <div className="font-size-16 mt-2">New Orders</div>
//                   </div>
//                 </div>
//                 <h4 className="mt-4">1,368</h4>
//                 <div className="row">
//                   <div className="col-7">
//                     <p className="mb-0"><span className="text-success me-2"> 0.28% <i
//                       className="mdi mdi-arrow-up"></i> </span></p>
//                   </div>
//                   <div className="col-5 align-self-center">

//                     <Progress
//                       value="62"
//                       color="primary"
//                       className="bg-transparent progress-sm"
//                       size="sm"
//                     />
//                   </div>
//                 </div>
//               </CardBody>
//             </Card>
//             <Card>
//               <CardBody>
//                 <div className="d-flex align-items-start">
//                   <div className="avatar-sm font-size-20 me-3">
//                     <span className="avatar-title bg-soft-primary text-primary rounded">
//                       <i className="mdi mdi-account-multiple-outline"></i>
//                     </span>
//                   </div>
//                   <div className="flex-1">
//                     <div className="font-size-16 mt-2">New Users</div>

//                   </div>
//                 </div> 
//                 <h4 className="mt-4">2,456</h4>
//                 <Row>
//                   <div className="col-7">
//                     <p className="mb-0"><span className="text-success me-2"> 0.16% <i
//                       className="mdi mdi-arrow-up"></i> </span></p>
//                   </div>
//                   <div className="col-5 align-self-center">
//                     <Progress
//                       value="62"
//                       color="success"
//                       className="bg-transparent progress-sm"
//                       size="sm"
//                     />
//                   </div>
//                 </Row>
//               </CardBody>
//             </Card>
//           </Col> */}
//                       <Col lg={12}>
//                         <div className="d-flex justify-content-between mb-3">
//                             <select className="form-select">
//                                 <option>College</option>
//                                 <option>AEC</option>
//                                 <option>ACET</option>
//                                 <option>ACOE</option>
//                                 <option>NONE</option>
//                             </select>
//                             <select className="form-select">
//                                 <option>Branch</option>
//                                 <option>CSE</option>
//                                 <option>ECE</option>
//                                 <option>IT</option>
//                                 <option>EEE</option>
//                                 <option>IOT</option>
//                                 <option>AIML</option>
//                                 <option>MECH</option>
//                                 <option>NONE</option>
//                             </select>
//                             <select className="form-select">
//                                 <option>Passout Year</option>
//                                 <option>2025</option>
//                                 <option>2024</option>
//                                 <option>2023</option>
//                                 <option>2022</option>
//                                 <option>2021</option>
//                                 <option>2020</option>
//                                 <option>NONE</option>
//                             </select>
//                             <select className="form-select">
//                                 <option>Gender</option>
//                                 <option>MALE</option>
//                                 <option>FEMALE</option>
//                                 <option>NONE</option>
//                             </select>
//                         </div>
//                       </Col>
//           <Col lg={6}>
//             <LineChart />

//           </Col>
//           <Col lg={6}>
//             <RevenueChart />
//           </Col>
//         </Row>
//         <Row>
//           <Col lg={6}>
//             <SalesAnalytics />
//           </Col>
//           <Col lg={6}>
//             <ScatterChart />
//           </Col>

//           <Col lg={3}>
//             <Card className="bg-primary">
//               {/* <CardBody>
//                 <div className="text-white">
//                   <h5 className="text-white">2400 + New Users</h5>
//                   <p>At vero eos et accusamus et iusto odio dignissimos ducimus</p>
//                   <div>
//                     <Link to="#" className="btn btn-outline-success btn-sm">View more</Link>
//                   </div>
//                 </div>
//                 <Row className="justify-content-end">
//                   <div className="col-8">
//                     <div className="mt-4">
//                       <img src={widgetImage} alt=""
//                         className="img-fluid mx-auto d-block" />
//                     </div>
//                   </div>
//                 </Row>
//               </CardBody> */}
//             </Card>
//           </Col>
//         </Row>
//         {/* <Row>
//           <Overview />
//           <Reviews /> 
//           <Revenue />
//         </Row> */}

//         <Row>
//           {/* <Inbox /> */}
//           <LatestTransaction />
//         </Row>
//         </div>
//     </React.Fragment>
//   )
// }

// export default College;



import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
// import "./datatables.scss";
import RevenueChart from "./revenue-chart";
import CollegeChart from "./collegechart";
import GenderChart from "./genderchart";
import BranchChart from "./branchchart";
import PassoutChart from "./passoutchart";
import { RotatingLines } from 'react-loader-spinner'
const College = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedPassoutYear, setSelectedPassoutYear] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [loader, Setloader] = useState(false);



  useEffect(() => {
    Setloader(true)

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/college-users-list")
        const jsonData = await response.json();
        setData(jsonData.users);
        setFilteredData(jsonData.users);
        Setloader(false)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  // setFilteredData=setData
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const handleCollegeChange = (event) => {
    setSelectedCollege(event.target.value);
    filterData(selectedBranch, selectedPassoutYear, selectedGender, event.target.value);
  };

  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
    filterData(event.target.value, selectedPassoutYear, selectedGender, selectedCollege);
  };

  const handlePassoutYearChange = (event) => {
    setSelectedPassoutYear(event.target.value);
    filterData(selectedBranch, event.target.value, selectedGender, selectedCollege);
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
    filterData(selectedBranch, selectedPassoutYear, event.target.value, selectedCollege);
  };
  const filterData = (branch, passoutYear, gender, college) => {
    let filtered = data;

    if (branch) {
      filtered = filtered.filter(item => item.branch === branch);
    }

    if (passoutYear) {
      filtered = filtered.filter(item => item.passout_year === passoutYear);
    }

    if (gender) {
      filtered = filtered.filter(item => item.gender == gender);
    }

    if (college) {
      filtered = filtered.filter(item => item.college === college);
    }

    setFilteredData(filtered);
  };
  const dataTable = {
    columns: [
      {
        label: "Roll_no",
        field: "roll_number",
        sort: "asc",
        width: 150,
      },

      {
        label: "Student_name",
        field: "student_name",
        sort: "asc",
        width: 150,
      },
      {
        label: "College",
        field: "college",
        sort: "asc",
        width: 100,
      },
      {
        label: "Branch",
        field: "branch",
        sort: "asc",
        width: 150,
      },
      {
        label: "Passout_year",
        field: "passout_year",
        sort: "asc",
        width: 200,
      },
      {
        label: "SSC%",
        field: "ssc_percent",
        sort: "asc",
        width: 150,
      },

      {
        label: "B.Tech",
        field: "btech_percent",
        sort: "asc",
        width: 150,
      },
      {
        label: "Backlogs%",
        field: "backlogs",
        sort: "asc",
        width: 150,
      },
      {
        label: "Gender",
        field: "gender",
        sort: "asc",
        width: 100,
      },
      {
        label: "Rank",
        field: "rank",
        sort: "asc",
        width: 150,
      },

      {
        label: "Seat_type",
        field: "seat_type",
        sort: "asc",
        width: 150,
      },
      {
        label: "Mobile",
        field: "mobile",
        sort: "asc",
        width: 150,
      },
      {
        label: "Added_By",
        field: "added_by",
        sort: "asc",
        width: 150,
      },
      {
        label: "Created_date",
        field: "created_date",
        sort: "asc",
        width: 150,
      },
      {
        label: "Updated_date",
        field: "updated_date",
        sort: "asc",
        width: 150,
      },


    ],
    rows: filteredData
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Aditya" breadcrumbItem="College Data" />
        <Row>
          <Row>
            <Col lg={3}>
              {/* Add your other components here */}
              {/* <LatestTransaction /> */}
            </Col>
          </Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between mb-3">
                  <select className="form-select" value={selectedCollege} onChange={handleCollegeChange}>
                    <option value="">Select College</option>
                    <option value="AEC">AEC</option>
                    <option value="ACET">ACET</option>
                    <option value="ACOE">ACOE</option>
                  </select>
                  <select className="form-select" value={selectedBranch} onChange={handleBranchChange}>
                    <option value="">Select Branch</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="IT">IT</option>
                    <option value="EEE">EEE</option>
                    <option value="IOT">IOT</option>
                    <option value="AIML">AIML</option>
                    <option value="MECH">MECH</option>
                  </select>
                  <select className="form-select" value={selectedPassoutYear} onChange={handlePassoutYearChange}>
                    <option value="">Select Passout Year</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                  </select>
                  <select className="form-select" value={selectedGender} onChange={handleGenderChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">MALE</option>
                    <option value="Female">FEMALE</option>
                  </select>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Row>
            {/* <Col lg={6}>
            <LineChart />
          </Col> */}
            <Col lg={6}>
             <PassoutChart />
            </Col>
            <Col lg={6}>
              <BranchChart/>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <CollegeChart />
            </Col>
            <Col lg={6}>
              <GenderChart />
            </Col>
           
          </Row>
          <Row>
            <Col lg={3}>
              {/* Add your other components here */}
              {/* <LatestTransaction /> */}
            </Col>
          </Row>
          <Card>
            <CardBody>
              <CardTitle>Student Datatable</CardTitle>
              {loader ?
                <RotatingLines
                  visible={true}
                  height="96"
                  width="96"
                  color="gray"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                /> :
                <MDBDataTable responsive bordered data={dataTable} noBottomColumns />
              }
            </CardBody>
          </Card>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default College;






