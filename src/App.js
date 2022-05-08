import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Header  from './Components/Header';
import Home from './Components/Home';
import './App.css';
import Detail from './Components/Detail';
 
function App() {
  return ( 
    <div className='App'>
     <Router>
          <Header/>
        <Routes>  
            <Route  path="/" element={<Login />} exact/>
            <Route path="/home" element={<Home/>} />   
            <Route path="/detail/:id" element={<Detail/>} />  
         </Routes>
      
     </Router>
     </div>  
  );
}

export default App;
 