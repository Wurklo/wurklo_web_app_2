import React from 'react'
import { Container, Row } from 'reactstrap'
import MessageCard from '../../components/MessageCard'

function Messages() {
    return (
        <Container >
            <Row className='mx-1'>
                <MessageCard />
                <MessageCard />
                <MessageCard />
                <MessageCard />
                <MessageCard />
                <MessageCard />
            </Row>
        </Container>
    )
}

export default Messages