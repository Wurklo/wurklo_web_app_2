import React from 'react'
import { Col } from 'reactstrap'
import { useNavigate } from "react-router-dom";

function MessageCard() {
    const navigate = useNavigate();

    return (
        <Col xs={12} md={5} className='messageCard p-0 my-2 mx-md-auto bg-white' onClick={() => navigate('/profile/:id')}>
            <img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/profilePic.webp?alt=media&token=f0f6e321-e5b7-4825-8c34-c90d39ad800d" className="me-3 shadow" alt="Profile Pic" />
            <div className='messageCard__info me-2 pt-1'>
                <h3>Bobby Keel</h3>
                <p>I would like for you to help me fix my sink. When are you available?</p>
            </div>
        </Col>
    )
}

export default MessageCard