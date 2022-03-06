import React from 'react'
import PropTypes from 'prop-types'
   export default function Alert(props) {
        return (
 props.alert &&
    <>
     <div  id ={props.id}className={` ContainerC  msgbox ${props.alert.type}`}>
    <b ><strong>{props.alert.type=="warn"||props.alert.type=="info"||props.alert.type=="alert"&&props.alert.type!=="succes"} </strong></b>
    <b >{props.alert.message}</b>
</div>
    </>
  )
}

Alert.prototype={
    id:PropTypes.string.isRequired
}