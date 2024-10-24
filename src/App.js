import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import { Route,Routes,BrowserRouter as Router } from "react-router-dom";
import FloatingAlert from "./components/floatingAlert";
import { useState } from "react";
import HomePage from "./components/HomePage";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  const triggerAlert=(message,Type,duration)=>{
    setAlertMessage(message);
    setAlertType(Type)
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), duration);
  }
  const [mode,setMode]=useState('light')
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }

  return (
    <>
    <Router>
    <Navbar toggleMode={toggleMode} mode={mode} />
    <div>
      {alertVisible && (
        <FloatingAlert message={alertMessage} type={alertType} duration={3000} />
      )}
    </div>
    <div className="container mt-5">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/test" element={<Test triggerAlert={triggerAlert} mode={mode}/>} />
        <Route path="/about" element={<AboutUs />} />
        </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
