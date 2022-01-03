import React,{useState,useEffect} from 'react'
import '../WhyCurvy/whycurvy.css'
import './faq.css'
import '../../assets/fonts/font.css'

import ell1 from '../../assets/faqell1.png'
import ell2 from '../../assets/faqell2.png'
import Aos from 'aos'

function FAQ() {
    const [showone,setshowone] = useState(false)
    const [showtwo,setshowtwo] = useState(false)
    const [showthree,setshowthree] = useState(false)
    const [showfour,setshowfour] = useState(false)
    const [showfive,setshowfive] = useState(false)
    const [showseven,setshowseven] = useState(false)
    const [showsix,setshowsix] = useState(false)
    const [showeight,setshoweight] = useState(false)
    useEffect(
        ()=>Aos.init({
            duration:1000
        })
    )
    
    const showTab = (id)=>{
        if(id === 'one'){
            setshowone(!showone);
            setshowtwo(false);
            setshowthree(false);
            setshowfour(false);
            setshowfive(false);
            setshowseven(false);
            setshowsix(false);
            setshoweight(false)

        }
        else if(id === 'two'){
            setshowone(false);
            setshowtwo(!showtwo);
            setshowthree(false);
            setshowfour(false);
            setshowfive(false);
            setshowseven(false);
            setshowsix(false);
            setshoweight(false)
        }
        else if(id === 'three'){
            setshowthree(!showthree)
            setshowone(false);
            setshowtwo(false);
            setshowfour(false);
            setshowfive(false);
            setshowseven(false);
            setshowsix(false);
            setshoweight(false)
        }
        else if(id === 'four'){
            setshowfour(!showfour);
            setshowone(false);
            setshowtwo(false);
            setshowthree(false);
            setshowfive(false);
            setshowseven(false);
            setshowsix(false);
            setshoweight(false)
        }
        else if(id === 'five'){
            setshowfive(!showfive);
            setshowone(false);
            setshowtwo(false);
            setshowthree(false);
            setshowfour(false);
            
            setshowseven(false);
            setshowsix(false);
            setshoweight(false)
        }
        else if(id === 'seven'){
            setshowseven(!showseven)
            setshowone(false);
            setshowtwo(false);
            setshowthree(false);
            setshowfour(false);
            setshowfive(false);
            setshowsix(false);
            setshoweight(false)
        }
        else if(id === 'six'){
            setshowsix(!showsix);
            setshowone(false);
            setshowtwo(false);
            setshowthree(false);
            setshowfour(false);
            setshowfive(false);
            setshowseven(false);
            setshoweight(false)
            
        }
        else if(id === 'eight'){
            setshowsix(false);
            setshowone(false);
            setshowtwo(false);
            setshowthree(false);
            setshowfour(false);
            setshowfive(false);
            setshowseven(false);
            setshoweight(!showeight)
            
        }
    }
    return (
        <div id="FAQ" data-aos = "fade-up" className="FAQ_top">
          
            <div className="container">
                <h3 className="FAQ_main_head fontsforweb_fontid_9785">Frequently Asked Questions</h3>
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div style={{width:'100%',margin:'0 auto'}}>
                        <div className="nopurpose">
                        <div className="tab_main" style={{overflow:'hidden',border:showeight && 0}}>
                                
                                <p onClick={()=>showTab('eight')}>Donec Congue Felis. </p>
                                <div style={{overflow:'hidden'}} className={showeight? 'showtab':'hidetab'}><p className="main_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices vestibulum tristique. Fusce ac lacus nisi. Sed nisl mi, sollicitudin rhoncus pulvinar a, eleifend eu sapien. Sed maximus gravida sapien id luctus. Suspendisse dignissim nisl id sollicitudin ultricies. Aenean bibendum tellus nisi.</p></div>
                                </div>
                        <div className="tab_main"style={{overflow:'hidden',border:showone && 0}}>
                                
                                <p onClick={()=>showTab('one')}>Connect to Different Platforms </p>
                                <div style={{overflow:'hidden'}} className={showone? 'showtab':'hidetab'}><p className="main_para">you the platform that eliminates the distance between you and your customers, as if you are in front of them to make them feel more valued. 24/7 availability of chat agents will   provide personalized customer service to every individual.</p></div>
                                </div>
                                 <div className="tab_main" style={{overflow:'hidden',border:showtwo && 0}}>
                                 
                                 <p onClick={()=>showTab('two')}>Customer Relationship</p>
                                  <div style={{overflow:'hidden'}} className={showtwo? 'showtab':'hidetab'}><p className="main_para">you the platform that eliminates the distance between you and your customers, as if you are in front of them to make them feel more valued. 24/7 availability of chat agents will   provide personalized customer service to every individual.</p></div>
                                
                                 </div>
                                 <div className="tab_main" style={{overflow:'hidden',border:showthree && 0}}>
                                 <p onClick={()=>showTab('three')}>Re-Marketing</p>
                                  <div style={{overflow:'hidden'}} className={showthree? 'showtab':'hidetab'}><p className="main_para">you the platform that eliminates the distance between you and your customers, as if you are in front of them to make them feel more valued. 24/7 availability of chat agents will   provide personalized customer service to every individual.</p></div>
                                
                                 </div>
                                 <div className="tab_main" style={{overflow:'hidden',border:showfour && 0}}>
                                 <p onClick={()=>showTab('four')}>Shortened Sales Cycle</p>
                                  <div style={{overflow:'hidden'}} className={showfour? 'showtab':'hidetab'}><p className="main_para">you the platform that eliminates the distance between you and your customers, as if you are in front of them to make them feel more valued. 24/7 availability of chat agents will   provide personalized customer service to every individual.</p></div>
                                
                                 </div>
                                 <div className="tab_main" style={{overflow:'hidden',border:showfive && 0}}>
                                 <p onClick={()=>showTab('five')}>Powerful Dashboard </p>
                                  <div style={{overflow:'hidden'}} className={showfive? 'showtab':'hidetab'}><p className="main_para">you the platform that eliminates the distance between you and your customers, as if you are in front of them to make them feel more valued. 24/7 availability of chat agents will   provide personalized customer service to every individual.</p></div>
                                
                                 </div>
                                 <div className="tab_main" style={{overflow:'hidden',border:showsix && 0}}>
                                     
                                 <p onClick={()=>showTab('six')}>Higher Team Efficiency </p>
                                  <div style={{overflow:'hidden'}} className={showsix? 'showtab':'hidetab'}><p className="main_para">you the platform that eliminates the distance between you and your customers, as if you are in front of them to make them feel more valued. 24/7 availability of chat agents will   provide personalized customer service to every individual.</p></div>
                                
                                 </div>
                                 <div className="tab_main" style={{overflow:'hidden',border:showseven && 0}}>
                                 <p onClick={()=>showTab('seven')}>Don’t Lose Customers</p>
                                  <div style={{overflow:'hidden'}} className={showseven? 'showtab':'hidetab'}><p className="main_para">you the platform that eliminates the distance between you and your customers, as if you are in front of them to make them feel more valued. 24/7 availability of chat agents will   provide personalized customer service to every individual.</p></div>
                                
                                 </div>
                        </div>
                        </div>
                      
                    </div>
                </div>
            </div>
            <img className="img1" style={{position:'absolute',top:'20px',zIndex:-2}} src={ell1} width="294px" height="326px" />
            <img className="img2" src={ell2} />
        </div>
    )
}

export default FAQ
