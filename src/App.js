import logo from "./logo.jpeg";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import About from "./components/About";
import "./App.css";
import React, { useState } from "react";
import Alert from "./components/Alert";
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// let function1 = (a,b) => {

//   let as = prompt("enter your name");
//   return as}
function App() {

  // const [Theme, setTheme] = useState()
  const [myStyle, setStyle] = useState({color:'white',backgroundColor:'black'})
  const [themeBtn, setThemeBtn] = useState("Light theme")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      message:message,
      type:type
    }
    )
    setTimeout(() => {
      showAlert(null)
    }, 3500);
  }
  let toggleTheme =()=>{
    if (myStyle.color==='white'){
      setStyle({color:'black',
      backgroundColor:'white'
      ,borderColor:'white'}
      )
      showAlert("Dark Mode disabled","succes")
      document.body.style.backgroundColor='rgb(200,250,200)'
      setThemeBtn("Enable")}
      else{
        setStyle({color:'white',
        backgroundColor:'black'
        ,borderColor:'black'}
        )
        showAlert("Dark Mode enabled","succes")
        document.body.style.backgroundColor='grey'
        setThemeBtn("Disable")}
        
      }
      // let style =myStyle
  return (
    <>
    <Router>
      <Navbar logo={logo} style={myStyle} bgclr={myStyle.backgroundColor} mode={themeBtn} btnFunc={toggleTheme} />
      <Alert id ="idk" alert={alert} ></Alert>
      <Routes>
        <Route exact path="/" element={<TextBox showalert={showAlert} heading="THIS IS MY FORM " />}>
      </Route>
      <Route exact path="/about" element={<About/>}>
      </Route>
      </Routes>
      
      {/* <button type="button" onClick={toggleTheme} className="button-s">Change to {themeBtn}</button> */}
      </Router>
    </>
  );
}

export default App;
