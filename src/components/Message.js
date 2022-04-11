import React, { forwardRef } from 'react'

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;
  console.log("username:", username)
  console.log("message username:", message.username)
  console.log("user:", isUser)

  return (
    <div ref={ref} className={'p-2 text-white mb-2 ' + (isUser ? 'message__isUser bg-primary' : 'message__isNotUser bg-secondary text-black')}>{message.username}: {message.message}</div>
  )
})

export default Message