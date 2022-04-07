import React from 'react'
import { Col } from 'reactstrap'
import { useNavigate } from "react-router-dom";

function WurkerCard({ uid, name, skill, imageUrl }) {
    const navigate = useNavigate();

    const openProfile = () => {
        navigate(`/profile/${uid}`)
    }
    return (
        <Col className='mb-4 d-flex justify-content-center'>
            <div className='wurkerCard shadow' onClick={openProfile}>
                <img src={imageUrl} className="shadow" alt="Profile Pic" />
                <div className='wurkerCard__wurkerInfo'>
                    <h5 className='wurkerCard__text text-white'>{name}</h5>
                    <p className='wurkerCard__text text-white'>{skill}</p>
                </div>
            </div>
        </Col>
    )
}

export default WurkerCard