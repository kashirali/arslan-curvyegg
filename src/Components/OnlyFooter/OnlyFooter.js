import React from 'react'

import logo from '../../assets/svg/Footerlogo.svg'
import '../Footer/footer.css'
import '../../assets/fonts/font.css'

import twitter from '../../assets/svg/Twitter.svg'
import linkedin from '../../assets/svg/Linkedin.svg'
import facebook from '../../assets/svg/Facebook.svg'
function OnlyFooter() {
    return (
        <div className="onlyFooter_top" >
             <div className="logo only_footer_img_hide">
                        <img src={logo}  width="88px" height="128px"/>
                    </div>
            <div className="container">
                <div className="flex">
                   
                   <div className="logo footer_img_show">
                        <img src={logo}  width="108px"/>
                    </div>
                 
                    <div className="only_grid">
                   
                    <div>
                        <h4>Services</h4>
                            <ul>
                                <li>Agents</li>
                                <li>Live Chat support</li>
                                <li>Technical Support</li>
                                <li>E-Commerce Support</li>
                                <li>Features</li>
                                <li>Benefits</li>
                            </ul>
                    </div>
                    <div>
                        <h4>Business</h4>
                        <ul>
                            <li>Why CurvyEgg?</li>
                            <li>Performance</li>
                            <li>Curvy on Linkedin</li>
                            <li>Curvy on Facebook</li>
                            <li>Curvy on Twitter</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li>About</li>
                            <li>Our Values</li>
                            <li>Blog</li>
                            <li>Become a Partner</li>
                            <li>Contact</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Support</h4>
                        <ul>
                            <li>FAQ</li>
                            <li>Help Center</li>
                            <li>Getting Started</li>
                        </ul>
                    </div>
                </div>
                </div>
               
            
                <div className="two-grid">
                    <div>
                        <ul>
                            <li>Terms of Services</li>
                            <li>Privacy Policy</li>
                            <li>Accessiblilty</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><img src={facebook} width="20px"/></li>
                            <li><img src={twitter} width="20px"/></li>
                            <li><img src={linkedin} width="20px"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnlyFooter
