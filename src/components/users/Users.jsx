import React from 'react'
import User from '../user/User'
import Loading from '../loading/Loading'
import { useContext,useEffect} from 'react'
import { githubContext } from '../../context/githubContext'
import './Users.css'

function Users() {
  const {users,fetchUsers} = useContext(githubContext)
  useEffect(() => {
    fetchUsers()
  }, [])
 
   if(users.length ===0) return  <Loading/>
  return (
    <div className='users-container'>
      { users.map(user=> <User key={user.id} user={user} />)} 
    </div>
  )
}

export default Users