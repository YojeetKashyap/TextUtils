import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light") // whether dark mode is enabled or not

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);

  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showalert("dark mode enabled", "success");
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showalert("light mode enabled", "success");
    }
  }



  return (
    <>
      
      <Router>
      <Navbar title="TextUtils" mode={mode} togglemode={toggleMode}> </Navbar>
        <Alert alert={alert} />
        <div className='container my-3'  >
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter text to Analyze" mode={mode} showalert={showalert} > </TextForm>}/>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
