import React,{useState,useEffect} from 'react'
import Header from '../../Components/Header/Header'
import FAQ from '../../Components/FAQ/FAQ'
import Subform from '../../Components/Subform/Subform'
import Footer from '../../Components/Footer/Footer'
import CardGlance from '../../UI/CardGlance/CardGlance'
import {useParams} from 'react-router-dom'

import {Container} from 'react-bootstrap'
import downarrow from '../../assets/svg/Cross icon/Arrow upblue.svg'

import livelogo from '../../assets/svg/New_features/LiveChat.svg'
import dashboard from '../../assets/svg/New_features/Dashboard.svg'
import visitors from '../../assets/svg/New_features/VisitorsTeam.svg'
import sprinkles from '../../assets/sprinkles_blue.svg'
import './glance.css'
import Aos from 'aos'
import {motion} from 'framer-motion'
function Glance() {
    useEffect(
        ()=>(Aos.init({
            duration:2000,
            once:true
        }))
    )
    let { id } = useParams();
    const [showcard,setShowcard] = useState('live')
    let color = '';
    if(id === 'live'){
        color = {
            live:true,
            dashboard:false,
            visitors:false
        }
    }
    else if(id === 'dashboard'){
        color = {
            live:false,
            dashboard:true,
            visitors:false
        }
    }
    else if(id === 'visitor'){
        color = {
            live:false,
            dashboard:false,
            visitors:true
        }
    }
    const [customClass,setCustomClass] = useState({
        live:true,
        dashboard:false,
        visitors:false
    });

 
    const selectCard = (ids) =>{
        setShowcard(ids)
        if(ids === 'live'){
            setCustomClass({
                live:true,
                dashboard:false,
                visitors:false
            })
        }
        else if(ids === 'dashboard'){
            setCustomClass({
                live:false,
                dashboard:true,
                visitors:false
            })
        }
        else if(ids === 'visitor'){
            setCustomClass({
                live:false,
                dashboard:false,
                visitors:true
            })
        }
    }
   
    return (
        <div style={{position:'relative',overflow:'hidden'}} className="king">
            <img className='glancesprinkles' src={sprinkles} />
            <img className='glancesprinkles' src={sprinkles} />
            <Header/>
            <Container>
            <section className="flexRow">
                <div className="glance_left">
                    <h3 className="glance_head">All Features at a Glance</h3>
                    <span></span>
                    <p className="glance_subhead">
                        Close more deals efficiently with countless features of<span> CurvyEgg</span> without a <span>price tag</span>
                    </p>
                </div>
                <div className="flexCard">

                <div><div onClick={()=>selectCard('live')}><CardGlance imgsrc={livelogo} text="Live Chat" actClass={customClass.live}/></div>
                    {showcard === 'live'?<img  className='glancearrowicon' src={downarrow} width="20px"/>:null }
                </div>
                <div><div onClick={()=>selectCard('dashboard')}><CardGlance imgsrc={dashboard} text="Dashboard" actClass={customClass.dashboard}/></div>
                {showcard === 'dashboard'?<img className='glancearrowicon' src={downarrow} width="20px"/>:null }
                </div>
                <div><div  onClick={()=>selectCard('visitor')}><CardGlance visible imgsrc={visitors} text="Visitors & Team" actClass={customClass.visitors}/></div>
                {showcard === 'visitor'?<img className='glancearrowicon' src={downarrow} width="20px"/>:null }
                </div>
                </div>

            </section>
            <motion.section className="sec_section"
                animate={{
                    y:0,
                    opacity:1
                }}
                initial={{
                    y:'-10px',
                    opacity:0
                }}
            >
               <div className="list">
                   <ul>
                       <li><span style={{color:'#446beb',marginLeft:'0'}}>24/7</span> live agents</li>
                       <li>Free chat application </li>
                       <li>Media and text file sharing</li>
                       <li> Custom greetings</li>
                       <li> Chat widget customization</li>
                       <li> Chat notifications</li>
                       <li>  CRM integration</li>
                        <li>Expressive emoticons</li>
                        <li>  Complete chat history</li>
                        <li>  Mail able chat transcripts</li>
                        <li>  Customized pre-chat info forms</li>
                        <li>  Customized feedback responses</li>
                        <li>  Offline messaging</li>
                        <li>  Custom branding</li>
                        <li>  Easy setup</li>

                   </ul>
               </div>
               <div className="glance_para">
                   <p>Avail high quality and dedicated services of CurvyEgg chat agents, as early as today. Configure CurvyEgg live chat suite with an ease and turn visitors into buyers of your product, with less hustle. Find visitors’ key insights and let us guide them all along, while monitoring their current activity and viewing previous conversations. Live chat agents share your brochures, media files and documents with your clients, add labels and comments for every customer, update and utilize knowledge base, and much more from within the chat box.

        <br/><br/>
Chat suite is absolutely free and easily integrated on your favorite platforms, where you choose the custom greetings for your chats and customize chat widget theme or even branding, as you like. None of your chats will be missed or put on hold        because chat widget notifies every chat with sound and on screen notification.
<br/><br/>
We remain online all day long, but even if a chat is missed due to any technical issues, your customers can leave offline messages and our agents will contact them as soon as they read their message. Emoticons will let your customers express their feelings and you can get all your customers chat history via emails. In case you need specific information from each of your visitor or customer, you can design your very own pre-chat information forms and feedback responses.

</p>                   
               </div>
            </motion.section>
            </Container>    
            
            <FAQ/>
            <Subform/>
            <Footer/>
        </div>
    )
}

export default Glance
