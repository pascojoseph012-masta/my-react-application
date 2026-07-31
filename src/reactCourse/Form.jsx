import React from 'react'
import { useState } from 'react'
import './Form.css'

const Form = ({button, CloseForm}) => {
 
    
  return (
    <div>
       <div className="container-form">
        <div className="cancle-btn"><button onClick={()=>CloseForm()} type="button">X</button></div>
        <input type="text" name="fname" placeholder="Enter your first name" required/><br /><br />
        
        <input type="text"name="laame" placeholder="Enter your last name" required/><br /><br />
        
        <input type="email" name="email" placeholder="Enter your email" required/><br /><br />
        
        <input type="password" name="password" placeholder="Enter your password" required/><br /><br />
        <button onClick={()=>CloseForm()}>{button}</button>
         <div onClick={()=>CloseForm()} className="form-backdrop"></div>
        
      </div>
    </div>
  )
}

export default Form
