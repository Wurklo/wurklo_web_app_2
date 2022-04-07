import React, { useState } from 'react'
import { Col } from 'reactstrap'
import { useNavigate } from "react-router-dom";

function WurkerCard() {
    const navigate = useNavigate();
    const [user] = useState("Bobby");

    const openProfile = () =>{
        navigate(`/profile/${user}`)
    }
    return (
        <Col className='mb-4 d-flex justify-content-center'>
            <div className='wurkerCard shadow' onClick={openProfile}>
                <img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/profilePic.webp?alt=media&token=f0f6e321-e5b7-4825-8c34-c90d39ad800d" className="shadow" alt="Profile Pic" />
                <div className='wurkerCard__wurkerInfo'>
                    <h5 className='wurkerCard__text text-white'>Bobby Keel</h5>
                    <p className='wurkerCard__text text-white'>Plumber</p>
                </div>
            </div>
        </Col>
    )
}

export default WurkerCard