import React from 'react'
import { BiX } from "react-icons/bi";
import './Alert.css'
import {useContext} from 'react'
import { alertContext } from '../../context/alertContext';

function Alert() {
  const {text} = useContext (alertContext)
  return (
    <div className='alert-div' >
       <BiX className='alert-icon'/> {text}
    </div>
  )
}

export default Alert