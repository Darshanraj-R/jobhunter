import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import WorkIcon from '@mui/icons-material/Work';
import {Avatar} from '@material-ui/core'
import '../css/Header.css'
import HeaderOptions from './HeaderOptions';
import {Link} from 'react-router-dom'
import {selectUser} from '../features/userSlice'
import { useSelector } from 'react-redux';

export default function Header() {
  const user = useSelector(selectUser);
  console.log(user)
  return (
    <div className='header'>
           <div className="header__left">
            <div className="header__logo">
           <img src="https://cdn-icons-png.flaticon.com/512/2822/2822361.png" alt="" />
            </div>
       <div className='header__search'>
           <SearchIcon/>
           <input type="text" name="" id=""  placeholder='search'/>
       </div>

           </div>
           <div className="header__right">
           <Link><HeaderOptions  Icon={HomeIcon} title='Home'/></Link>
          <Link to='/notification'><HeaderOptions  Icon={NotificationsIcon} title='Notification'/></Link>
          <Link to='/jobs'><HeaderOptions  Icon={WorkIcon} title='Jobs'/></Link>
          <Link to='/automate'><HeaderOptions  Icon={PrecisionManufacturingIcon} title='Automate'/></Link>

          <HeaderOptions  avatar={Avatar} title={user.displayName}/>
           </div>

    </div>
  )
}
