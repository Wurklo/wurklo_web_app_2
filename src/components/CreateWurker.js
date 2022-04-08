import React, { useState } from 'react';
import { Button, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Progress } from 'reactstrap';
import { storage, db } from "../firebase";
import firebase from 'firebase';

function CreateWurker() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [skill, setSkill] = useState('');
    const [yearsOfExp, setYearsOfExp] = useState('');
    const [highestEdu, setHighestEdu] = useState('');
    const [certsLicenses, setCertsLicenses] = useState('');
    const [references, setReferences] = useState('');
    const [availability, setAvailability] = useState('');
    const [phone, setPhone] = useState('');
    const [portfolioLink, setPortfolioLink] = useState('');
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
                            name: name,
                            email: email,
                            skill: skill,
                            yearsOfExp: yearsOfExp,
                            highestEdu: highestEdu,
                            certsLicenses: certsLicenses,
                            availability: availability,
                            phone: phone,
                            portfolioLink: portfolioLink,
                            references: references,
                            imageUrl: url
                        });
                        setProgress(0);
                        setName('')
                        setEmail('')
                        setSkill('')
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
            className='createWurker__button shadow'
                outline
                onClick={() => setIsModalOpen(isModalOpen ? false : "isOpenCheckout")}
            >
                Create Wurker Profile
            </Button>
            <Modal
                fullscreen="md"
                scrollable
                size="lg"
                isOpen={isModalOpen}
                toggle={() => setIsModalOpen(isModalOpen ? false : "isOpenCheckout")}
            >
                <ModalHeader className='p-2 ms-2 ms-lg-0 p-lg-3' toggle={() => setIsModalOpen(false)}>
                    <h3 className='text-primary m-0'><strong>Create a wurker</strong></h3>
                </ModalHeader>
                <ModalBody className=' pt-0'>
                    <Col className="createWurker text-center mt-0 mx-auto">
                        <Input
                            className='search__input shadow mt-4'
                            placeholder="Name ..."
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <Input
                            className='search__input shadow mt-4'
                            placeholder="Email ..."
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Input
                            className='search__input shadow mt-4'
                            placeholder="Skill or service ..."
                            value={skill}
                            onChange={e => setSkill(e.target.value)}
                        />
                        <Input
                            className='search__input shadow mt-4'
                            placeholder="Years of experience ..."
                            value={yearsOfExp}
                            onChange={e => setYearsOfExp(e.target.value)}
                        />
                        <Input
                            className='search__input shadow mt-4'
                            placeholder="Highest education ..."
                            value={highestEdu}
                            onChange={e => setHighestEdu(e.target.value)}
                        />
                        <Input
                            className='search__input shadow mt-4'
                            placeholder="Certifications/Licenses ..."
                            value={certsLicenses}
                            onChange={e => setCertsLicenses(e.target.value)}
                        />
                        <Input
                            className='search__input shadow mt-4'
                            placeholder="Availability ex. 24/7, 8-5pm M-F, etc ..."
                            value={availability}
                            onChange={e => setAvailability(e.target.value)}
                        />
                        <Input
                            className='search__input shadow mt-4'
                            placeholder="Phone # ex. +1-555-555-5555 ..."
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                        <Input
                            className='search__input shadow mt-4'
                            placeholder="Portfolio Link ..."
                            value={portfolioLink}
                            onChange={e => setPortfolioLink(e.target.value)}
                        />
                        <Input
                            className='search__input shadow mt-4'
                            placeholder="References ..."
                            value={references}
                            onChange={e => setReferences(e.target.value)}
                        />
                        <Input
                            className='search__input shadow mt-4'
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
                        className='createWurker__button p-2 px-4 mt-0 shadow'
                    >
                        Create Wurker
                    </Button>
                    <Button outline className='createWurker__button p-2 mt-0 shadow' onClick={() => setIsModalOpen(false)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default CreateWurker