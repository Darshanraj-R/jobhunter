import React,{ useEffect, useState } from "react"; 
import {Avatar} from "@material-ui/core"
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventIcon from '@mui/icons-material/Event';
import AssignmentIcon from '@mui/icons-material/Assignment';
import "../css/Feed.css"
import Post from './Post';
import {db} from "./Firebasedb";
import firebase from "firebase"



import { color } from '@mui/system';

export default function Feed() {

  const[input,setInput] = useState();
  const[posts,setPost] = useState([]);

const submitPost=(e)=>{
  e.preventDefault();
  db.collection("posts").add({
    name:"{user}",
    description:"post",
    message:input,
    timeStamp:firebase.firestore.FieldValue.serverTimestamp(),
  });
  setInput("")
}

useEffect(() => { 
  db.collection("posts").orderBy('timeStamp','desc').onSnapshot(snapshot=>{
    setPost(snapshot.docs.map(doc=>({
      id:doc.id,
      data:doc.data()
    })))
  })
},[])

console.log(posts)
  return (
    <div className="feed">
      <div className="feedd__input">
        <Avatar/>
        <form action="" onSubmit={submitPost}>
          <input type="text" name="" id="" placeholder='Post the idea' value={input} onChange={e=>setInput(e.target.value)}/>
          <input type="submit" value="Submit" />
        </form>
      </div>

    <div className="feed__options">
      <div className="option">
        <AddAPhotoIcon  style={{color:"#70b5f9"}}/>
        <span>Photo</span>
      </div>
  
      <div className="option">
        <VideocamIcon style={{color:"#7fc15e"}}/>
        <span>Video</span>
      </div>

      <div className="option">
        <EventIcon style={{color:"#e7a33e"}}/>
        <span>Event</span>
      </div>
   
      <div className="option">
        <AssignmentIcon style={{color:"#fc9295"}}/>
        <span>Write Article</span>
      </div>
    </div>



{
   posts.map(({id,data:{name,description,message}})=>{
    return <Post key={id} name= {name} description={description} message={message}/>
   })
}
   
   
  
  
    </div>
  )
}


//npm install --save --legacy-peer-deps @material-ui/core
//npm uninstall @material-ui/core