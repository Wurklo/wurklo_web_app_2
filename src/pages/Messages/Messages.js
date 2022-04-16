import { ChatSharp } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'reactstrap'
import MessageCard from '../../components/MessageCard'


function Messages() {
    const [chats, setChats] = useState([
        {
            id: 1,
            displayName: "Bobby Keel",
            message: "I would like for you to help me fix my sink. When are you available?",
            photoURL: "https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/profilePic.webp?alt=media&token=f0f6e321-e5b7-4825-8c34-c90d39ad800d"
        },
    ])
    // fetch chats from firestore
    useEffect(() => {

    }, [])
    console.log(chats)

    return (
        <Container >
            <Row className='mx-1'>
                {
                    chats.map((chat) => (
                        <MessageCard 
                            imageUrl={chat.photoURL}
                            displayName={chat.displayName}
                            message={chat.message}
                        />
                    ))
                }
            </Row>
        </Container>
    )
}

export default Messages