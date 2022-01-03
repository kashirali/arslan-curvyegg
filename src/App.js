import './App.css';

import Index from './Pages/Index';
import Glance from './Pages/Glance/Glance';
import Support from './Pages/Support/Support';
import Termpolicy from './Pages/TermPolicy/Termpolicy';
import Blog from './Pages/Blog/Blog'
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import Register from './Pages/Register/Register';
import ThreeCards from './UI/ThreeCards/ThreeCards';
import Whycards from './UI/whycards/Whycards';
import Sixsvgcomb from './UI/sixsvgcomb/Sixsvgcomb';
import chaticon from './assets/cicon.png'

function App() {
  return (
    <Router>
   <div className="App">
     <div className='chaticonhideonmob' style={{width:'100%',height:'100%',position:'absolute',left:'90%',top:'85%',zIndex:'100',position:'fixed'}}>
     <img src={chaticon} style={{cursor:'pointer'}}/>

     </div>
      
         <Routes>
         <Route path="/glance/:id" element={<Glance />}/>
         <Route path="/glance" element={<Glance />}/>
         <Route path="/signup" element={<Register/>}/>
         <Route path = "/blog" element={<Blog />}/>
         <Route path="/support" element={<Support />}/>
         <Route path="/threecard" element={<ThreeCards/>}/>
         <Route path="/term/:id" element={<Termpolicy/>}/>
         <Route path="/whycards" element={<Whycards/>}/>
         <Route path="/sixcard" element={<Sixsvgcomb/>}/>
         <Route exact path="/" element={<Index />}/>

         </Routes>
    </div>
    </Router>
  );
}

export default App;
