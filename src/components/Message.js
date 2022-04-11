import moment from 'moment';
import React, { forwardRef } from 'react'

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;

  return (
    <div className={'d-flex ' + (isUser ? 'justify-content-start' : 'justify-content-end')}>
      <div ref={ref} className={'p-2 text-white m-2 ' + (isUser ? 'message__isUser bg-primary shadow-sm' : 'message__isNotUser bg-secondary shadow-sm')}>{message?.username}: {message?.message} 
      <div className='message__time'>
        {moment(message?.timestamp?.seconds * 1000).format('MMMM Do YYYY, h:mm:ss a')}
      </div>
      </div>
    </div>

  )
})

export default Message