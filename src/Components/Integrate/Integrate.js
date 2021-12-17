import React,{useEffect} from 'react'
import './integrate.css'
import '../../assets/fonts/font.css'
import cpanel from  '../../assets/cpanel.png'
import Aos from 'aos'
function Integrate() {
    useEffect(
        ()=>(
            Aos.init({
                duration:2000,
                once:true
            })
        )
    )
    return (
        <div data-aos="fade-up" className="integrate_top">
            <div className="container">
            <h3 className="integrate_main_head">Integrate CurvyEgg on your favorite platforms </h3>
                        
                <div className="dsflex">
                    <div className="first_half">
                       <p className="integrate_main_para">We know your team loves to use various tools on number of platforms, so we have included all major integrations for CurvyEgg, making it easy for you and your team to work across different systems and platforms. CurvyEgg will fit in to your day to day workflow, without any assistance, in few minutes.</p>
                        <p className="integrate_para">Lorem ipsum dolor <span>sit amet</span> </p>
                    </div>
                    <div className="sec_half">
                        <img className="integrate_img" src={cpanel} width="90%"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Integrate
