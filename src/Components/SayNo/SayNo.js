import React,{useState,useEffect} from 'react'

import analytics from '../../assets/analytics1.png'
import research from '../../assets/research.jpg'
import dashboard from '../../assets/dashboard.jpg'
import '../../assets/fonts/font.css'
import round from '../../assets/Round.png'
import Aos from 'aos'
import {motion} from 'framer-motion'
import './sayno.css'
function SayNo() {

    useEffect(
        ()=>(
            Aos.init({
                duration:2000,
                once:true
            })
        )
    )
    const [data,setData] = useState({
        sales : {
            img:analytics,
            text:'Utilize our chat agents! Give them knowledge about your product so they keep giving you the best quality sales’ service 24/7, with their well-cultivated customer handling expertise.'
            ,head:'Say No to More Sales Staff'
        },
        research:{
            img:research,
            text:'t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using '
            ,head:'This is the second heading ENJOY'
        },
        data:{
            img:dashboard,
            text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  standard dummy text ever since the 1500s,'
            ,head:'This is the third heading'
        }
    })

    const [currData,setCurrData] = useState({
        img:analytics,
        text:'Utilize our chat agents! Give them knowledge about your product so they keep giving you the best quality sales’ service 24/7, with their well-cultivated customer handling expertise.'
        ,head:'Say No to More Sales Staff'
    })

    const saleBtnworking = ()=>{
            setCurrData({
                ...data.sales
            })
    }
    const researchBtnworking = ()=>{
        setCurrData({
            ...data.research
        })
    }
    const dataBtnworking = ()=>{
        setCurrData({
            ...data.data
        })
    }
    return (
        <div style={{width:'100%',minheight:'680px',marginTop:'50px',marginBottom:'50px',overflow:'hidden'}}>
                <div className="row" style={{width:'100%',marginTop:'80px'}}>
                    <div className="col-md-7 col-sm-12" >
                        {/* <img src={analytics} style={{width:'95%',maxHeight:'557px'}}  /> */}
                        <div data-aos="fade-right" className="main_left_img" style={{border:'1px solid blue'}}>
                            <div className="main_left_img_inner_1">

                            </div>
                            <div  className="main_left_img_inner_2"
                               
                            >
                                {currData.head === 'Say No to More Sales Staff'? <motion.img className="main_left_img_inner_3" src={analytics}  
                            animate={{
                                    opacity:1,
                                   
                                }}
                                initial={{opacity:0,
                                     
                                    }} />:null}
                                {currData.head === 'This is the second heading ENJOY'? <motion.img className="main_left_img_inner_3" src={research}  
                           animate={{
                            opacity:1,
                           
                        }}
                        initial={{opacity:0,
                               
                            }} />:null}
                                {currData.head === 'This is the third heading'? <motion.img className="main_left_img_inner_3" src={dashboard}  
                           animate={{
                           
                          opacity:1
                        }}
                        initial={{opacity:0,
                               
                            }} />:null}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <div data-aos="fade-left" className="main_say">
                          
                        {currData.head === 'Say No to More Sales Staff'? <motion.div
                             animate={{
                                opacity:1,
                     
                            }}
                            initial={{opacity:0,
                           
                                }}
                        >
                            <h3 className="main_say_head">{currData.head}</h3>
                            <p className="main_say_para">{currData.text}</p>
                            </motion.div> :null}
                            {currData.head === 'This is the second heading ENJOY'? <motion.div
                                 animate={{
                                    opacity:1,
                               
                                }}
                                initial={{opacity:0,
                                       
                                    }}
                            >
                            <h3 className="main_say_head">{currData.head}</h3>
                            <p className="main_say_para">{currData.text}</p>
                            </motion.div> :null}
                            {currData.head === 'This is the third heading'? <motion.div
                             animate={{
                                opacity:1,
                        
                            }}
                            initial={{opacity:0,
                                  
                                }}
                            >
                            <h3 className="main_say_head">{currData.head}</h3>
                            <p className="main_say_para">{currData.text}</p>
                            </motion.div> :null}
                            <div className="main_btn_grp">
                                <button  onClick={()=>saleBtnworking()}>Sales Staff</button>
                                <button onClick={()=>researchBtnworking()}>Research</button>
                                <button onClick={()=>dataBtnworking()}>Data</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SayNo
