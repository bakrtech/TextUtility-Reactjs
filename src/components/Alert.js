import React from 'react'
import PropTypes from 'prop-types'
   export default function Alert(props) {
        return (
 props.alert &&
    <>
     <div  id ={props.id}className={`msgbox ${props.alert.type}`}>
    <b className='continerC'><strong>{props.alert.type}</strong>{props.alert.message}</b>
</div>
    </>
  )
}

Alert.prototype={
    id:PropTypes.string.isRequired
}