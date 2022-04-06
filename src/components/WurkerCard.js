import React, { useState } from 'react'
import { Col } from 'reactstrap'
import { useNavigate } from "react-router-dom";

function WurkerCard() {
    const navigate = useNavigate();
    const [user, setUser] = useState("Bobby");

    const openProfile = () =>{
        navigate(`/profile/${user}`)
    }
    return (
        <Col className='mt-4 d-flex justify-content-center'>
            <div className='wurkerCard shadow' onClick={openProfile}>
                <img src="https://lh3.googleusercontent.com/a-/AOh14GgdkLuhZwHKkewS9UZN-0fI4DD1LdywsKJiig-LMw=s288-p-rw-no" className="shadow" alt="Profile Pic" />
                <div className='wurkerCard__wurkerInfo'>
                    <h5 className='wurkerCard__text text-white'>Bobby Keel</h5>
                    <p className='wurkerCard__text text-white'>Plumber</p>
                </div>
            </div>
        </Col>
    )
}

export default WurkerCard