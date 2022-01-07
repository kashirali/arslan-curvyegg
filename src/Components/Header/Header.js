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
import hidepass from '../../assets/svg/Passwords Icon/Passwords Icon Hide.svg';
import showpass from '../../assets/svg/Passwords Icon/Passwords Icon Show.svg';
import crossicon from '../../assets/svg/Cross icon/Cross icon.svg'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import curvyegg from '../../assets/svg/curvyegg1.svg'
import curvyeggwhite from '../../assets/svg/Support/CurvyEgg Support Page Icon Set SVG/curvyeggwhite.svg'
import '../../assets/fonts/font.css'
import './headerStyle.css'
function Header(props) {
  const [checkSmile,setCheckSmile] = useState(false);

  const list = document.querySelectorAll('.nav-text');
  function activeLink(){
    list.forEach((item)=>
      item.classList.remove('active'))
      this.classList.add('active')
  }
  list.forEach((item)=>
  item.addEventListener('click',activeLink));

  const history = useNavigate();

  const routeChange = () =>{ 
    let path = `/support`; 
    history(path);
  }

  console.log(props)
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const baseURL = window.location.origin;
  const clickSmile = ()=>{
    console.log('clicked')
    setCheckSmile(!checkSmile);
  }
  let cssClass = [];
  if(checkSmile){
    cssClass.push('top_nav_click')
  }
 console.log(window.location.origin,'orog')
 
  const [imgtodisplay,setImgtodisplay] = useState(hidepass);
  console.log(props,'headerprops')
  
    return (
        <div className="borderss">
            {/* top bar line */}
               
            {/* Navbar */}
            <div className={`top_nav ${cssClass}`}>
                <div className="container">
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',color:'white',marginTop:'30px'}}>
                  {/* <h3 className="hide_main_head" >curvyegg</h3> */}
                  <img src={curvy} width="100px"/>
                  <img onClick={clickSmile} src={crossicon} className="globalcrossicon" style={{cursor:'pointer',width:'30px',transition:'transform 0.15s linear'}}/>
                  </div>
                  <div className="form_container">
                      <form autocomplete="off">
                          <Button variant="primary"><i class="fab fa-facebook"></i> Log in with Facebook</Button>
                          <p className="p_special"><span>or</span></p>

                          <div className="inputGrp">
                              <input type="text" placeholder="Email" className="inputBox" style = {{color: 'white'}}/>
                              <img src={imgtodisplay} className="eyeIcon" onClick={() => {
                                const ele = document.getElementById('might');
                                if (ele.type === "password") {
                                  ele.type = "text";
                                  setImgtodisplay(showpass)
                                } else {
                                  ele.type = "password";
                                  setImgtodisplay(hidepass)
                                }
                              }}/>
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
  <div className="sec_right" >
     <div style={{width:'100px',margin:'0 0 0 auto'}}>
     <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav" style={{border:'0',}}>
        <img src={!props.color?toggleicon:togglewhite} style={{marginLeft:'0'}} width="32px" height="15px" />
    </Navbar.Toggle>
     </div>
     
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto mob_view">
    
        <a href={`${baseURL}/#aboutcurvy`} className={!props.color? "nav_text nav_text_grey":"nav_text nav_text_white"}  style={{marginLeft:'-5px'}}>About</a>
        <a href={`${baseURL}/#whycurvy`} className={!props.color? "nav_text nav_text_grey":"nav_text nav_text_white"} >Why Curvy</a>
        <a href={`${baseURL}/#solution`} className={!props.color? "nav_text nav_text_grey":"nav_text nav_text_white"} >Solutions</a>
        <a href="/glance" className={!props.color? "nav_text nav_text_grey":"nav_text nav_text_white"} >Features</a>
    
      </Nav>
      <Nav className="mr-0 mob_view">
    <a href={`${baseURL}/#tryitout`} className={!props.color? "nav_text nav_text_grey":"nav_text nav_text_white"} >Try it out</a>
    <Link onClick={props.headerprop?clickSmile:null} to={props.headerprop?'#': '/signup' } className={!props.color? "nav_text nav_text_grey":"nav_text nav_text_white"}style={{marginRight:'15px'}}>{props.headerprop?'Sign in':'Sign up'}</Link>
    <Button onClick={routeChange} className='fontfamilyheaderbtn' variant={!props.color? 'primary':'light'} style={{width:'fit-content',margin:'0 auto',padding:'0 25px', background: !props.color?'#446beb':null,color:!props.color?null:'#446beb'}} >Contact</Button>
    

  </Nav>
    </Navbar.Collapse>
  </div>
</Navbar>
<IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar_menu'>
               {!props.headerlogo? <img src={!props.color?curvyegg:curvyeggwhite} width="120px" style={{marginLeft:'20px'}}/>:null} 
          {!props.headercrossicon ? <Link onClick={showSidebar} to='#' className='menu-bars'>
                <img src={!props.color?toggleicon:togglewhite} style={{marginLeft:'10px',marginRight:"-20px"}} width="32px" height="15px" />
          </Link>:<img src={crossicon} onClick={()=>props.onpopupimgclick()} style={{marginLeft:'auto',marginRight:'22px',marginTop:'3px'}} width="30px" />}
        </div>
        <nav style={props.color === 'white' ? {background:'white',borderRight:'10px solid #446beb'}:{background:'#446beb',borderRight:'10px solid #fff'}} className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <span style={{width:'101%',height:'1px',background:props.color === 'white'?'#446beb':'white',position:'absolute',top:'100px'}}></span>
          <ul className= {props.color === 'white' ? 'nav-menu-items_blue': 'nav-menu-items'} >
            <li className='navbar-toggle-menu'>
            <img src={props.color ==='white'?curvyegg:curvyeggwhite} width="120px" style={{marginLeft:'20px'}}/>
              <Link to='#' className='opennavbarcloseicon' onClick={showSidebar}>
                <AiIcons.AiOutlineClose style={props.color === 'white' ? {color:'#446beb'}:{color:'white'}}/>
              </Link>
            </li>
           <span className='divider'></span>
                <li  className='nav-text' >
                <a href={`${baseURL}/#aboutcurvy`} className='nav-text'><span className='title'>About</span></a>
      
                </li>
                <li  className='nav-text' >
                <a href={`${baseURL}/#whycurvy`} className='nav-text' ><span className='title'>Why curvy</span></a>
        
                </li>
                <li  className='nav-text' >
                <a href={`${baseURL}/#solution`} className='nav-text' ><span className='title'>Support</span></a>
       
                </li>
                <li  className='nav-text' >
                <a href="/glance" className='nav-text' ><span className='title'>Features</span></a>
    
                </li>
                <li  className='nav-text' >
                <a href={`${baseURL}#tryitout`} className='nav-text' ><span className='title'>Try it out</span></a>
    
                </li>
                <li  className='nav-text' >
                <Link to={props.headerprop?'#': '/signup' } ><span className='title'>{props.headerprop?'Sign in':'Sign up'}</span></Link>
   
                </li>
              
            
          </ul>
        </nav>
      </IconContext.Provider>
        </div>
    )
}

export default Header
