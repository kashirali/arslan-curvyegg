import React,{useState,useEffect} from 'react'

import './aboutcurvy.css'
import '../../assets/fonts/font.css'

import {Button,ButtonGroup} from 'react-bootstrap'

import icon1 from '../../assets/svg/Communicate.svg';
import icon3 from '../../assets/svg/Collect.svg';
import icon2 from '../../assets/svg/Contribute.svg';

import comm_mob from '../../assets/Communicate_white.svg'
import coll_mob from '../../assets/Collect_white.svg'
import cont_mob from '../../assets/Contribute_white.svg'

import Card from '../../UI/Card/Card'
import downarrow from '../../assets/svg/downarrow.svg'
import Aos from 'aos'
import { motion } from 'framer-motion'
function AboutCurvy() {
    useEffect(
        ()=>Aos.init({
            duration:2000,
            once:true
        }),[]
    )
    const [cardClass,setcardClass] = useState('default')
    const [cardMobData] = useState({
        one:{
            imgsrc:comm_mob,
            head:'Communicate',
            para:'Effectively & respond to your customers’ queries, by reaching their comfort zone. We will give them personalized customer experience, they will never forget, while choosing anyone over you.'
        },
        two:{
            imgsrc:coll_mob,
            head:'Collect',
            para:'Information by interacting with your customers and engaging them with your product. We will keep all conversations safe and maintain a systematic record of the data gathered.'
        },
        three:{
            imgsrc:cont_mob,
            head:'Contribute',
            para:'Productively towards improvising and improving your product, by making best use of the important feedback we collected for you, also get better insights about your customers, all in one place.'
        }
    })
    const [cardData] = useState({
        one:{
            imgsrc:icon1,
            head:'Communicate',
            para:'Effectively & respond to your customers’ queries, by reaching their comfort zone. We will give them personalized customer experience, they will never forget, while choosing anyone over you.'
        },
        two:{
            imgsrc:icon3,
            head:'Collect',
            para:'Information by interacting with your customers and engaging them with your product. We will keep all conversations safe and maintain a systematic record of the data gathered.'
        },
        three:{
            imgsrc:icon2,
            head:'Contribute',
            para:'Productively towards improvising and improving your product, by making best use of the important feedback we collected for you, also get better insights about your customers, all in one place.'
        }
    });
        const [cardId,setCardId] = useState({
            communicate:false,
            collect:false,
            contribute:false
        })
        const [cardbtnclick,setCardbtnclick] = useState(false)
       const showMoreDetail = (id)=>{
        if(id === 'communicate'){
            setCardId({
                collect:false,
                contribute:false,
                communicate:true
            })
        }    
        else if(id === 'collect'){
            setCardId({
                collect:true,
                contribute:false,
                communicate:false
            })
        } 
        else if(id === 'contribute'){
            setCardId({
                collect:false,
                contribute:true,
                communicate:false
            })
        } 
        setCardbtnclick(!cardbtnclick);
      
        
       }

       let card_content =  '';
       if(cardId.communicate){
           card_content = (
            <div className="active">
            <Card  cardDetail = {cardData.one} cardReadMore={()=>showMoreDetail('communicate')} handleclose={()=>setCardbtnclick(!cardbtnclick)} btnClicked ={cardbtnclick}/>
           </div>
           )
       }
       else if(cardId.collect){
        card_content = (
            <div className="active">
            <Card cardDetail = {cardData.two} cardReadMore={()=>showMoreDetail('collect')} btnClicked ={cardbtnclick} handleclose={()=>setCardbtnclick(!cardbtnclick)}/>
            </div>
        )
    }
    else if(cardId.contribute){
       card_content = (    
        <Card cardDetail = {cardData.three} cardReadMore={()=>showMoreDetail('contribute')} btnClicked ={cardbtnclick} handleclose={()=>setCardbtnclick(!cardbtnclick)}/>
       )
    }
    const [commvariant,setcommvariant] = useState(false)
    const [collvariant,setcollvariant] = useState(true)
    const [contvariant,setcontvariant] = useState(false)
    const movCard = (id)=>{
            if(id === 'comm'){
                setcardClass('comMove')
                setcommvariant(true)
                setcollvariant(false)
                setcontvariant(false)
            }
            else if(id === 'coll'){
                setcardClass('default');
                setcommvariant(false)
                setcollvariant(true)
                setcontvariant(false)
            }
            if(id === 'cont'){
                setcardClass('contMove');
                setcommvariant(false)
                setcollvariant(false)
                setcontvariant(true)
            }
    }
 
    return (
        <div  data-aos="fade-up" style={{width:"100%",minheight:"820px" ,marginBottom:'100px',position:'relative'}}>
           
                        
            <div className="container">
             <div className="row">
                    <div className="col-sm-12">
                        <div className="fstrow">
                            <h3 className="about_firstSec_head hidecurvy_on_web">About Curvy</h3>
                            <h4 className="about_firstSec_para">Intensify your potential with</h4>
                            <img className=" downimg hidecurvy_on_web" src={downarrow} />
                            <h3 className="about_firstSec_head "><span>CurvyEgg</span><span> - </span><span>LIVE CHAT Support</span></h3>
                            <p className="about_firstSec_subhead">CurvyEgg, the ultimate customer support suite, will assist you in knowing your customers better and growing your business, altogether.</p>
                        </div>
                   
                    </div>
             </div>
             <div className="mobilebtn">
             <ButtonGroup className="btn-group" aria-label="Basic example">
                    <Button className="button"  onClick={()=>movCard('comm')} variant={commvariant?'primary':'light'}>Communicate</Button>
                    <Button className="button" onClick={()=>movCard('coll')} variant={collvariant?'primary':'light'}>Collect</Button>
                    <Button className="button" onClick={()=>movCard('cont')} variant={contvariant?'primary':'light'}>Contribute</Button>
                    </ButtonGroup>
             </div>
            
             <div className="card_main" style={{marginTop:'50px'}}>
               
                     {cardbtnclick ?<motion.div style={{width:"100%"}}
                        animate={{
                            opacity:1,
                            y:0
                        }}
                        initial = {{
                            opacity:0,
                            y:'-100px'
                        }}
                     >{card_content}</motion.div>:(
                         null
                     )}
                       {!cardbtnclick?<div  data-aos-duration="1000" className={cardClass}>
                        <Card cardDetail = {cardMobData.one}  cardReadMore={()=>showMoreDetail('communicate')}/>
                       </div>:null}

                       {!cardbtnclick?<div data-aos-duration="1000"  className={cardClass}>
                       <Card cardDetail = {cardMobData.two} cardReadMore={()=>showMoreDetail('collect')}/>
                       </div>:null}

                       {!cardbtnclick? <div data-aos-duration="1000" className={cardClass}>     
                        <Card cardDetail = {cardMobData.three} cardReadMore={()=>showMoreDetail('contribute')}/>
                       </div>:null}
                
                      
                 
                    
                
             </div>
            </div>
            {/* for mobile card will be in carousel + tab-navbar*/}
        </div>
    )
}

export default AboutCurvy
