import React, { useState } from 'react'
import { Col, Input } from 'reactstrap'
import Message from './Message'

function ChatBox() {
    const [message, setMessage] = useState('');

    return (
        <>
            <Col className='mt-4'>
                <Input
                    className='mt-3 p-3 shadow'
                    placeholder='Send a message ...'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <div className='profile__messageBox mb-5 rounded-bottom shadow'>
                    <Message />
                </div>
            </Col>
        </>
    )
}

export default ChatBox