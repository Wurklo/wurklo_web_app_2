import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Input } from 'reactstrap'
import Message from './Message'
import SendIcon from '@mui/icons-material/Send';
import { db } from '../firebase';
import firebase from 'firebase'

function ChatBox() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        db.collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    useEffect(() => {
        setUsername(prompt('Please enter you name'))
    }, [])

    const handleSendMessage = (e) => {
        e.preventDefault();
        db.collection('messages').add({
            message: message,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMessage('')
    }

    return (
        <>
            <Col className='chatBox mt-4'>
                <Form>
                    <Input
                        className='profile__messageInput mt-3 p-3 shadow'
                        placeholder='Send a message ...'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <Button type='submit' color='primary' outline className='chatBox__button border-0 bg-white' onClick={handleSendMessage} disabled={!message && "disabled"}><SendIcon className='fs-2' /></Button>
                </Form>

                <div className='profile__messageBox mb-5 rounded-bottom bg-white shadow'>
                    {messages?.map(message => (
                        <Message username={username} message={message} />
                    ))}
                </div>
            </Col>
        </>
    )
}

export default ChatBox