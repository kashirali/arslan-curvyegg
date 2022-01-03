import React from 'react'

import { Container } from 'react-bootstrap'

import design from '../../assets/Design.png'
import Lady from '../../assets/Lady_Img.png'
import call from '../../assets/Shape2.png'
import egg from '../../assets/EggLogo.png'
import './showcase.css'
import '../../assets/fonts/font.css'
import mobSprinkle from '../../assets/sprinkles_blue.svg'
import mainbar from '../../assets/svg/mainbar.svg'

import {motion} from 'framer-motion';

function Showcase() {
    return (
        <div style={{position:'relative',overflow:'hidden'}}>
             <img className="mob_sprinkle" src={mobSprinkle}/>
             <img className="mob_sprinkle" src={mobSprinkle}/>
            <img className="showcase_bottom" src={design} width= '100%' height= '270px'/>
            <Container>
            <div className="showcase_main">
            <div className="left_section">
                <motion.div style={{ display:'flex',flexDirection:'column',justifyContent:'center',height:'100%'}}
                    animate={{
                        x:0
                    }}
                    initial={{x:'-5em'}}
                    transition={{
                        duration:0.2,
                        type:'tween'
                    }}
                >
                    <div style={{display:'flex',alignItems:'center'}}>
                        <img className="eggLogo" src={egg} />
                        <h2 className=" urvyegg">urvyEgg.</h2>
                    </div>
                    <h3 className="subHeading">Customers Deserve the Best
</h3>
                <p className="paragraph">Reach out to the millions of users worldwide, using CurvyEgg - 24/7 <span style={{color:'#446beb',fontWeight:'700'}}>CHAT SUPPORT</span>. We are passionate to flourish your business, you always fantasized. 
</p>
                </motion.div>
                
            </div>
            <div className="right_section" >
                <div className='triangle'>
                    <img src={mainbar}/>
                </div>
                <motion.img className="lady" src={Lady} width="98%"  
                     animate={{
                        x:0
                    }}
                    initial={{x:70}}
                    transition={{
                        stiffness:100,
                        type:'spring'
                    }}
                />
               

            </div>
            </div>
            </Container>
            
                {/* left section contain text logo */}
         
               

        </div>
    )
}

export default Showcase
