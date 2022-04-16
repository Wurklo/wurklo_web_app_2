import React, { useEffect, useState } from 'react'
import { Col } from 'reactstrap'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import getMatchedUserInfo from '../lib/getMatchedUserInfo';

function MessageCard({chatDetails}) {
    const navigate = useNavigate();
    const [matchedUserInfo, setMatchedUserInfo] = useState();

    // redux
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    console.log(user?.uid)
    // remove logginUser data from chatDetails
    useEffect(() => {
        setMatchedUserInfo(getMatchedUserInfo(chatDetails?.users, user?.uid))
    }, [chatDetails, user])
    console.log("users:", chatDetails)
    console.log("matched:",matchedUserInfo)

    return (
        <Col xs={12} md={5} className='messageCard p-0 my-2 mx-md-auto bg-white' onClick={() => navigate('/chat', {state: {chatDetails}})}>
            <img src={matchedUserInfo?.imageUrl} className="me-3" alt="Profile Pic" />
            <div className='messageCard__info me-2 pt-1'>
                <h3>{matchedUserInfo?.name?.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</h3>
                <p>Hey there</p>
            </div>
        </Col>
    )
}

export default MessageCard