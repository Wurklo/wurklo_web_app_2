import React, { useEffect, useState } from 'react'
import { Container, Row } from 'reactstrap'
import ChatBox from '../../components/ChatBox';
import ProfileInfo from '../../components/ProfileInfo';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Profile() {
    let { id } = useParams();
    const [wurkerProfile, setWurkerProfile] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        db.collection('wurkers').doc(id).onSnapshot(doc => {
            setWurkerProfile(
                doc.data()
            );
        })
    }, []);

    return (
        <Container className='profile mt-3 text-center text-md-start'>
            <div className='text-start' onClick={() => console.log("working")}>
                <ArrowBackIcon className='mb-3 fs-1 text-secondary' />
            </div>
            <Row>
                <ProfileInfo
                    name={wurkerProfile.name}
                    skill={wurkerProfile.skill}
                    imageUrl={wurkerProfile.imageUrl}
                    availability={wurkerProfile.availability}
                    phone={wurkerProfile.phone}
                    email={wurkerProfile.email}
                    portfolioLink={wurkerProfile.portfolioLink}
                />
            </Row>
            <Row className='text-start'>
                <ChatBox />
            </Row>
        </Container>
    )
}

export default Profile