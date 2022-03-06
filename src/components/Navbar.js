import React from 'react'
// import logo from './logo.svg';

import PropTypes from 'prop-types'

export default function Navbar(props) {
let fg =()=>{
  props.btnFunc("green",true)
  console.log(props.bgColor)
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
      return (

// const [myStyle, setStyle] = useState({color:'white',backgroundColor:'black'})
<>
{/* <nav className="topbar" style={ props.style }>
  <a href='#' >
  <a href='#' className="logobar itembar" ><strong> TEXTUILITY</strong></a> */}
    {/* <img className="logobar" src={props.logo} alt="" /> */}
  {/* </a> */}
  {/* <a href='#' className="logobar itembar" >HOME</a> */}
  {/* <label className="switch">
  <input type="checkbox" onClick={props.btnFunc}/>
  <span className="slider round"></span>
</label>
  <a className="itembar-s" >
    {props.mode} Dark Mode
      </a> */}
      <div className="topnav"  id="myTopnav">
  {/* <a href="#" className=''>
    </a> */}
  <a href="#" className="active">TextUtility</a>
  <a href="#" >Home</a>
  {/* <a href="#news">News</a>
  <a href="#contact">Contact</a> */}
  <a href="#">About</a>
  <a href={void(0)} className="icon" onClick={myFunction}/>
      <button className='colorChanger' style={{backgroundColor:'#aaffaa'}} onClick={()=>{props.btnFunc("#aaffaa",false)}}></button>
      <button className='colorChanger' style={{backgroundColor:'blue'}} onClick={()=>{props.btnFunc("blue",true)}}></button>
      <button className='colorChanger' style={{backgroundColor:'yellow'}} onClick={()=>{props.btnFunc("yellow",false)}}></button>
      <button className='colorChanger' style={{backgroundColor:'#888888'}} onClick={()=>{props.btnFunc("#888888",true)}}></button>
    <i className="fa fa-bars"></i>
</div>
{/* <button type="button" onClick={`${props.btnFunc}`} className="button-s">{props.mode}</button> */}
{/* </nav> */}
</>
    
    )
}

Navbar.prototype={
  logo:PropTypes.img,
  page:PropTypes.string
}