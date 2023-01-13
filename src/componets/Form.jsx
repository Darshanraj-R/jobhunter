import '../css/Form.css'
import React from 'react'
import Header from './Header';

export default function Form() {
    const eventbin = () => {
        var email = document.getElementById('mail').value;
        
        var password = document.getElementById('password').value;
        var job ;
       //var yoe = document.getElementById('').value;
       //var pjob = document.getElementById('job').value;
       var rlink = document.getElementById('rlink').value;
      //  var ele = document.getElementsByTagName('input');
                    
      //             for(let i = 0; i < ele.length; i++) {
                        
      //                 if(ele[i].type="radio") {
                        
      //                     if(ele[i].checked==true){
      //                       job = ele[i].value;
      //                     }
      //                 }
      //               }
      
      
      

                    window.location.replace("http://127.0.0.1:5000/" + email + '/' + password +'/' + rlink) 
      }
  return (
    <>
    <Header/>

    <div className="row_form">
  <div className="col-md-12">
    <div className="form">
      <h1> Sign Up </h1>
      <fieldset>
        <legend>
          <span className="number"> Your Basic Info </span>{" "}
        </legend>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="mail"
          name="user_email"
        
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="user_password"
         
        />
        <label htmlFor="number">YOE:</label>
        <input type="number" id="yoe" name="yoe" defaultValue={0} />
        <label htmlFor="text">Job Role:</label>
        <input type="text" id="rlink" name="link" defaultValue="sfsfds" />
      </fieldset>
      <fieldset>
        {/* <label htmlFor="job">Job Role:</label>
        <select id="job" name="user_job">
          <optgroup label="Web">
            <option value="frontend_developer">Front-End Developer</option>
            <option value="php_developer">PHP Developer</option>
            <option value="python_developer">Python Developer</option>
            <option value="rails_developer">Rails Developer</option>
            <option value="web_designer">Web Designer</option>
            <option value="wordpress_developer">Wordpress Developer</option>
          </optgroup>
          <optgroup label="Mobile">
            <option value="android_developer">Android Developer</option>
            <option value="ios_developer">IOS Developer</option>
            <option value="mobile_designer">Mobile Designer</option>
          </optgroup>
          <optgroup label="Business">
            <option value="business_owner">Business Owner</option>
            <option value="freelancer">Freelancer</option>
          </optgroup>
        </select> */}
        <label>Location</label>
        <input
          type="radio"
          id="development"
          defaultValue="Bangalore"
          name="user_interest"
        />
        <label className="light" htmlFor="development">
          Bangalore
        </label>
        <br />
        <input
          type="radio"
          id="development"
          defaultValue="Mumbai"
          name="user_interest"
        />
        <label className="light" htmlFor="design">
          Mumbai
        </label>
        <br />
        <input
          type="radio"
          id="development"
          defaultValue="Delhi"
          name="user_interest"
        />
        <label className="light" htmlFor="business">
          Delhi
        </label>
        <input
          type="radio"
          id="development"
          defaultValue="Mysore"
          name="user_interest"
        />
        <label className="light" htmlFor="business">
          Mysore
        </label>
      </fieldset>
      <button type="submit" id="submit-button" onClick={eventbin}>
        Confirm
      </button>
    </div>
  </div>
</div>

    </>
  )
}
