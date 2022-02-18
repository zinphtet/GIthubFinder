import React from 'react'
import './Form.css'
import {useContext,useState} from 'react'
import { githubContext } from '../../context/githubContext'
import {fetchUsers} from '../../reducer/actions/action'
import Alert from '../alert/Alert'
import { alertContext } from '../../context/alertContext'

function Form() {
   const {dispatch,clear,users}  = useContext(githubContext)
   const {alert , setAlert} = useContext(alertContext)

   const [searchText,setText] = useState('')

  const handleInput = (e)=>{
    setText(e.target.value)
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
     if(searchText==='') return setAlert('Type something to search')
    dispatch({type:'LOADING_STATE'})
   const data=  await fetchUsers(searchText)
   dispatch({type:'GET_USERS' , payload:data})
   setText('')
  }
  const handleClear = (e)=>{
    dispatch({type:'CLEAR_USERS'})
  }
  
  return (
   
      <div className="form" onSubmit={handleSubmit}>
      { alert && <Alert/>}
           <form action="">
                <input
                 type="text"
                  placeholder='Enter your search text ....'
                  onChange={handleInput}
                  value={searchText}
                   />
                <button type='submit'>Go</button>
           </form>
           {(clear && users.length>0) && <button type='button' className='clear' onClick={handleClear}>Clear All</button> } 
           {/* {true && <button type='button' className='clear' onClick={handleClear}>Clear All</button> }  */}
      </div>
  )
}

export default Form