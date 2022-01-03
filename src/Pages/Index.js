import React from 'react'
import Header from '../Components/Header/Header'
import Showcase from '../Components/Showcase/Showcase';
import YourCust from '../Components/YourCust/YourCust';
import AboutCurvy from '../Components/AboutCurvy/AboutCurvy';
import WeHave from '../Components/WeHave/WeHave';
import SayNo from '../Components/SayNo/SayNo';
import WhyCurvy from '../Components/WhyCurvy/WhyCurvy';
import SellSol from '../Components/SellSol/SellSol';
import Integrate from '../Components/Integrate/Integrate';
import FAQ from '../Components/FAQ/FAQ';
import Subform from '../Components/Subform/Subform';
import Footer from '../Components/Footer/Footer';
import Ataglance from '../Components/Ataglance/Ataglance';
export default function Index() {
    return (
        <div>
             <Header headerlogo/>
     <Showcase/>
       <YourCust/>
     <AboutCurvy/> 
        <WeHave/>
      <SayNo/> 
      <div style={{overflow:"hidden"}}><WhyCurvy/> </div>
      <SellSol/> 
     
      <Integrate/>
      <Ataglance/>
      <FAQ/>
    <Subform/> 
        <Footer/>
        </div>
    )
}
