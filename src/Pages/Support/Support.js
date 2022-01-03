import React,{useState,useEffect} from 'react'

import Header from '../../Components/Header/Header'
import Footer from '../../Components/OnlyFooter/OnlyFooter'

import './support.css'


import {Button,InputGroup,FormControl} from 'react-bootstrap'

import sprinkles from '../../assets/svg/sprinkles.svg'
import leftarrow from '../../assets/svg/Support/CurvyEgg Support Page Icon Set SVG/Support-Arrow.svg'
import supp1 from '../../assets/svg/Support/CurvyEgg Support Page Icon Set SVG/Support-1.svg'
import supp2 from '../../assets/svg/Support/CurvyEgg Support Page Icon Set SVG/Support-2.svg'
import supp3 from '../../assets/svg/Support/CurvyEgg Support Page Icon Set SVG/Support-3.svg'
import supp4 from '../../assets/svg/Support/CurvyEgg Support Page Icon Set SVG/Support-4.svg'
import faqicon from '../../assets/svg/Support/CurvyEgg Support Page Icon Set SVG/Support-FAQ.svg'
import liveicon from '../../assets/svg/Support/CurvyEgg Support Page Icon Set SVG/Support-Live Chat.svg'
import supp5 from '../../assets/svg/Support/CurvyEgg Support Page Icon Set SVG/Support-5.svg'

import FAQ from '../../Components/FAQ/FAQ'
import Subform from '../../Components/Subform/Subform'
import supportsearch from '../../assets/svg/Support/CurvyEgg Support Page Icon Set SVG/SupportSearch.svg'

import {motion} from 'framer-motion'
import Aos from 'aos';
import Subscribeform from '../../Components/subscribeform/Subscribeform'
function Support() {

    useEffect(
        ()=>Aos.init({
            duration:2000,
            once:true
        }),[])

    const [showsubform,setShowsubform] = useState(false);
    const [support_card_data,setSupport_card_data] = useState([
        {
            icon:supp1,
            text:'Lorem Ipsum'
        },
        {
            icon:supp2,
            text:'Lorem Ipsum'
        },
        {
            icon:supp3,
            text:'Lorem Ipsum'
        },
        {
            icon:supp4,
            text:'Ipsum Lorem'
        },
        {
            icon:supp5,
            text:'Lorem Ipsum'
        }
    ])
    const [showFaq,setshowFaq] = useState(false)
    let displayCard = '';

    displayCard = support_card_data.map((curr,index)=>(<div className="suport_card_mob" key={index} style={{width:'200px',height:'200px',background:'white',boxShadow:' 0px 0px 12.2px 1.8px rgba(167, 167, 167, 0.25',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderRadius:'25px'}}>
            <img src={curr.icon} width="100px" height="100px"/>
            <p className="support_card_text">{curr.text}</p>

    </div>))
    return (<>

{showsubform?<motion.div className='subscribeblur'
                       animate={{
                        opacity:1,
                       
                    }}
                    initial = {{
                        opacity:0,
                      
                    }}
                >
                    <div className='subscribeblurinner'>
                            <Subscribeform crossicon subscribe setShowsubform={setShowsubform}/>
                    </div>
                </motion.div>:null}

                {
                    !showsubform && <div style={{overflow:'hidden',}} id="nts_tester">
                    <div className='supportmobheadstyle'>
        
                    <Header color="white"/>
                    </div>
        
                    {/* {showsubform? <motion.div className='subformonmob' style={{position:'absolute',top:'120px',left:0,width:'100%'}}
                          animate={{
                            opacity:1,
                            scale:1
                        }}
                        initial = {{
                            opacity:0,
                            scale:0.5
                        }}
                        >
                            <Subform kiara = {setShowsubform}/>
                        </motion.div>:null} */}
        
                       
                        
                        <div className="support_showcase">
                            <img src={sprinkles} width="195px" className="sprinkleLeft"/>
                            <div className="sprinkleRight"><img src={sprinkles} width="195px"/></div>
                         
                            <div className="support_showcase_text" >
                                <h1>Getting Started </h1>
                                <h1>CurvyEgg Live Chat</h1>
                                <p>Penami ofic is to #Code seven sample text is building solutions. pick some contenttemplates, replace the content text brand voice exactly.Penami ofic is to #Code seven sample text is building solutions. pick some content templates, replace the
        ontent text brand voice exac seven sample text is building solutions. pick some content
        templates, replace the content text brand voice exactly.</p>
                                <div className="follow_div">
                                    <span>Follow</span>
                                    <button onClick={()=>setShowsubform(true)} className="support_showcase_btn">me</button>  
                                    <img src={leftarrow} className="support_showcase_img"/>
                                </div>
                            </div>
                        </div>
                        <div className="support_help">
                            <div className="container">
                                <div  data-aos="fade-up"  className="support_help_top">
                                    <h3 className="support_help_head">Hi! How can we help you?</h3>
                                    <InputGroup className='supportinputstyle' style={{width:'350px',margin:'0 auto',}}>
                                        <FormControl style={{padding:'9px'}}
                                        placeholder="Ask a question..."
                                        aria-label="ask a question"
                                        aria-describedby="basic-addon2"
                                        />
                                        <Button variant="primary" id="button-addon2">
                                        <img src={supportsearch} width="20px"/>
                                        </Button>
                                    </InputGroup>
                                </div>
                                <div  data-aos="fade-up"  className="row">
                                    <div className="support_grid">
                                        {displayCard}
                                    
                                    </div>
                                 
                                </div>
                                <div  data-aos="fade-up"  className="row">
                                    <div className="support_grid_two">
                                            <div style={{cursor:'pointer'}} onClick={()=>setshowFaq(!showFaq)}>
                                                <img src={faqicon} style={{width:'100px',height:'100px',borderRadius:'50%',}}/>
                                                <div>
                                                    <h4>FAQ</h4>
                                                    <p>Maybe we've already answered your question. Here's or FAQs.</p>
                                                </div>
                                    
                                            </div>
                                            <div style={{cursor:'pointer'}}>
                                                <img src={liveicon} style={{width:'100px',height:'100px',borderRadius:'50%',}}/>
                                                <div>
                                                    <h4>Live Chat</h4>
                                                    <p>Get help with our awesome Customer Support team to resolve your queries.</p>
                                                </div>
                                    
                                            </div>
        
                                    </div>
                                 
                                </div>
                            </div>
                        </div>
                        {showFaq? <div className="support_faq_margin_remove_mob" style={{marginTop:'-130px'}}><FAQ/></div>:null}
                    <Footer/>
                </div> 
                }
        
        </>

    )
}

export default Support
