import React from 'react'
import './Form.css'
import ClearBtn from './ClearBtn'
function Form() {
  return (
      <div className="form">
           <form action="">
                <input type="text" placeholder='Enter your search text ....' />
                <button>Go</button>
           </form>
        <ClearBtn/>
      </div>
  
  )
}

export default Form