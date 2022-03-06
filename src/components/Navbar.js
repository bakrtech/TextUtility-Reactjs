import React,{useState} from 'react'
// import logo from './logo.svg';

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

      return (
      // const [myStyle, setStyle] = useState({color:'white',backgroundColor:'black'})
<div className="abu">
<nav className="topbar" style={ props.style }>
  <Link to="/">
    <img className="logobar" src={props.logo} alt="" />
  </Link>
  <Link className="itembar"  to="/">HOME</Link>
  <Link className="itembar" to="/about" >ABOUT</Link>
  <label className="switch">
  <input type="checkbox" onClick={props.btnFunc}/>
  <span className="slider round"></span>
</label>
  <a className="itembar-s" >
    {props.mode} Dark Mode
      </a>
{/* <button type="button" onClick={`${props.btnFunc}`} className="button-s">{props.mode}</button> */}
</nav>
</div>
    
    )
}

Navbar.prototype={
  logo:PropTypes.img,
  page:PropTypes.string
}