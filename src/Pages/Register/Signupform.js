import React from 'react';
import './Signupform.css';
import { TextField  } from './TextField';
import curvyegg from '../../assets/svg/curvyegg1.svg'


export const Signupform=()=>{
  return (
   
    <div class="c-form"> 
        <div style={{display:'flex',justifyContent:'center',margin:'40px 0 50px 0'}}>
          <img src={curvyegg} width="200px"/>
        </div>
        <div >
        <p className="signup_p_special"><span>join us</span></p>
        </div>
        
       <TextField/>
  
   </div>
)
}

