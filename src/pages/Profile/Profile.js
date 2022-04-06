import React, { useState } from 'react'
import { Col, Container, Input, Row } from 'reactstrap'
import Message from '../../components/Message';

function Profile() {
    const [message, setMessage] = useState('');

    return (
        <Container className='profile mt-3 text-center text-md-start'>
            <Row>
                <Col lg={3} className="profile__image">
                    <img src="https://lh3.googleusercontent.com/a-/AOh14GgdkLuhZwHKkewS9UZN-0fI4DD1LdywsKJiig-LMw=s288-p-rw-no" className="shadow" alt="Profile Pic" />
                </Col>
                <Col className='mt-4 mt-md-2'>
                    <h3>Bobby Keel</h3>
                    <p>Plumber</p>
                    <p>$25/hr</p>
                    <p>Available 24/7</p>
                    <p>P# 555-555-5555</p>
                    <p>E# bobbykeel@gmail.com</p>
                    <p>Reviews</p>
                </Col>
            </Row>
            <Row className='text-start'>
                <Col>
                    <Input
                        className='mt-3 shadow'
                        placeholder='Send a message ...'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <div className='profile__messageBox mb-5 rounded-bottom shadow'>
                        <Message />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile