import React from 'react'
import "./Teamcard.css"
import { Members } from '../../dummyuser'

const Teamcard = () => {
  return (
    <div className='member-cards'>
      {Members.map(item => (
        
      <div class="card">
  <img class="profile-pic" src={item.profilePicture}></img>
  <div class="member-name">{item.username}</div>
          <div class="member-position">{ item.position}</div>
</div>
      ))}

    </div>
  )
}

export default Teamcard