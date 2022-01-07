import React from 'react'

import logo from '../../assets/svg/Footerlogo.svg'
import './footer.css'
import '../../assets/fonts/font.css'

import twitter from '../../assets/svg/Twitter.svg'
import linkedin from '../../assets/svg/Linkedin.svg'
import facebook from '../../assets/svg/Facebook.svg'

import {Link} from 'react-router-dom'
function Footer() {
    const baseURL = window.location.origin;
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
                                <li><a href={`${baseURL}/#sayno`} className="link">Agents</a></li>
                                <li><a href={`${baseURL}/#solution`} className="link">Live Chat support</a></li>
                                <li><a href={`${baseURL}/#solution`} className="link">Technical Support</a></li>
                                <li><a href={`${baseURL}/#solution`} className="link">E-Commerce Support</a></li>
                                <li><a className="link" href="/glance">Features</a></li>
                                <li><a href={`${baseURL}/#sayno`} className="link" >Benefits</a></li>
                            </ul>
                    </div>
                    <div>
                        <h4>Business</h4>
                        <ul>
                            <li><a className="link" href={`${baseURL}/#whycurvy`}>Why CurvyEgg?</a></li>
                            <li><a className="link" href={`${baseURL}/wehave`}>Performance</a></li>
                            <li><a className="link" href="#">Curvy on Linkedin</a></li>
                            <li><a className="link" href="#">Curvy on Facebook</a></li>
                            <li><a className="link" href="#">Curvy on Twitter</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li><a className="link" href={`${baseURL}/#aboutcurvy`}>About</a></li>
                            <li><a className="link" href={`${baseURL}/#whycurvy`}>Our Values</a></li>
                            <li><a className="link" href={`${baseURL}/blog`}>Blog</a></li>
                            <li><Link className="link" to="#">Become a Partner</Link></li>
                            <li><Link className="link" to="#">Contact</Link></li>
                            <li><Link className="link" to="#">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Support</h4>
                        <ul>
                            <li><a className="link" href={`${baseURL}/#FAQ`}>FAQ</a></li>
                            <li><Link className="link" to="#">Help Center</Link></li>
                            <li><a className="link" href={`${baseURL}/support`}>Getting Started</a></li>

                        </ul>
                    </div>
                </div>
                </div>
               
            
                <div className="two-grid">
                    <div>
                        <ul>
                            <li><a className="link" href={`${baseURL}/term/service`}>Terms of Services</a></li>
                            <li><a className="link" href={`${baseURL}/term/privacy`}>Privacy Policy</a></li>
                            <li><a className="link" href={`${baseURL}/term/accessibility`}>Accessiblilty</a></li>
                            <li><a className="link" to="#">Sitemap</a></li>
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
