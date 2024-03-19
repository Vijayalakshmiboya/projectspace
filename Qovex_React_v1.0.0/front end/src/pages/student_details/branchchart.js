import {
    Card,
    CardBody,
  } from "reactstrap"

import axios from 'axios';
import  { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts"
import React from "react"
const axiosAPI = axios.create();

const BranchChart = () => {
    const [passoutcount,setpassoutcount]=useState([]);
  
    axiosAPI.get("http://localhost:5001/college-branch").then((response)=>{
        setpassoutcount(response.data.users);
        console.log(response.data.users);
      })
   
    const series = [
    {
        name: "count",
        data: passoutcount.map(item => item.count),
        type: 'bar',
    }]

    const options = {
        chart: {
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        colors: ['#45cb85', '#3b5de7'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: '3',
            dashArray: [4, 0],
        },

        markers: {
            size: 3
        },
        xaxis: {
            categories: [ 'CSE', 'ECE', 'IT', 'MECH', 'IOT', 'EEE','AIML'],
            title: {
                text: 'Branch'
            }
        },

        fill: {
            type: 'solid',
            opacity: [1, 0.1],
        },

        legend: {
            position: 'top',
            horizontalAlign: 'right',
        }
    }

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <h4 className="card-title mb-4">branch</h4>

                    <ReactApexChart
                        options={options}
                        series={series}
                        height="260"
                        type="bar"
                        className="apex-charts"
                    />
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default BranchChart