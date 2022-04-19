import React from 'react'
import { Col } from 'reactstrap'
import { useNavigate } from "react-router-dom";

function WurkerCard({ id, wurker }) {
    const navigate = useNavigate();

    const openProfile = () => {
        navigate(`/profile/${id}`)
    }
    console.log(id)
    console.log(wurker)
    return (
        <Col className='mb-4 d-flex justify-content-center'>
            <div className='wurkerCard' onClick={openProfile}>
                <img src={wurker?.photoURL} className="" alt="Profile Pic" />
                <div className='wurkerCard__wurkerInfo'>
                    <h5 className='wurkerCard__text text-white'>{wurker?.displayName?.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</h5>
                    <p className='wurkerCard__text text-white'>{wurker?.skill?.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</p>
                </div>
            </div>
        </Col>
    )
}

export default WurkerCard