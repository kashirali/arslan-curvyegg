import './Register.css';
import {useEffect, useState} from 'react';
import { Signuplist } from './Signuplist';
import { Signupform } from './Signupform';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import OnlyFooter from '../../Components/OnlyFooter/OnlyFooter';
import { useLocation } from 'react-router-dom';

import supp1 from '../../assets/svg/Support/CurvyEgg Support Page Icon Set SVG/Support-1.svg'
import supp2 from '../../assets/svg/Support/CurvyEgg Support Page Icon Set SVG/Support-2.svg'
import supp3 from '../../assets/svg/Support/CurvyEgg Support Page Icon Set SVG/Support-3.svg'
import supp4 from '../../assets/svg/Support/CurvyEgg Support Page Icon Set SVG/Support-4.svg'
import faqicon from '../../assets/svg/Support/CurvyEgg Support Page Icon Set SVG/Support-FAQ.svg'
import liveicon from '../../assets/svg/Support/CurvyEgg Support Page Icon Set SVG/Support-Live Chat.svg'
import supp5 from '../../assets/svg/Support/CurvyEgg Support Page Icon Set SVG/Support-5.svg'

function Register(props) {
  const [headerprop,setHeaderprop] = useState(null)
  const location = useLocation();
  useEffect(()=>{
    if(location.pathname === '/signup'){
      setHeaderprop('signin')
    }
  },[location])
  const [support_card_data,setSupport_card_data] = useState([
    {
        icon:supp1,
        text:'Lorem Ipsum'
    },
    {
        icon:supp2,
        text:'Lorem Ipsum'
    },
    {
        icon:supp3,
        text:'Lorem Ipsum'
    },
    {
        icon:supp4,
        text:'Ipsum Lorem'
    },
    {
        icon:supp5,
        text:'Lorem Ipsum'
    }
])
let displayCard = '';

displayCard = support_card_data.map((curr,index)=>(<div className="suport_card_mob" key={index} style={{width:'200px',height:'200px',background:'white',boxShadow:' 0px 0px 25.2px 4.8px rgba(167, 167, 167, 0.25',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderRadius:'25px'}}>
        <img src={curr.icon} width="100px" height="100px"/>
        <p className="support_card_text">{curr.text}</p>

</div>))

  
  return (
    <div>
        <Header headerprop/>
      <div class="container">
      <h2 class="home-h" >We Connected Lorem</h2>
     
      
      <div class="row">
<div class="col-lg-5 col-md-6 col-sm-12 margin-top">
  <div style={{marginTop:'40px'}}></div>
<p class="home-p">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
  <p class="home-p">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, consectetur adipiscing elit, sed do eiusmod.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, consectetur adipiscing elit, sed do eiusmod.
  </p>
  <p class="home-p">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit!
  </p>
  <Signuplist/>
</div>
<div class="col-lg-5 col-md-6 col-sm-12 mob-wid margin-top">
 <Signupform/>

</div>
      </div>
      <div style={{marginTop:'80px'}}></div>
      <h4 class="home-s" >Why We Lorem</h4>
      <div style={{marginTop:'80px'}}></div>

      <div className='signupmobleft'>
                            <div className="support_grid">
                                {displayCard}
                            
                            </div>
                         
                        </div>
                        
                        <div style={{marginBottom:'40px'}}></div>

    </div>
    <OnlyFooter/>
    </div>
  );
}

export default Register;
