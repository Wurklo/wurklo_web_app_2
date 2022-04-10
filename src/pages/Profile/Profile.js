import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'reactstrap'
import ChatBox from '../../components/ChatBox';
import ProfileInfo from '../../components/ProfileInfo';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Profile() {
    let { id } = useParams();
    const [wurkerProfile, setWurkerProfile] = useState({});
    const [hire, setHire] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        db.collection('wurkers').doc(id).onSnapshot(doc => {
            setWurkerProfile(
                doc.data()
            );
        })
        window.scrollTo(0,0)
    }, []);

    return (
        <Container className='profile mt-3 text-center text-md-start'>
            <div className='profile__backButton text-start mb-2' onClick={() => navigate(-1)}>
                <ArrowBackIcon className='mb-3 fs-1 text-secondary' />
            </div>
            <Row>
                <ProfileInfo
                    name={wurkerProfile.name}
                    skill={wurkerProfile.skill}
                    rate={wurkerProfile.rate}
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
            {hire ?
                <Button outline className='' onClick={() => setHire(false)}>Complete</Button>
                :
                <Button outline className='' onClick={() => setHire(true)}>Hire</Button>
            }
        </Container>
    )
}

export default Profile