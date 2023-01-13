import React from 'react'
import {Avatar} from "@material-ui/core"
import MoreVertIcon from '@mui/icons-material/MoreVert';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import { useSelector } from 'react-redux';
import {selectUser} from '../features/userSlice'
import AutorenewIcon from '@mui/icons-material/Autorenew';

import "../css/Post.css"

export default function Post({name,description,message}) {
  const user = useSelector(selectUser);
  return (
    <div className='post'>
       <div className="post__user">
        <div className="user__left">
        <Avatar/>
        <div className="post_profile_details">
        <h4>{user.displayName}</h4>
        <p>{description}</p>
        </div>
       
        </div>

        <MoreVertIcon/>
       </div>

       <div className="post__body">
        <p>{message}</p>
       </div>

       <div className="post__footer">
       
        <div className="post__footer__option">
             <ThumbUpOffAltIcon/>
            <p>Like</p>
        </div>

        <div className="post__footer__option">
            <AutorenewIcon/>
            <p>Repost</p>
        </div>

        <div className="post__footer__option">
             <ShareIcon/>
            <p>Share</p>
        </div>
         
        <div className="post__footer__option">
             <CommentIcon/>
            <p>Comment</p>
        </div>
          

       </div>

    </div>
  )
}
