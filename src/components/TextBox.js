import React,{useState} from 'react'


export default function TextBox(props) {
  const[text,setText]=useState("")
  const strToUp =()=>{
    // console.log("Upper case Was requested")
    let NewText=text.toUpperCase()
    setText(NewText)
    props.showalert("Converted to Uppercase","info")
    // setText(text.toUpperCase())
  }
  const strToLow =()=>{
    // console.log("Upper case Was requested")
    let NewText=text.toLowerCase()
    setText(NewText)
    props.showalert("Converted to Lowercase","info")
    // setText(text.toUpperCase())
  }
  const onChangeStrToUp =(event)=>{
    // console.log("TXT BOX CHANGED")
    setText(event.target.value)
    // setText(text.toUpperCase())
  }
  const onCopying =()=>{
    var text =document.getElementById("Mybox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showalert("Copied to Clipboard","info")
    
  }
  return (
    <>
<h1 className="continerC " >{props.heading} </h1>
<div className ="continerC ">
    <textarea htmlFor="myBox" id="Mybox" value={text} onChange={onChangeStrToUp} className='textbox'  rows="8"></textarea>
<div className ="continerC row">
  <button className='button-s'   onClick={strToUp}> Convert to UpperCase </button>
  <button className='button-s'   onClick={strToLow}> Convert to LowerCase </button>
  <button className='button-s'   onClick={onCopying}> Copy to Clipbord </button>
  </div>
  </div>
<div className ="continerC column">
  {/* <button className='button-s'>2</button>
  <button className='button-s'>4t</button> */}
    <h1 className='containerC'>YOUR TEXT SUMMARY</h1>
    <p><b>{text.trim().length }</b> characters {text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words</p>
    <p>{0.008 * text.trim().length} Minutes Would be taken to read this word </p>
    <h2 >Preview </h2>
    <p>{text.length>0?text:'Enter some text to privew'}</p>
  </div>
    </>
  )
}
