import React from 'react'
import "../css/Sidebar.css"
import {Avatar} from "@material-ui/core"
import { useSelector } from 'react-redux';
import {selectUser} from '../features/userSlice'







export default function Leftbar() {
    const user = useSelector(selectUser);

  return (
    <div className="sidebar">
        <div className='sidebar__profile'>
        <img src="https://media.istockphoto.com/vectors/bright-vector-rainbow-striped-background-vector-id901666000?k=20&m=901666000&s=612x612&w=0&h=Smbbr6A1sG-XHQTOFbrqfIIpKX2qmT7eEahpkLZpGLU=" alt="" srcset="" />
            <div className="profile__details">
                <Avatar/>
                <h4>{user.displayName}</h4>
                <p>Web Developer</p>
                
            </div>

        <div className='profile_stats'>
            <span className=''>Who Viewed your profile &nbsp; </span>
            <span className='__number'> 23 &nbsp;</span>
        </div>
        <div className='profile_stats'>
            <span className=''>Connections</span>
            <span className='__number'> 140 &nbsp;</span>
        </div>
        </div>
        <div className="sidebar__recent">
            <p>Recent</p>
            <p className='hash'><span>#</span>Mass-hireing</p>
            <p className='hash'><span>#</span>Kamvala</p>
            <p className='hash'><span>#</span>Darshan</p>
            <p className='hash'><span>#</span>React</p>
            <p className='hash'><span>#</span>AI</p>
            <p className='hash'><span>#</span>30%CM</p>
        </div>
    </div>
  )
}
