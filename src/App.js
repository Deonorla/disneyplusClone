import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Header  from './Components/Header';
import './App.css';
 
function App() {
  return ( 
    <div className='App'>
     <Router>
          <Header/>
        <Routes>  
            <Route  path="/disneyplusClone" element={<Login />} exact/>       
         </Routes>
      
     </Router>
     </div> 
  );
}

export default App;
 