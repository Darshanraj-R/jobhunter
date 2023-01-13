import React from 'react'
import './Tabel.css'
function Tabel({data}) {
 
  return (
    <div>
<div className='app'>

      <table id='jobs_tabel'>
        <tbody>
          <tr>
          <th>Company</th>
          <th>Job Type</th>
        <th>Job Area</th>
        
        <th>Salary</th>
        <th>Apply Here</th>
        {/* <th>Date of post</th>
        <th>Application</th> */}
          </tr>
         
       {data.map((item)=>(
        <tr key={item.id}>
            <td >{item.company_name}</td>
            <td >{item.job_title}</td>
            <td>{item.company_address}</td>
            <td>{item.salary}</td>
            <td><button className='button_apply' onClick={(item)=>{alert("Suceessfully applied to the company")}}> Apply</button></td>
        </tr>
       ))}

        </tbody>
      </table>

   </div>


    </div>
  )
}

export default Tabel