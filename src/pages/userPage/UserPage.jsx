
import React from 'react'
import {useParams} from 'react-router-dom'
import {getUser } from '../../reducer/actions/action'
import {useEffect} from 'react'
import {useContext} from 'react'
import {githubContext } from '../../context/githubContext'
 import Loading from '../../components/loading/Loading'
 import User from '../../components/user/User'
 import './UserPage.css'
 import { FaUsers ,FaUserFriends,FaGithub,FaMapMarkerAlt,FaWordpressSimple,FaDiagnoses,FaRegClone,FaRegCalendar} from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
function UserPage() {
  const {username} = useParams()
   const navigate = useNavigate()
  const {dispatch , user} = useContext(githubContext)
  useEffect(async () => {
     const data =await  getUser(username)
     dispatch({type:'GET_USER',payload:data})

     return ()=>{
       dispatch({type:'CLEAR_USER'})
     }
  }, [])
  if(!user) <Loading/>

  const {
    avatar_url,
    login,
    hireable,
    followers,
    bio,
    following,
    location,
    name,
    html_url,
    id,
    blog,
    company,
    public_gists,
    public_repos
  } = user;

  return (
    <div className='user-page'>
      <div className='inner-user'>
      <div className='flex'>
          <User user={{login : login?login:'User Name'}}/>
          <div className='inner-flex'>
               <div className='flex flex-row'>
                 <div className='card'>
                   {name? name :'User Name'}
                 </div>
                 <div className='card'>
                     id : {id}
                 </div>
               </div>
               <div className='flex flex-row'>
                 <div className='card'>
                 <FaUsers/>  followers : {followers}
                 </div>
                 <div className='card'>
                   <FaUserFriends/>  following :{following}
                 </div>
               </div>
                <div className='view-github card' onClick={()=>{
               window.open(`${html_url}`, '_blank');
                }}>
                  <FaGithub/>  View on Github
                </div>
          </div>
       </div>
       <div className='flex bio card'>
         {bio ? bio: ' No bio available for this user'}
      </div>
      <div className='flex flex-row location-info'>
         <div className="card">
           <FaMapMarkerAlt/>{location}
         </div>
         <div className="card">
         <FaWordpressSimple/>  {blog? blog :' No Blog'  }
         </div>
         <div className="card">
         <FaDiagnoses/> {company ? company:'No Company'}
         </div>

      </div>
      <div className='flex flex-row about-repos'>
      <div className="card ">
         <FaRegClone/>  publicRepos : {public_repos}
         </div>
         <div className="card">
         <FaRegCalendar/>  publicGists : {public_gists}
         </div>
         <div className="card hire">
           Hire !
         </div>
      </div>
      </div>
    </div>
  )
}

export default UserPage