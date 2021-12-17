import React,{useState,useEffect} from 'react'

import './whycurvy.css'
import ellipse_1 from '../../assets/Ellipse_1.png'
import ellipse from '../../assets/Ellipse.png'
import charts from '../../assets/Scripts_for_carts.png'
import '../../assets/fonts/font.css'
import curverec from '../../assets/curverec.png'
import Aos from 'aos'

function WhyCurvy() {
    const [showone,setshowone] = useState(false)
    const [showtwo,setshowtwo] = useState(false)
    const [showthree,setshowthree] = useState(false)
    const [showfour,setshowfour] = useState(false)
    const [showfive,setshowfive] = useState(false)
    const [showseven,setshowseven] = useState(false)
    const [showsix,setshowsix] = useState(false)
    
    const showTab = (id)=>{
        if(id === 'one'){
            setshowone(!showone);
            setshowtwo(false);
            setshowthree(false);
            setshowfour(false);
            setshowfive(false);
            setshowseven(false);
            setshowsix(false);

        }
        if(id === 'two'){
            setshowone(false);
            setshowtwo(!showtwo);
            setshowthree(false);
            setshowfour(false);
            setshowfive(false);
            setshowseven(false);
            setshowsix(false);
        }
        if(id === 'three'){
            setshowthree(!showthree)
            setshowone(false);
            setshowtwo(false);
            setshowfour(false);
            setshowfive(false);
            setshowseven(false);
            setshowsix(false);
        }
        if(id === 'four'){
            setshowfour(!showfour);
            setshowone(false);
            setshowtwo(false);
            setshowthree(false);
            setshowfive(false);
            setshowseven(false);
            setshowsix(false);
        }
        if(id === 'five'){
            setshowfive(!showfive);
            setshowone(false);
            setshowtwo(false);
            setshowthree(false);
            setshowfour(false);
            
            setshowseven(false);
            setshowsix(false);
        }
        if(id === 'seven'){
            setshowseven(!showseven)
            setshowone(false);
            setshowtwo(false);
            setshowthree(false);
            setshowfour(false);
            setshowfive(false);
            setshowsix(false);
        }
        if(id === 'six'){
            setshowsix(!showsix);
            setshowone(false);
            setshowtwo(false);
            setshowthree(false);
            setshowfour(false);
            setshowfive(false);
            setshowseven(false);
            
        }
    }
    return (
        <div className="whycurvy_top" style={{position:'relative'}} >
             <img style={{position:'absolute',zIndex:-1,top:'50px'}} src={ellipse_1} width="346px" height="346px"/>
             <img style={{position:'absolute' ,right:'0',top:'350px',opacity:'1',zIndex:-1}} src={ellipse} width="346px" height="346px"/> 
             <div><img src={curverec} className="lady_back"/></div>
            <div className="container">
                  <h3 data-aos="fade-down" className="whycurvy_main_head fontsforweb_fontid_9785">Why <span style={{color:'black'}}>CurvyEgg<span style={{fontFamily:'sans-serif'}}>&#x3F;</span></span></h3>
                  <div className="row">
                      <div data-aos="fade-down-right" className="col-md-5 col-sm-12" style={{marginTop:'20px'}}> 
                        <h4 className="main_subhead">Eliminates Distance</h4>
                        <p className="main_para">We will provide you the platform that eliminates the distance between you and your customers, as if you are in front of them to make them feel more valued. 24/7 availability of chat agents will   provide personalized customer service to every individual customer.</p>
                            <div className="nopurpose">
                                <div className="tab_main" style={{overflow:'hidden'}}>
                                
                                <p onClick={()=>showTab('one')}>Connect to Different Platforms </p>
                                <div style={{overflow:'hidden'}} className={showone? 'showtab':'hidetab'}><p className="main_para">you the platform that eliminates the distance between you and your customers, as if you are in front of them to make them feel more valued. 24/7 availability of chat agents will   provide personalized customer service to every individual.</p></div>
                                </div>
                                 <div className="tab_main">
                                 
                                 <p onClick={()=>showTab('two')}>Customer Relationship</p>
                                  <div style={{overflow:'hidden'}} className={showtwo? 'showtab':'hidetab'}><p className="main_para">you the platform that eliminates the distance between you and your customers, as if you are in front of them to make them feel more valued. 24/7 availability of chat agents will   provide personalized customer service to every individual.</p></div>
                                
                                 </div>
                                 <div className="tab_main">
                                 <p onClick={()=>showTab('three')}>Re-Marketing</p>
                                  <div style={{overflow:'hidden'}} className={showthree? 'showtab':'hidetab'}><p className="main_para">you the platform that eliminates the distance between you and your customers, as if you are in front of them to make them feel more valued. 24/7 availability of chat agents will   provide personalized customer service to every individual.</p></div>
                                
                                 </div>
                                 <div className="tab_main">
                                 <p onClick={()=>showTab('four')}>Shortened Sales Cycle</p>
                                  <div style={{overflow:'hidden'}} className={showfour? 'showtab':'hidetab'}><p className="main_para">you the platform that eliminates the distance between you and your customers, as if you are in front of them to make them feel more valued. 24/7 availability of chat agents will   provide personalized customer service to every individual.</p></div>
                                
                                 </div>
                                 <div className="tab_main">
                                 <p onClick={()=>showTab('five')}>Powerful Dashboard </p>
                                  <div style={{overflow:'hidden'}} className={showfive? 'showtab':'hidetab'}><p className="main_para">you the platform that eliminates the distance between you and your customers, as if you are in front of them to make them feel more valued. 24/7 availability of chat agents will   provide personalized customer service to every individual.</p></div>
                                
                                 </div>
                                 <div className="tab_main">
                                     
                                 <p onClick={()=>showTab('six')}>Higher Team Efficiency </p>
                                  <div style={{overflow:'hidden'}} className={showsix? 'showtab':'hidetab'}><p className="main_para">you the platform that eliminates the distance between you and your customers, as if you are in front of them to make them feel more valued. 24/7 availability of chat agents will   provide personalized customer service to every individual.</p></div>
                                
                                 </div>
                                 <div className="tab_main">
                                 <p onClick={()=>showTab('seven')}>Don’t Lose Customers</p>
                                  <div style={{overflow:'hidden'}} className={showseven? 'showtab':'hidetab'}><p className="main_para">you the platform that eliminates the distance between you and your customers, as if you are in front of them to make them feel more valued. 24/7 availability of chat agents will   provide personalized customer service to every individual.</p></div>
                                
                                 </div>
                              
                            </div>
                      </div>
                      <div className="col-md-6 col-sm-12 dflex">
                            
                            <img data-aos="fade-up-left" className="top_clear" src={charts} width="88%" />  
                         </div>
                  </div>
            </div>
            

        </div>
    )
}

export default WhyCurvy
