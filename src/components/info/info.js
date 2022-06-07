import React from 'react'
import Photo from '../service'
import iconFollowers from '../../icons/icon-followers.png'
import iconFollowings from '../../icons/icon-followings.png'

import './info.css'

const Info = () => {
  const userName = 'vpolazau'
  const followers = '65.8k'
  const followings = '171'
    
    return <div className='info-panel flex-body-item'>
      <div className='div-photo'>
        <img src={Photo} className='photo'/>
      </div>
      {/* <div className='info-info'> */}
      <span className='name'>Victor Polozov</span>
      <a href={`https://github.com/${userName}`} className='user-name' >{userName}</a>
      <div className='follow'>
        <img src={iconFollowers} className='flex-follow-item icon-followers' />
        <span className='flex-follow-item followers'>{followers} followers</span>
        <img src={iconFollowings} className='flex-follow-item icon-followings' />
        <span className='flex-follow-item followings'>{followings} following</span>
        {/* </div> */}
      </div>
    </div>
}

export default Info