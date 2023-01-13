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
import MiniApp from './MiniApp';
import Acompany from './componets/Acompany';
import Form from './componets/Form';
import PostJobs from './componets/PostJobs'


function App() {

  const user = useSelector(selectUser);
  
  return (
    <>
    <Routes>
    <Route path='/' element={<MiniApp/>}></Route>
    <Route path='/jobs' element={<Jobs/>}></Route>
    <Route path='/notification' element={<Acompany/>}></Route>
    <Route path='/automate' element={<Form/>}></Route>
    <Route path ='/post-jobs' element={<PostJobs/>}></Route>

    </Routes>
</>

  );
}

export default App;
