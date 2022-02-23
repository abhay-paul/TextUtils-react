import './App.css';
// import About from './components/About';
import FormText from './components/FormText';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const toggleMode= ()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#576e85';
      document.body.style.color='white';
      showAlert("Dark Mode has been Enabled", "success");

    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light Mode has been Enabled", "success");
    }
  }
  return (
   <>
   <Navbar title= "TextUtils" aboutText= "About" mode= {mode} toggleMode= {toggleMode}/>
      <Alert alert={alert}/>
    {/* // <Router>
      
      // <About/>
      
      // <Routes>  
          // <Route exact path="/about" element={<About/>}/>

          // {/* <Route exact path="/" */}
          {/* //  element={<div className="container"><FormText heading= "Enter Text to Analyze" mode= {mode}/> */}
          {/* //  </div>}/> */}
          {/* </Routes> */}
          {/* // </Router> */} 
          
          <div className="container">
            <FormText heading= "Enter Text to Analyze" mode= {mode}/>
            </div>
        
            </>
  );
}

export default App;
