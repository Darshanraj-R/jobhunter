import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import "../css/Loginpage.css"
import { loginuser } from '../features/userSlice';
import {auth} from './Firebasedb'
export default function Loginpage() {

  const [signup,setSignUp] = useState(false);
  const[name,setName] = useState("")
  const[password,setPassword] = useState("")
  const[cpassword,setCpassword] = useState("")
  const[email,setEmail] = useState("")

  const dispatch = useDispatch(); //to call any action
  
const register = (e)=>{
    e.preventDefault();
    // console.log("sdas")
    if(password !== cpassword){
        setCpassword("")
       return  alert("password did not match")
    }
     
    auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
      console.log("dfsf")
      userAuth.user.updateProfile({
            displayName:name,
    
        }).then(()=>{
              dispatch(loginuser({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:name
              }))
        }).catch(error=>alert(error));
    }).catch(error=>alert(error));


    setName("");
    setPassword("");
    setCpassword("");
    setEmail("");

}


const signIn = (e)=>{
    e.preventDefault();
    

    auth.signInWithEmailAndPassword(email,password).then((user)=>{
        console.log(user)
        dispatch(loginuser({
                email:user.email,
                uid:user.uid,
                displayName:user.displayName
              }))
    }).catch(error=>alert(error))
}


  return (
    <>
    
    <div className='loginScreen'>
<img src="https://cdn-icons-png.flaticon.com/512/2822/2822361.png" alt="" style={{height:"6rem"}} />

{
        signup ===  true?(<form onSubmit={register}>
            <input  type="text" name="name" placeholder="Full Name" value={name} onChange={(e=>setName(e.target.value))} required/>
            <input  type="email" name="email" placeholder="Email"  value={email} onChange ={(e=>setEmail(e.target.value))} required/>
           <input  className="password" type="password" name="password" placeholder="Password"  value={password} onChange={(e=>setPassword(e.target.value))} required/>
           <input  type="password" name="cpassword" placeholder="Confirm Password"  value={cpassword} onChange={(e=>setCpassword(e.target.value))} required/>
           <input type="submit" value="Submit" />
         <h4>Already a User? <span onClick={e=>setSignUp(false)}>Login Here</span></h4>
         </form> ) :(
            <form onSubmit={signIn}>
            <input  type="email" name="email" placeholder="Email" value={email} onChange ={(e=>setEmail(e.target.value))} required/>
           <input  className="password" type="password" name="password" placeholder="Password" value={password} onChange={(e=>setPassword(e.target.value))} required/>
           <input type="submit" value="Submit" />
         <h4>Not a User? <span onClick={e=>setSignUp(true)}>Signup Here</span></h4>
         </form>
         )
    }


       



        </div>

        </>
  )
}
