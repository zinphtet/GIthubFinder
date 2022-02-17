import React from 'react'
import './Loading.css'
import Spinner from '../../Spinner.svg'
function Loading() {
  return (
    <div className='spinner'>
     <img src={Spinner} alt="" />
    </div>
  )
}

export default Loading;