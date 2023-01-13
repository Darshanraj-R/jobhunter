import React from 'react';
import Header from './componets/Header';
import Leftbar from './componets/Leftbar';
import "./index.css"
import Feed from './componets/Feed';
import Loginpage from './componets/Loginpage';
import { useSelector } from 'react-redux';
import {selectUser} from './features/userSlice'
import {Routes,Route} from 'react-router-dom'
import Jobs from './componets/Jobs';


function MiniApp() {

  const user = useSelector(selectUser);
  
  return (
    <>
    {
      !user ? (<Loginpage/>) : (  
   <div className='app_wrapper'>
    <Header/>
      <div className='app_body'>
          <Leftbar/>
          <Feed/>
      </div>
   </div>
   )} 
</>

  );
}

export default MiniApp;
