import React from 'react'
import { Container, Row } from 'reactstrap'
import ChatBox from '../../components/ChatBox';
import ProfileInfo from '../../components/ProfileInfo';

function Profile() {

    return (
        <Container className='profile mt-3 text-center text-md-start'>
            <Row>
                <ProfileInfo />
            </Row>
            <Row className='text-start'>
                <ChatBox />
            </Row>
        </Container>
    )
}

export default Profile