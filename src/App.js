import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textfield from './components/Textfield';
import About from './components/About';
import { useState } from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  const toggleMode = () => {
    if(mode==='dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('success','Light Mode Enabled!')
      document.title = 'TextUtils -Light Mode'
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#434544';
      showAlert('success','Dark Mode Enabled!')
      document.title = 'TextUtils -Dark Mode'
    }
  }

  const showAlert = (type,message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  return (
<>
<BrowserRouter>
  <Navbar title="TextUtils" mymode= {mode} myToggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <Routes>
        <Route exact path="/" element={<Textfield heading="Enter text to Analyze" mymode={mode} showAlert={showAlert}/>}/> 
        <Route exact path = "about" element={<About aboutTitle="About Us"/>} /> 
  </Routes>
</BrowserRouter>
</>
  );
}

export default App;
