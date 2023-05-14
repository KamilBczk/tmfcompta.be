import React from 'react'

import MessengerIcon from '../ressource/messenger-icon.svg'


function ChatWidget() {
  return (
    <a href="https://kamilbiczyk.be" target='_blank'>
      <div className='widget'>
        <img src={MessengerIcon} alt="" />
      </div>
    </a>
  )
}

export default ChatWidget