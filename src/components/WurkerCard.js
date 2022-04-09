import React from 'react'
import { Col } from 'reactstrap'
import { useNavigate } from "react-router-dom";

function WurkerCard({ id, name, skill, imageUrl }) {
    const navigate = useNavigate();

    const openProfile = () => {
        navigate(`/profile/${id}`)
    }
    return (
        <Col className='mb-4 d-flex justify-content-center'>
            <div className='wurkerCard shadow' onClick={openProfile}>
                <img src={imageUrl} className="shadow" alt="Profile Pic" />
                <div className='wurkerCard__wurkerInfo'>
                    <h5 className='wurkerCard__text text-white'>{name?.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</h5>
                    <p className='wurkerCard__text text-white'>{skill?.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</p>
                </div>
            </div>
        </Col>
    )
}

export default WurkerCard