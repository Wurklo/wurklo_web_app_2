import React, { useState } from 'react'
import { Col, Container, Input, Row } from 'reactstrap'
import Message from '../../components/Message';

function Profile() {
    const [message, setMessage] = useState('');

    return (
        <Container className='profile'>
            <Row>
                <Col lg={3} className="profile__image">
                    <img src="https://lh3.googleusercontent.com/a-/AOh14GgdkLuhZwHKkewS9UZN-0fI4DD1LdywsKJiig-LMw=s288-p-rw-no" className="shadow" alt="Profile Pic" />
                </Col>
                <Col>
                    <h3>Bobby Keel</h3>
                    <p>Plumber</p>
                    <p>$25/hr</p>
                    <p>P# 555-555-5555</p>
                    <p>E# bobbykeel@gmail.com</p>
                    <p>Reviews</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Input
                        className='mt-5'
                        placeholder='Send a message ...'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <div className='profile__messageBox mb-5 rounded-bottom'>
                        <Message />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile