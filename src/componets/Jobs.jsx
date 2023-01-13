
import { useState } from 'react';
import {Users} from "./Users";
import Header from './Header';
import {Link} from 'react-router-dom'
import PostJobs from './PostJobs'
import Viewpage from './Viewpage';

import '../css/Jobs.css'



export default function Jobs() {
const [query,setQuery] = useState("")
const [category, setCategory] = useState("");


const search = (data)=>{
  return (data.filter(item=>item.job_title.toLowerCase().includes(query)) )
}
  return (
    <>
    <Header/>

   <span className='span-jobs'>
    <div>
   <div className='block-job'>
   <p className='filter'> <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/50-1024.png" alt="" />  Filters</p>

    <label htmlFor="">Category</label>
    <br />
  <input type="text" className='search_job' placeholder='e.g Analytics'  onChange={e=>setQuery(e.target.value)}/>
<br />
<br />
<label htmlFor="">Location
</label>
<br />
  <input type="text" className='search_loc' placeholder='e.g Delhi'  onChange={e=>setCategory(e.target.value)}/>
  

   </div> 
   <Link to='/post-jobs'> <button className='post-jobs'> Post Jobs for Free </button>
            </Link>

   </div>
   <div className='second-div'> <Viewpage data={search(Users)}/>
    </div>
   </span>
   <footer>
        <div style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '20px' }}>
      <p>Copyright 2023</p>
      <a href="/terms">Terms of Use</a> | <a href="/privacy">Privacy Policy</a>
    </div>

        </footer>
   </>
    
  )
}