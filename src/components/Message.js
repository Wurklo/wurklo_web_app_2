import React from 'react'

function Message({username, message}) {
  const isUser = username === message.username;
  console.log("username:", username)
  console.log("message username:", message.username)
  console.log("user:", isUser)

  return (
    <div className={'p-3 text-white ' + (isUser ? 'message__isUser bg-primary' : 'message__isNotUser bg-secondary text-black')}>{message.username}: {message.message}</div>
  )
}

export default Message