import React from 'react'
import './Form.css'
import ClearBtn from './ClearBtn'
import {useContext,useState} from 'react'
import { githubContext } from '../../context/githubContext'
import {fetchUsers} from '../../reducer/actions/action'
function Form() {
    const {dispatch,clear}  = useContext(githubContext)
   const [searchText,setText] = useState('')

  const handleInput = (e)=>{
    setText(e.target.value)
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(searchText==='') return alert('Type something ..')
    dispatch({type:'LOADING_STATE'})
   const data=  await fetchUsers(searchText)
   dispatch({type:'GET_USERS' , payload:data})
  }
  const handleClear = (e)=>{
    dispatch({type:'CLEAR_USERS'})
  }
  
  return (
   
      <div className="form" onSubmit={handleSubmit}>
           <form action="">
                <input
                 type="text"
                  placeholder='Enter your search text ....'
                  onChange={handleInput}
                   />
                <button type='submit'>Go</button>
           </form>
           {true && <button type='button' className='clear' onClick={handleClear}>Clear All</button> } 
      </div>
  )
}

export default Form