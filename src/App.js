import logo from "./logo.jpeg";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import "./App.css";
import React, { useState } from "react";
import Alert from "./components/Alert";
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
    }, 5500);
  }
  let toggleTheme =(color,d)=>{
    if (d){ 
    setStyle({
        color:'white',
        backgroundColor:'black'
     })
    document.body.style.backgroundColor =color
    document.body.style.color ='white'
    // document.getElementsByClassName("colorChanger").style.color ='black'
    // document.getElementById("myTopnav").style.backgroundColor =color
    
  }
  else{
    // document.getElementsByClassName("colorChanger").style.color ='white'
    // document.getElementById("myTopnav").style.backgroundColor =color
    setStyle({
      color:"black",
      backgroundColor:"white"
    })
    document.body.style.backgroundColor =color
    document.body.style.color ='black'
  }
        
      }
      // let style =myStyle
  return (
    <>
      <Navbar logo={logo} style={myStyle} bgclr={myStyle.backgroundColor} mode={themeBtn} btnFunc={toggleTheme} bgColor="green" />
      <Alert id ="idk" alert={alert} ></Alert>
        <TextBox showalert={showAlert} heading="Enter Text " />
        
      
    </>
  );
}

export default App;
