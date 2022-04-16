import React from 'react'
import { Col } from 'reactstrap'
import { useNavigate } from "react-router-dom";

function MessageCard({displayName, message, imageUrl}) {
    const navigate = useNavigate();

    return (
        <Col xs={12} md={5} className='messageCard p-0 my-2 mx-md-auto bg-white' onClick={() => navigate('/chat')}>
            <img src={imageUrl} className="me-3" alt="Profile Pic" />
            <div className='messageCard__info me-2 pt-1'>
                <h3>{displayName}</h3>
                <p>{message}</p>
            </div>
        </Col>
    )
}

export default MessageCard