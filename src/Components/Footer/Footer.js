import React from 'react'

import logo from '../../assets/svg/Footerlogo.svg'
import './footer.css'
import '../../assets/fonts/font.css'

import twitter from '../../assets/svg/Twitter.svg'
import linkedin from '../../assets/svg/Linkedin.svg'
import facebook from '../../assets/svg/Facebook.svg'

import {Link} from 'react-router-dom'
function Footer() {
    return (
        <div className="footer_top" style={{position:'relative',top:256}}>
             <div className="logo footer_img_hide">
                        <img src={logo}  width="88px" height="128px"/>
                    </div>
            <div className="container main_content">
                <div className="flex">
                   
                   <div className="logo footer_img_show">
                        <img src={logo}  width="108px" />
                    </div>
                 
                    <div className="grid">
                   
                    <div>
                        <h4>Services</h4>
                            <ul>
                                <li><Link className="link" to="#">Agents</Link></li>
                                <li><Link className="link"  to="#">Live Chat support</Link></li>
                                <li><Link className="link" to="#">Technical Support</Link></li>
                                <li><Link className="link" to="#">E-Commerce Support</Link></li>
                                <li><Link className="link" to="#">Features</Link></li>
                                <li><Link className="link" to="#">Benefits</Link></li>
                            </ul>
                    </div>
                    <div>
                        <h4>Business</h4>
                        <ul>
                            <li><Link className="link" to="#">Why CurvyEgg?</Link></li>
                            <li><Link className="link" to="#">Performance</Link></li>
                            <li><Link className="link" to="#">Curvy on Linkedin</Link></li>
                            <li><Link className="link" to="#">Curvy on Facebook</Link></li>
                            <li><Link className="link" to="#">Curvy on Twitter</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li><Link className="link" to="#">About</Link></li>
                            <li><Link className="link" to="#">Our Values</Link></li>
                            <li><Link className="link" to="#">Blog</Link></li>
                            <li><Link className="link" to="#">Become a Partner</Link></li>
                            <li><Link className="link" to="#">Contact</Link></li>
                            <li><Link className="link" to="#">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Support</h4>
                        <ul>
                            <li><Link className="link" to="#">FAQ</Link></li>
                            <li><Link className="link" to="#">Help Center</Link></li>
                            <li><Link className="link" to="#">Getting Started</Link></li>
                        </ul>
                    </div>
                </div>
                </div>
               
            
                <div className="two-grid">
                    <div>
                        <ul>
                            <li><Link className="link" to="#">Terms of Services</Link></li>
                            <li><Link className="link" to="#">Privacy Policy</Link></li>
                            <li><Link className="link" to="#">Accessiblilty</Link></li>
                            <li><Link className="link" to="#">Sitemap</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><Link to="#"><img src={facebook} width="20px"/></Link></li>
                            <li><Link to="#"><img src={twitter} width="20px"/></Link></li>
                            <li><Link to="#"><img src={linkedin} width="20px"/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
