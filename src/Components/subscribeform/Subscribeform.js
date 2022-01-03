import React,{useEffect} from 'react'
import {Button} from 'react-bootstrap'
import crossicon from '../../assets/svg/Cross icon/Cross icon.svg'
import '../Subform/subform.css'
import '../../assets/fonts/font.css'
import halfc from '../../assets/half.png'

import curvyegg from '../../assets/svg/curvyegg1.svg'
import curvyeggwhite from '../../assets/svg/Support/CurvyEgg Support Page Icon Set SVG/curvyeggwhite.svg'


import Aos from 'aos'

const closingInAction = (here) =>
{
    here(false);
}
function Subscribeform(props) {
    useEffect(()=>(
        Aos.init({
            duration:2000
        })
    ))
    return (
        <>
       <div id="tryitout" className="kala kalahideonmob">
        <div className="subform_top" style={{position:'absolute'}}>
        {props.crossicon? <img  className='globalcrossicon' onClick={()=>closingInAction(props.setShowsubform)} src={crossicon} width="30px"/>:null} 
            <div className="div_center">
            {/* <div className='popclosebut'>
        <button className="" onClick={()=>closingInAction(props.kiara)}>X</button>
        </div> */}
       
                {/* <img data-aos="fade-right" src={halfc} style={{position:'absolute',top:'-5px' ,right:'0px',zIndex:'-1'}} width="377px" height="120px"/> */}
                <div className="contain">
                    <h3 className="subform_main_head fontsforweb_fontid_9785">Lorem Solioum Design to example one ipsum</h3>
                    <p className="subform__main_para">Penami ofic is to #Code seven sample text is building solutions. pick some contenttemplates, replace the content text brand voice exactly.</p>
                        <div className="form_div">
                            <form style={{display:'flex'}} className = "forms_bottom">
                                <input type="email" placeholder="Your work email" required className="inputbox" />
                                <button className="inputBtn" type="submit"  >{props.subscribe? "Subscribe us":"Get a quote"}</button>
                            </form>
                        </div>
                     <p className="need">Need <span>agents</span> now?<span>Launch in 1 week.</span></p>   
                </div>
                
            </div>
        </div>
    </div>
  <div>
      {<div id="tryitout" className="kala kalahideonweb">
        <div className="subform_top" style={{position:'absolute',height:'100vh',marginTop:'-327px',zIndex:10}}>
       
     
        {/* {props.crossicon? <img  className='globalcrossicon' onClick={()=>closingInAction(props.setShowsubform)} src={crossicon} width="30px"/>:null}  */}
            <div className="div_center">
           <div style={{width:'102%',height:'80px',border:'0px solid red',background:'#446beb',margin:'-3px 0px 0px -3px',zIndex:10}}>
           <img src={curvyeggwhite} width="120px" style={{marginLeft:'20px',marginTop:'20px'}}/> 
            
        {props.crossicon? <img  className='globalcrossicon' onClick={()=>closingInAction(props.setShowsubform)} src={crossicon} style={{marginLeft:'88%',marginTop:'-62px'}} width="30px"/>:null}  
            
            </div>
            {/* <div className='popclosebut'>
        <button className="" onClick={()=>closingInAction(props.kiara)}>X</button>
        </div> */}
       
                {/* <img data-aos="fade-right" src={halfc} style={{position:'absolute',top:'-5px' ,right:'0px',zIndex:'-1'}} width="377px" height="120px"/> */}
                <div className="contain">
                    <h3 className="subform_main_head fontsforweb_fontid_9785">Lorem Solioum Design to example one ipsum</h3>
                    <p className="subform__main_para">Penami ofic is to #Code seven sample text is building solutions. pick some contenttemplates, replace the content text brand voice exactly.</p>
                        <div className="form_div">
                            <form style={{display:'flex'}} className = "forms_bottom">
                                <input type="email" placeholder="Your work email" required className="inputbox" />
                                <button className="inputBtn" type="submit"  >{props.subscribe? "Subscribe us":"Get a quote"}</button>
                            </form>
                        </div>
                     <p className="need">Need <span>agents</span> now?<span>Launch in 1 week.</span></p>   
                </div>
                
            </div>
        </div>
    </div>  
      }
  </div>

   </>
    )
      
    
}

export default Subscribeform
