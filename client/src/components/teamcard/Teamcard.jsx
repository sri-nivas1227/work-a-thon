import React from 'react'
import "./Teamcard.css"
import { Members } from '../../dummyuser'
import { useNavigate } from 'react-router-dom';


const Teamcard = () => {
  const navigate = useNavigate();
  const navigateTo = (ind) => navigate('/users/' + ind);

  return (
    <div className='member-cards'>
      {Members.map((item, ind) => (
        <div onClick={() => navigate('/users/' + (ind + 1))} class="card">
          <img class="profile-pic" src={item.profilePicture}></img>
          <div class="member-name">{item.username}</div>
          <div class="member-position">{item.position}</div>
        </div>

      ))}

    </div>
  )
}

export default Teamcard