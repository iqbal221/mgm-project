import './App.css';
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import ChittagongCard from './Components/Projects/Chittagong'
import KhulnaCard from './Components/Projects/Khulna'
import DhakaCard from './Components/Projects/Dhaka'
import SylhetCard from './Components/Projects/Sylhet'
import RajshahiCard from './Components/Projects/Rajshahi'
import ComillaCard from './Components/Projects/Comilla'
import {Route,Routes} from 'react-router-dom'
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'



class App extends React.Component{
  render(){
    return (
      <div>
            
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/Contact' element={<Contact/>} />
              <Route path='/About' element={<About/>} />
              <Route path='/ChittagongCard' element={<ChittagongCard/>} />
              <Route path='/DhakaCard' element={<DhakaCard/>} />
              <Route path='/KhulnaCard' element={<KhulnaCard/>} />
              <Route path='/SylhetCard' element={<SylhetCard/>} />
              <Route path='/RajshahiCard' element={<RajshahiCard/>} />
              <Route path='/ComillaCard' element={<ComillaCard/>} />
            
            </Routes>
        </div>
    );
  }
}


export default App;
