import React, { useEffect, useState } from 'react'
import { Button, Col, Input } from 'reactstrap'
import Message from './Message'

function ChatBox() {
    const [messages, setMessages] = useState([
        {username: 'Bobby', text: 'Hey Guys!'},
        {username: 'Nikki', text: 'Hey Ladies!'}
    ]);
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {

    }, [])

    useEffect(() => {
        // setUsername(prompt('Please enter you name'))
    }, [])

    const handleSendMessage = () => {
        console.log(message)
    }

    return (
        <>
            <Col className='chatBox mt-4'>
                <Input
                    className='profile__messageInput mt-3 p-3 shadow'
                    placeholder='Send a message ...'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <Button color='primary' outline className='chatBox__button' onClick={handleSendMessage}>Send</Button>
                <div className='profile__messageBox mb-5 rounded-bottom shadow'>
                    <Message />
                </div>
            </Col>
        </>
    )
}

export default ChatBox