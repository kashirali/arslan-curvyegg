import React,{useState,useEffect} from 'react'
import './Ataglance.css'
import '../SellSol/sellsol.css'
import '../../assets/fonts/font.css'

import visitor1 from '../../assets/svg/Visitor1.svg'
import visitor2 from '../../assets/svg/Visitor2.svg'

import livechat1 from '../../assets/svg/Livechat1.svg'
import livechat2 from '../../assets/svg/Livechat2.svg'

import dashboard1 from '../../assets/svg/Dashboard1.svg'
import dashboard2 from '../../assets/svg/Dashboard2.svg'

import Aos from 'aos'
import {motion} from 'framer-motion'

import {Link} from 'react-router-dom'

function Ataglance() {
    useEffect(
        ()=>(
            Aos.init({
                duration:2000,
                once:true
            })
        )
    )

    const [showData,setShowData] = useState({
        showlivechat:true,
        showdashboard:false,
        showvisitor:false
    })

    const checkShow = (id)=>{
        if(id === 'dashboard'){
            setShowData({
                showlivechat:false,
        showdashboard:true,
        showvisitor:false
                
            })
        }
        if(id === 'livechat'){
            setShowData({
                showlivechat:true,
        showdashboard:false,
        showvisitor:false
                
            })
        }
        if(id === 'visitor'){
            setShowData({
                showlivechat:false,
        showdashboard:false,
        showvisitor:true
                
            })
        }
    }
    const glanceData = (<div>
    <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>           <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
    </div>)

    let DashboardData = (<div>
    <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">this is change text</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">this is change text</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">this is change text</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>           <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
    </div>)
    let visitorData = (
        <div>
        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">hello change text</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">hello change text</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">hello change text</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">hello change text</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">hello change text</span>           <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
                        <span className="glancetext">24/7 live agents</span>
        </div>
    )
    return (
        <div data-aos = "fade-up" className="glance_top">
            <div className="container">
                <div className="row">
                <h3 className="sellsol_main_head center glancetext">All Features at a Glance</h3>
                < p className="sellsol_main_para center glancetext">Close more deals efficiently with countless features of <span>CurvyEgg</span> without a <span>price tag</span></p>
                </div>
                <div className="flexd" >
                    <div className="svgText_main">
                        <div>
                            {/* svg */}
                            <div>
                            <div onClick={()=>checkShow('livechat')} class="icon-container">
                            <img src={showData.showlivechat?livechat2:livechat1} width="90px"/>
                            </div>
                            {/* text */}
                            <h5 className="glancesubtext">Live Chat</h5>
                            </div>
                            {showData.showlivechat?<i class="fas fa-chevron-down" ></i>:null}
                        </div>
                        <div>
       
                            <div>
                            <div onClick={()=>checkShow('dashboard')} class="icon-container">
                            <img src={showData.showdashboard?dashboard2:dashboard1} width="90px"/>
                            </div>
                            {/* text */}
                            <h5 className="glancesubtext">Dashboard</h5>
                            </div>
                            {showData.showdashboard?<i class="fas fa-chevron-down"></i>:null}
                        </div>
                        <div>
                            {/* svg */}
                            <div>
                            <div onClick={()=>checkShow('visitor')} class="icon-container" style={{cursor:'pointer'}} >
                                <img src={showData.showvisitor?visitor2:visitor1} width="90px"/>
                            </div>
                            {/* text */}
                            <h5 className="glancesubtext">Visitors &#38; Team</h5>
                            </div>
                            {showData.showvisitor?<i class="fas fa-chevron-down"></i>:null}
                        </div>
                        
                    </div>
                    {showData.showlivechat? <motion.div className="info_card" style={{width:'90%'}}
                       animate={{
                        opacity:1,
                        y:0
                    }}
                    initial={{opacity:0,
                            y:'-50px'
                        }}
                    >
                        {glanceData}
                        <Link to="/glance/live" className="glanceinside">Read more</Link>
                    </motion.div>:null}
                    {showData.showdashboard? <motion.div className="info_card" style={{width:'90%'}}
                     animate={{
                        opacity:1,
                        y:0
                    }}
                    initial={{opacity:0,
                            y:'-50px'
                        }}
                    >
                        {DashboardData}
                        <Link to="/glance/dashboard" className="glanceinside">Read more</Link>
                    </motion.div>:null}
                    {showData.showvisitor? <motion.div className="info_card" style={{width:'90%'}}
                     animate={{
                        opacity:1,
                        y:0
                    }}
                    initial={{opacity:0,
                            y:'-50px'
                        }}
                    >
                        {visitorData}
                        <Link to="/glance/visitor" className="glanceinside">Read more</Link>
                    </motion.div>:null}

                   
                </div>
            </div>
        </div>
    )
}

export default Ataglance
