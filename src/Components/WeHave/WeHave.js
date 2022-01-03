import React,{useEffect} from 'react'
import chat from '../../assets/Chat.png'
import support from '../../assets/svg/support.svg'
import sales from '../../assets/svg/sales.svg'
import './wehave.css'
import '../../assets/fonts/font.css'
import AnimateChat from '../AnimateChat/AnimateChat'

import Aos from 'aos'

function WeHave() {
    useEffect(
        ()=>(
            Aos.init({
                duration:2000,
                once:true
            })
        )
    )
    return (
        <div id="wehave" data-aos="fade-up" className="container we_main" style={{minheight:'768px',overflow:'hidden',paddingRight:'0' }}>
            <div className="left_first">
                <h3 className="left_first_head fontsforweb_fontid_9785">We Have Only One Boss, Your Customer!</h3>
                <p className="left_first_para">Get involved in more conversations, for more conversions! Listen to your customers and help them choose the best product they are looking for. Let them share images or attachments, directly from the chat box, while we do the same to facilitate them and your business. We provide all information they need and collect all that you need.</p>

            </div>
            <div className="right" >
                    {/* <img src={chat} width="434px" height="690px"/> */}
               
              <AnimateChat/>
            </div>
            <div className="left_sec" style={{position:'relative'}}>
                <a className="left_link" href="#"><img src={support} width="55px" style={{marginRight:'15px'}}/>Live Chat</a>
               <div style={{position:'absolute',bottom:'100px',right:20}}> 
               <a className="left_link" href="#" ><img src={sales} width="55px"style={{marginRight:'15px'}}/>Any Help?</a></div>
                <p className="left_sec_para">and many more...</p>
            </div>

        </div>
    )
}

export default WeHave
