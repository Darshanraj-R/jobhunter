import React, { useState, useEffect } from 'react';
import './Tabel.css'
import axios from 'axios'
import Header from './Header';
function Acompany() {
  const [data, setData] = useState([]);

//   useEffect(() => {

//     async function fetchData() {
//       const response = await fetch('http://localhost:8000/register');
//       const json = await response.json();
//       setData(json);
//     }
//     fetchData();
//   }, []);const GetEmployeeData = () => {
        //here we will get all employee data
        const GetEmployeeData = () => {
        const url = 'http://localhost:8000/register'
        axios.get(url)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    setData(data)
                    console.log(data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        GetEmployeeData();
    }, [])

  return (
  <>
  <Header/>
    <table>
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Job</th>
          <th>Salary</th>
          <th>Date</th>
          <th>Report</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
            console.log(item),
          <tr key={item}>
            <td>{item.company_name}</td>
            <td>{item.job_title}</td>
            <td>{item.salary}</td>
            <td>{item.date}</td>
            <td>{item.report}</td>
          </tr>
          
        ))}
      </tbody>
    </table>
    </>
  );
}

export default Acompany;
