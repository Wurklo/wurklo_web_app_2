import React, { useState } from 'react';
import { Button, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Progress } from 'reactstrap';
import { storage, db } from "../firebase";
import firebase from 'firebase';

function CreateWurker() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [skill, setSkill] = useState('');
    const [rate, setRate] = useState('');
    const [yearsOfExp, setYearsOfExp] = useState('');
    const [highestEdu, setHighestEdu] = useState('');
    const [certsLicenses, setCertsLicenses] = useState('');
    const [availability, setAvailability] = useState('');
    const [phone, setPhone] = useState('');
    const [portfolioLink, setPortfolioLink] = useState('');
    const [references, setReferences] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImageFile(e.target.files[0])
        }
    };

    const handleCreateWurker = () => {
        const uploadTask = storage.ref(`images/${imageFile.name}`).put(imageFile);
        // progress bar function
        uploadTask.on(
            "state-changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            // storing in db
            () => {
                storage
                    .ref("images")
                    .child(imageFile.name)
                    .getDownloadURL()
                    .then(url => {
                        // post image in db
                        db.collection("wurkers").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            name: name.toLowerCase(),
                            email: email.toLowerCase(),
                            skill: skill.toLowerCase(),
                            rate: rate.toLowerCase(),
                            yearsOfExp: yearsOfExp.toLowerCase(),
                            highestEdu: highestEdu.toLowerCase(),
                            certsLicenses: certsLicenses.toLowerCase(),
                            availability: availability.toLowerCase(),
                            phone: phone.toLowerCase(),
                            portfolioLink: portfolioLink.toLowerCase(),
                            references: references.toLowerCase(),
                            imageUrl: url
                        });
                        setProgress(0);
                        setName('')
                        setEmail('')
                        setSkill('')
                        setRate('')
                        setYearsOfExp('')
                        setHighestEdu('')
                        setCertsLicenses('')
                        setAvailability('')
                        setPhone('')
                        setPortfolioLink('')
                        setReferences('')
                        setImageFile(null)
                        setIsModalOpen(false)
                    })
            }
        )
    };

    return (
        <>
            <Button
                color='primary'
                className='createWurker__button bg-white'
                outline
                onClick={() => setIsModalOpen(isModalOpen ? false : true)}
            >
                Create Wurker Profile
            </Button>
            <Modal
                className='createWurker__modal'
                fullscreen="md"
                scrollable
                size="lg"
                isOpen={isModalOpen}
                toggle={() => setIsModalOpen(isModalOpen ? false : true)}
            >
                <ModalHeader className='p-2 ms-2 ms-lg-0 p-lg-3' toggle={() => setIsModalOpen(false)}>
                    <h3 className='text-secondary m-0'><strong>Create Wurker Profile</strong></h3>
                </ModalHeader>
                <ModalBody className=' pt-0'>
                    <Col className="createWurker text-center mt-0 mx-auto">
                        <Input
                            className='search__input shadow-none mt-4'
                            placeholder="Name ..."
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <Input
                            className='search__input shadow-none mt-4'
                            placeholder="Email ..."
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Input
                            className='search__input shadow-none mt-4'
                            placeholder="Skill or service ..."
                            value={skill}
                            onChange={e => setSkill(e.target.value)}
                        />
                        <Input
                            className='search__input shadow-none mt-4'
                            placeholder="Rate ..."
                            value={rate}
                            onChange={e => setRate(e.target.value)}
                        />
                        <Input
                            className='search__input shadow-none mt-4'
                            placeholder="Years of experience ..."
                            value={yearsOfExp}
                            onChange={e => setYearsOfExp(e.target.value)}
                        />
                        <Input
                            className='search__input shadow-none mt-4'
                            placeholder="Highest education ..."
                            value={highestEdu}
                            onChange={e => setHighestEdu(e.target.value)}
                        />
                        <Input
                            className='search__input shadow-none mt-4'
                            placeholder="Certifications/Licenses ..."
                            value={certsLicenses}
                            onChange={e => setCertsLicenses(e.target.value)}
                        />
                        <Input
                            className='search__input shadow-none mt-4'
                            placeholder="Availability ex. 24/7, 8-5pm M-F, etc ..."
                            value={availability}
                            onChange={e => setAvailability(e.target.value)}
                        />
                        <Input
                            className='search__input shadow-none mt-4'
                            placeholder="Phone # ex. +1-555-555-5555 ..."
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                        <Input
                            className='search__input shadow-none mt-4'
                            placeholder="Portfolio Link ..."
                            value={portfolioLink}
                            onChange={e => setPortfolioLink(e.target.value)}
                        />
                        <Input
                            className='search__input shadow-none mt-4'
                            placeholder="References ..."
                            value={references}
                            onChange={e => setReferences(e.target.value)}
                        />
                        <Input
                            className='search__input shadow-none mt-4'
                            placeholder="Portfolio Link ..."
                            onChange={handleChange}
                            type="file"
                        />
                    </Col>
                </ModalBody>
                <ModalFooter className='d-inline py-1 text-center'>
                    <Progress value={progress} className='mx-auto mb-0' /><br />
                    <Button
                        outline
                        color='primary'
                        onClick={handleCreateWurker}
                        className='createWurker__button p-2 px-4 mt-0'
                    >
                        Create Wurker
                    </Button>
                    <Button outline className='createWurker__button p-2 mt-0' onClick={() => setIsModalOpen(false)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default CreateWurker