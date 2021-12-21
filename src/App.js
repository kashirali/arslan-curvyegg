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

function App() {
  return (
    <Router>
   <div className="App">
     
      
         <Routes>
         <Route path="/glance/:id" element={<Glance />}/>
         <Route path="/signup" element={<Register/>}/>
         <Route path = "/blog" element={<Blog />}/>
         <Route path="/support" element={<Support />}/>
         <Route path="/threecard" element={<ThreeCards/>}/>
         <Route path="/term" element={<Termpolicy/>}/>
         <Route path="/whycards" element={<Whycards/>}/>
         <Route path="/sixcard" element={<Sixsvgcomb/>}/>
         <Route exact path="/" element={<Index />}/>

         </Routes>
    </div>
    </Router>
  );
}

export default App;
