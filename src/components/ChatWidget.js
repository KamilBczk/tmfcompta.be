import React from 'react'

import MessengerIcon from '../ressource/messenger-icon.svg'


function ChatWidget() {
  return (
    <a href="http://m.me/100089820520694" target='_blank'>
      <div className='widget'>
        <img src={MessengerIcon} alt="" />
      </div>
    </a>
  )
}

export default ChatWidget