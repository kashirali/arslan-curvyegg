import React,{useState,useEffect} from 'react'
import '../../assets/fonts/font.css'

import link from '../../assets/link.png'
import link1 from '../../assets/link1.png'
import link2 from '../../assets/link2.png'
import link3 from '../../assets/link3.png'
import Aos from 'aos'
import {motion} from 'framer-motion'
import './sellsol.css'
function SellSol() {
        useEffect(
                ()=>(
                        Aos.init({
                                duration:2000,
                                once:true
                        })
                )
        )
        const [sellText,setSellText] = useState({
                id:'live',
                text:'Businesses offering live chat support to their customers are likely to have higher sales and that is factually proven. YES, every conversation counts so make money, while you are asleep. Let us provide you the enormous volume of conversions, you had been waiting for. Learn about your customers expectations from you and your product, when we try to explore your customers and engage them on your website.'
        })
        
        const sellingText = (ids)=>{
                if(ids==='live'){
                        setSellText({id:'live',text:'Businesses offering live chat support to their customers are likely to have higher sales and that is factually proven. YES, every conversation counts so make money, while you are asleep. Let us provide you the enormous volume of conversions, you had been waiting for. Learn about your customers’ expectations from you and your product, when we try to explore your customers and engage them on your website.'})
                }
                else if(ids === 'technical'){
                        setSellText({id:'technical',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id '})
                }
                else setSellText({id:'ecommerce',text:'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci'})
        }
    return (
        <div id="solution" data-aos="fade-up" className="sellsol_top">
                <h3  className="sellsol_main_head center ">Selling Solutions, Not Promises</h3>
                < p className="sellsol_main_para center ">We <span>understand</span> your needs and here you get the best solutions,<span> all in one place.</span></p>
                <div className="container">
                        <div className="hideMobile">
                        <div className="row" style={{marginTop:'50px'}}>
                            <div data-aos="fade-right" className="col-md-5 col-sm-12">
                                    {sellText.id === 'live'? <motion.p className="sellsol_main_des"
                                     animate={{
                                        opacity:1,
                                        x:0
                                    }}
                                    initial={{opacity:0,
                                          
                                        }}
                                    >{sellText.text} </motion.p>:null}
                                    {sellText.id === 'technical'? <motion.p className="sellsol_main_des"
                                     animate={{
                                        opacity:1,
                                   
                                    }}
                                    initial={{opacity:0,
                                           
                                        }}
                                    >{sellText.text} </motion.p>:null}
                                    {sellText.id === 'ecommerce'? <motion.p className="sellsol_main_des"
                                     animate={{
                                        opacity:1,
                                  
                                    }}
                                    initial={{opacity:0,
                                            
                                        }}
                                    >{sellText.text} </motion.p>:null}

                                   
                            </div>
                            <div data-aos="fade-left" className="col-md-7 col-sm-12 gridd" style={{marginTop:'20px'}}>
                                    {/* <img src={round} width="90%" style={{marginLeft:'20px'}}/> */}
                                    <div className="" style={{marginLeft:'30px'}}>
                                            <img src={link} width= '232px'height = '278px'/>
                                    </div>
                                    <div className="iconBtn">
                                            <div className="first">
                                            <img src={link1} width= '96px'height = '96px'/>
                                            <button className={sellText.id === 'live'?'btnactive':null} style={{border:'none'}} onClick={()=>sellingText('live')}>Live Chat Support</button>
                                            </div>
                                            <div  className="sec">
                                            <img src={link2} width= '96px'height = '96px'/>
                                            <button className={sellText.id === 'technical'?'btnactive':null} style={{background:'#483a9c',color:'white',border:'none'}} onClick={()=>sellingText('technical')}>Technical Support</button>
                                            </div>
                                            <div  className="three">
                                            <img src={link3} width= '96px'height = '96px'/>
                                            <button className={sellText.id === 'ecommerce'?'btnactive':null} style={{background:'#446beb',border:'none'}} onClick={()=>sellingText('ecommerce')}>E-Commerce Support</button>
                                            </div>

                                    </div>
                            </div>
                        </div>
                        </div>
                        <div className="hideDesktop selsol_mob_main">
                                <div data-aos="fade-up" className="live_chat_mob">
                                <img src={link1} width= '80px' height="80px"/>
                                <div style={{background:'#0a021d',color:'white'}}>Live Chat</div>
                                <div>
                                      <p>
                                      Businesses offering live chat support to their customers are likely to have higher sales and that is factually proven. YES, every conversation counts so make money, while you are asleep. Let us provide you the enormous volume of conversions, you had been waiting for. Learn about your customers’ expectations from you and your product, when we try to explore your customers and engage them on your website        
                                      </p>  
                                </div>

                                </div>
                                <div data-aos="fade-up" className="tech_sup_mob">
                                <img src={link2} width= '80px'height = '80px'/>
                                <div style={{background:'#483a9c',color:'white'}}>Technical Support</div>
                                <div>
                                      <p>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id  </p>  
                                </div>

                                </div>
                                <div data-aos="fade-up" className="ecomm_mob">
                                <img src={link3} width= '80px'height = '80px'/>
                                <div style={{background:'#446beb',color:'white'}}>E-Commerce Support</div>
                                <div>
                                      <p>
                                      ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci</p>  
                                </div>

                                </div>
                        </div>
                       
                </div>
        </div>
    )
}

export default SellSol
