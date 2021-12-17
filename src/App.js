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

function App() {
  return (
    <Router>
   <div className="App">
     
      
         <Routes>
         <Route path="/glance/:id" element={<Glance />}/>
         <Route path = "/blog" element={<Blog />}/>
         <Route path="/support" element={<Support />}/>
         <Route path="/term" element={<Termpolicy/>}/>
         <Route exact path="/" element={<Index />}/>
         </Routes>
    </div>
    </Router>
  );
}

export default App;
