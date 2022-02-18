import React from 'react'
import User from '../user/User'
import Loading from '../loading/Loading'
import { useContext} from 'react'
import { githubContext } from '../../context/githubContext'
import './Users.css'
import NoResult from '../noResult/NoResult'
function Users() {
   const {users,loading,noresult} = useContext(githubContext)
   console.log(users)
  if(loading) return  <Loading/>
  if(!loading && !users.length && !noresult ) return <NoResult/>
  return (
    <div className='users-container'>
      { users.map(user=> <User key={user.id} user={user} />)} 
    </div>
  )
}

export default Users