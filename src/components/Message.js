import moment from 'moment';
import React, { forwardRef } from 'react'

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={'p-2 text-white mb-2 ' + (isUser ? 'message__isUser bg-primary' : 'message__isNotUser bg-secondary text-black')}>{message.username}: {message.message} {moment(message.timestamp.seconds * 1000).format('MMMM Do YYYY, h:mm:ss a')}</div>
  )
})

export default Message