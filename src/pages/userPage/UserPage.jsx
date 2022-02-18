
import React from 'react'
import {useParams} from 'react-router-dom'
import {getUser } from '../../reducer/actions/action'
import {useEffect} from 'react'
import {useContext} from 'react'
import {githubContext } from '../../context/githubContext'
 
function UserPage() {
  const {username} = useParams()
   
  const {dispatch} = useContext(githubContext)

  useEffect(async () => {
     const data =await  getUser(username)
     dispatch({type:'GET_USER',payload:data})
  }, [])
  return (
    <div>
      Helllo i am greeting yu
    </div>
  )
}

export default UserPage