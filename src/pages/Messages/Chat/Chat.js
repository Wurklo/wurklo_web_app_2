import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Input } from 'reactstrap'
import Message from '../../../components/Message'
import SendIcon from '@mui/icons-material/Send';
import { db } from '../../../firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, useNavigate } from 'react-router-dom';

function Chat() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // redux
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        db
            .collection('chats')
            .where('messages', 'array-contains', [`${user?.uid}`])
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
            })
    }, [])

    const handleSendMessage = (e) => {
        e.preventDefault();
        db
            .collection('chats')
            .doc(`${user?.uid}`)
            .collection('messages')
            .add({
                senderUid: user?.uid,
                message: message,
                senderName: user?.displayName,
                photoURL: user?.photoURL,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then((docRef) => {
                console.log("docRef", docRef.id)
            })
        setMessage('')
    }

    return (
        <>
            <Col>
                <ArrowBackIcon className='profile__backButton fs-1' onClick={() => navigate(-1)} />
            </Col>
            <Col className='chatBox mt-4'>
                <Form>
                    <Input
                        className='profile__messageInput mt-3 p-3 shadow-none'
                        placeholder='Send a message ...'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <Button type='submit' color='primary' outline className='chatBox__button border-0 bg-white' onClick={handleSendMessage} disabled={!message && "disabled"}><SendIcon className='fs-2' /></Button>
                </Form>

                <div className='profile__messageBox mb-5 rounded-bottom bg-white'>
                    <FlipMove>
                        {messages?.map(({ id, message }) => (
                            <Message key={id} message={message} />
                        ))}
                    </FlipMove>
                </div>
            </Col>
        </>
    )
}

export default Chat