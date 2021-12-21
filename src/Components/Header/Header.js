import React,{useState} from 'react'
import head_pic from '../../assets/Nav_Bar_3.png'
import toggleicon from '../../assets/Vector_Smart_Object1.png'
import togglewhite from '../../assets/toggle_white.png'
import smile from '../../assets/svg/Smilewhite.svg'
import curvy from '../../assets/svg/curvyegg.svg'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

import {Link} from 'react-router-dom'
import '../../assets/fonts/font.css'
import './headerStyle.css'
function Header(props) {
  const [checkSmile,setCheckSmile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const clickSmile = ()=>{
    console.log('clicked')
    setCheckSmile(!checkSmile);
  }
  let cssClass = [];
  if(checkSmile){
    cssClass.push('top_nav_click')
  }
  console.log(checkSmile,cssClass)

  
    return (
        <div className="borderss">
            {/* top bar line */}
               
            {/* Navbar */}
            <div className={`top_nav ${cssClass}`}>
                <div className="container">
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',color:'white',marginTop:'30px'}}>
                  {/* <h3 className="hide_main_head" >curvyegg</h3> */}
                  <img src={curvy} width="100px"/>
                  <i onClick={clickSmile} className="fas fa-times timesicon" style={{cursor:'pointer',fontSize:'22px',transition:'transform 0.15s linear'}}></i>
                  </div>
                  <div className="form_container">
                      <form autocomplete="off">
                          <Button variant="primary"><i class="fab fa-facebook"></i> Log in with Facebook</Button>
                          <p className="p_special"><span>or</span></p>

                          <div className="inputGrp">
                              <input type="text" placeholder="Email" className="inputBox" style = {{color: 'white'}}/>
                              <i class="fas fa-eye-slash eyeIcon" onClick={() => {
                                const ele = document.getElementById('might');
                                if (ele.type === "password") {
                                  ele.type = "text";
                                } else {
                                  ele.type = "password";
                                }
                              }}></i>
                              <input type="password" placeholder="Password" className="inputBox" style = {{color: 'white'}} id="might"/>
                          </div>
                         
                          <Button variant="primary">Log In</Button>
                          <div>
                          <a href="#" style={{textDecoration:'none',color:'white'}}>Forgot Password?</a>
                          </div>
                         
                      </form>
                  </div>
                    </div>
                <img className="hidden" src={head_pic} alt="top_nav" height="92" width="100%" /> 
                <div className='bottom_center' >
                   {!checkSmile?<img src={curvy}  width="105px" /> : <img src={curvy} width="100px" style={{visibility:'hidden'}}/>}
                  <img onClick={clickSmile} id="imgClick" style={{cursor:'pointer',marginTop:'30px'}} src={smile}  width="60px"/>
                 
                </div>
            </div>
            <Navbar className="kiryana"  expand="lg" >
  <div className="sec_right">
     <div style={{width:'100px',margin:'0 0 0 auto'}}>
     <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav" style={{border:'0',}}>
        <img src={!props.color?toggleicon:togglewhite} style={{marginLeft:'0'}} width="32px" height="15px" />
    </Navbar.Toggle>
     </div>
     
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto mob_view">
    
        <Link to="#" className={!props.color? "nav_text nav_text_grey":"nav_text nav_text_white"} href="#about" style={{marginLeft:'-5px'}}>About</Link>
        <Link to="#" className={!props.color? "nav_text nav_text_grey":"nav_text nav_text_white"} href="#whycurvy">Why Curvy</Link>
        <Link to="#" className={!props.color? "nav_text nav_text_grey":"nav_text nav_text_white"} href="#solutions">Solutions</Link>
        <Link to="#" className={!props.color? "nav_text nav_text_grey":"nav_text nav_text_white"} href="#features">Features</Link>
    
      </Nav>
      <Nav className="mr-0 mob_view">
    <Link to="#" className={!props.color? "nav_text nav_text_grey":"nav_text nav_text_white"} href="#about">Try it out</Link>
    <Link to="#" className={!props.color? "nav_text nav_text_grey":"nav_text nav_text_white"} href="#whycurvy"style={{marginRight:'15px'}}>Sign in</Link>
    <Button variant={!props.color? 'primary':'light'} style={{width:'fit-content',margin:'0 auto',padding:'0 20px'}} >Contact</Button>
    

  </Nav>
    </Navbar.Collapse>
  </div>
</Navbar>
<IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar_menu'>
          <Link onClick={showSidebar} to='#' className='menu-bars'>
                <img src={!props.color?toggleicon:togglewhite} style={{marginLeft:'0'}} width="32px" height="15px" />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle-menu'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
        </div>
    )
}

export default Header
