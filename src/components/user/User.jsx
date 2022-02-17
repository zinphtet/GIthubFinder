import React from 'react'
import './User.css'
import {useNavigate} from 'react-router-dom'
import { VscGithubInverted} from "react-icons/vsc";

function User({user:{avatar_url,login,url}}) {
  const navigate = useNavigate()
  return (
    <div className='user-container' onClick={()=> navigate('/userName')}>
        {/* <div className='img'>
            <img src={avatar_url} alt="github profile" />
        </div> */}
        <VscGithubInverted className='github-icon'/>
        <h6 className='username'>{login}</h6>
    </div>
  )
}

export default User