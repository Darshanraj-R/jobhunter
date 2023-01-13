import React from 'react'
import './viewpage.css'
import axios from 'axios'

import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Viewpage({data}) {

var a;

  const handleSubmit = async(e)=> {
    //console.log(a);
    var company_name=a.company_name;
    var job_title=a.job_title;
    var salary=a.salary;
    var report = "applied";
    const url = 'http://localhost:8000/register'
    const Credentials = { company_name,job_title,salary,report}
    axios.post(url, Credentials)
        .then(response => {
            const result = response.data;
            const { status, message, data } = result;
            if (status !== 'SUCCESS') {
                alert(message, status)
            }
            else {
                alert(message)
               // window.location.reload();
            }
        })
        .catch(err => {
            console.log(err)
        })
}




  const handleSubmite = async(e)=> {
    //console.log(a);
    var company_name=a.company_name;
    var job_title=a.job_title;
    var salary=a.salary;
    var report = "not-applied";
    const url = 'http://localhost:8000/register'
    const Credentials = { company_name,job_title,salary,report}
    axios.post(url, Credentials)
        .then(response => {
            const result = response.data;
            const { status, message, data } = result;
            if (status !== 'SUCCESS') {
                alert(message, status)
            }
            else {
                alert(message)
               // window.location.reload();
            }
        })
        .catch(err => {
            console.log(err)
        })
}

 
  return (
    <>
    
    {data.map((item)=>(
      <div className="block"  key={item.id}>

              <p className='jobrole'>{item.job_title}</p>
              <p className='Cname'>{item.company_name}</p>
             <p className='place'> <span className='img'> <LocationOnIcon /></span>  <span className='place_address'>{item.company_address}</span>  </p> 
             <p className='place-2'> ▶  <span> Start imediately</span>   💵  <span>{item.salary}</span>  </p> 

             <hr />
             <details className='block_details'>
  <summary>Descrption</summary>
  <p className='descrption'>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details>
             <p > <button className='button' onMouseOver={()=>a=item} onClick={handleSubmit}> Apply</button></p>
             <p > <button className='button-2' onMouseOver={()=>a=item} onClick={handleSubmite}> Ignore </button></p>
            
      </div>
    ))}

      </>
  )
}
