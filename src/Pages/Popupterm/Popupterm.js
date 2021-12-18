import React from 'react'
import { CloseButton } from 'react-bootstrap';
import './popupterm.css'
import imager from '../../assets/Terms - Down Arrow.svg'
const CloseButtoner = () => 
{
  document.getElementById('mainer_close').style = "display: none;";
  const lmfa = document.getElementsByTagName('body');
  lmfa[0].style = "overflow:scroll;"

}
function PopupTerms() {


    return (
      <div className="popupterms" id="mainer_close" onClick = {CloseButtoner}>
        <div className='popuptermscenter'>
        <div className='popclosebut'>
        <button className="btn btn-primary" onClick = {CloseButtoner}>X</button>
        </div>
        
    <div className="container">
          <div class="row" id="row-margin">
      <div class="col-sm-12 col-md-6" id="main1">
        <div style={{width:'75%',margin:'0 40px 0 0',paddingLeft:'90px'}}>
        <div class="main1">
        <p id="par-top">A change in Our Terms</p>
    
        </div>
    
    <div class="line-break"></div>
    <div class="par">
    <p>Lorem ipsum dolor sit amet, coted  sed do eiusmod </p>
    <a href="">Lorem ipsum dolor sit amet?</a>
    </div>
  <div class="button-design">
  <button type="button" class="btn btn-primary" id="btn1">Accept new terms</button>
  <button type="button" class="btn btn-light" id="btn2">Continue with old terms</button>
  </div>      
        </div>
    
   
   </div>
  
      <div class="col-sm-12 col-md-6">
     <div class="main2">
         <div>
         <p>Old Terms</p>
       <div class="quote1">
       <blockquote>Lorem ipsum dolor sit amet,  adipiscinii. elit, sed do eiusmod 
         tempor incididunt ut labore ...</blockquote>
          <a href="" class="q_link">See more</a>
       </div>
         </div>
      
  <div>
    <div class="imager">
      <img src={imager} /></div>
       <p id="par2">New Terms</p>
       <div class="quote1">
       <blockquote>Lorem ipsum dolor sit amet,  adipiscing elit,sed do eiusmod 
         tempor incididunt ut labore ...</blockquote>
          <a href="" class="q_link">See more</a>
       </div>
       <div class="button-design-mobile">
  <button type="button" class="btn btn-primary" id="btn1">Accept new terms</button>
  <button type="button" class="btn btn-light" id="btn2">Continue with old terms</button>
  </div>  
  </div>
     </div>
      </div>
    </div>
  
  </div>
        </div>
      </div>
    
     
    );
  }
  
  export default PopupTerms;