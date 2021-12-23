import React,{useEffect} from 'react'
import {Button} from 'react-bootstrap'

import './subform.css'
import '../../assets/fonts/font.css'
import halfc from '../../assets/half.png'

import Aos from 'aos'

const closingInAction = (here) =>
{
    here(false);
}
function Subform(props) {
    useEffect(()=>(
        Aos.init({
            duration:2000
        })
    ))
    return (
        <div className="kala">
        <div className="subform_top" style={{position:'absolute'}}>
            <div className="div_center">
            {/* <div className='popclosebut'>
        <button className="" onClick={()=>closingInAction(props.kiara)}>X</button>
        </div> */}
                <img data-aos="fade-right" src={halfc} style={{position:'absolute',top:'-5px' ,right:'0px',zIndex:'-1'}} width="377px" height="120px"/>
                <div className="contain">
                    <h3 className="subform_main_head fontsforweb_fontid_9785">Lorem Solioum Design to example one ipsum</h3>
                    <p className="subform__main_para">Penami ofic is to #Code seven sample text is building solutions. pick some contenttemplates, replace the content text brand voice exactly.</p>
                        <div className="form_div">
                            <form style={{display:'flex'}} className = "forms_bottom">
                                <input type="email" placeholder="Your work email" required className="inputbox" />
                                <button className="inputBtn" type="submit"  >Get a quote</button>
                            </form>
                        </div>
                     <p className="need">Need <span>agents</span> now?<span>Launch in 1 week.</span></p>   
                </div>
            </div>
        </div></div>
      
    )
}

export default Subform
