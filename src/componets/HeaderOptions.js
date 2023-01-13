import React from 'react'
import "../css/Header.css"
import {Avatar} from "@material-ui/core"
export default function HeaderOptions({Icon,title,avatar}) {
  return (
    <div className='header__options'>
        {
            Icon && <Icon></Icon>
        }
        {
            avatar && <Avatar name={avatar}/>
        }
        
         <span>{title}</span>
        </div>
  )
}
