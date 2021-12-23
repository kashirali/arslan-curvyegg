import React,{useEffect} from 'react'

import './yourcust.css'
import '../../assets/fonts/font.css'

import { Container } from 'react-bootstrap'
import bg from '../../assets/BG.png'
import unmatch from '../../assets/Unmatchable_Team.png'
import dropline from '../../assets/svg/Dropline.svg'

import Aos from 'aos'
import "../../../node_modules/aos/dist/aos.css"

function YourCust() {
    useEffect(()=>(
        Aos.init({
            duration:2000,
                once:true
        })
    ),[])
    return (
        <div className="bg-gradients" >
            {/* <img src={bg} width="100%" height="385px" style={{position:'absolute',top:'0px',left:'0px'}}/> */}
            {/* div have background linear gradient */}
            <div className="cont_mob">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-12">
                            <div data-aos="fade-right" className="left_child">
                                <h3  className="left_child_head ">Your Customers, Our Family!</h3>
                                <h5 className="left_child_subhead">CurvyEgg, working for your customer satisfaction,we know perfection is the key.</h5>
                                <p className="left_child_para">Ready to boost your sale, with a friendly human touch?</p>
                                <p> <a href="#"> Subscribe today!</a></p>
                               
                            </div>
                        </div>
                        <div  className="col-md-5 col-sm-12">
                            {/* <img src={unmatch} width="377px" height="385px"/> */}
                            <div data-aos="fade-left" style={{width:'100%',minHeight:'385px',position:'relative',marginLeft:'-30px'}}>
                            <img className="dropline" src={dropline} />
                            <div className="drop dropdiv1"><p>Uninterruptable Service</p></div>
                            <div  className="drop dropdiv2"><p>Unmatchable Team</p></div>
                            <div className="aboutCircle"><p>About Curvy</p></div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
              {/* col-md-6 col-sm-12*/}
                {/* left section contain text  */}
            {/* col-md-6 col-sm-12*/}
                {/* right section contain  image */}
        </div>
    )
}

export default YourCust
