import { Container, Row, Col, Button, ModalHeader, Modal, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';
import '../App.css';
import Product from '../components/Product';
import physicalCoinImage from "../images/physical_coin.jpg"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../redux/StateProvider';
import { getBasketTotal } from '../redux/reducer';
import { useState } from 'react';
import CheckoutProduct from '../components/CheckoutProduct';
import coin from '../images/wurklo-coin';
import { auth, db } from '../firebase';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import axios from '../axios';
import Order from '../components/Order';
import moment from 'moment';



function StorePage() {
    // eslint-disable-next-line
    const [{ basket, user }, dispatch] = useStateValue();
    const [isOpenCheckout, setIsOpenCheckout] = useState(false);
    const [isOpenOrders, setIsOpenOrders] = useState(false);
    const [isOpenSignin, setIsOpenSignin] = useState(false);
    const [isOpenCryptoNotice, setIsOpenCryptoNotice] = useState(false);

    // select payment method crypto or credit/debit
    const [credit, setCredit] = useState(true);
    const [crypto, setCrypto] = useState(false);
    const [cryptoAddress, setCryptoAddress] = useState("");
    const [disabledCrypto, setDisabledCrypto] = useState(true);

    //shipping address and name
    const [name, setName] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [cityStateZip, setCityStateZip] = useState("");

    // orders pulled from db to data layer
    const [orders, setOrders] = useState([false]);

    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        } else {
            setOrders([])
        }

    }, [user])


    const emptyBasket = () => {
        // remove item from basket
        dispatch({
            type: 'EMPTY_BASKET'
        })
    }

    //user auth
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()

        // some fancy firebase login happens here
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth)
            })
            .catch(error => alert(error.message))
        setIsOpenSignin(false)
    }

    const register = e => {
        e.preventDefault();

        // some fancy firebase register happens here
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //successfully created new user
                console.log(auth);
                if (auth) {
                    console.log(auth)
                }
            })
            .catch(error => alert(error.message))
        setIsOpenSignin(false)
    }

    //stripe payment
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe expects the total in a currencies subunits 10 dollars is 10000 cents times by 100 to get usd subcurrency
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [!disabled])

    console.log('The secret is >>>', clientSecret)

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        } else {
            setIsOpenSignin(isOpenSignin ? false : "isOpenSignin")
        }
    }

    //crypto submit payment
    const handleSubmitCrypto = e => {
        console.log("crypto processing")
        e.preventDefault();
        setProcessing(true);

        db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(moment().unix() + " " + user?.uid)
            .set({
                name: name,
                streetAddress: streetAddress,
                cityStateZip: cityStateZip,
                basket: basket,
                amount: getBasketTotal(basket) * 100,
                cryptoAddress: cryptoAddress,
                created: moment().unix()
            })

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
            type: 'EMPTY_BASKET'
        })

        setIsOpenCheckout(false)
        setIsOpenOrders(true)
        setIsOpenCryptoNotice(true)
        emptyBasket()

        setStreetAddress("")
        setCityStateZip("")
        setName("")
    }

    //stripe submit payment processing
    const handleSubmitCredit = async (e) => {
        // do all the fancy stripe stuff
        console.log("credit processing")
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentintent = payment confirmation

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    name: name,
                    streetAddress: streetAddress,
                    cityStateZip: cityStateZip,
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            setIsOpenCheckout(false)
            setIsOpenOrders(true)
            emptyBasket()
        })
    }


    const handleChange = e => {
        // do all the fancy stripe stuff
        if (getBasketTotal(basket) * 100 === 0) {
            console.log("order total cannot be zero")
        } else if (getBasketTotal(basket) * 100 > 20001) {
            console.log("order total too high")
        } else {
            setDisabled(e.empty);
            setError(e.error ? e.error.message : '')
        }

    }

    const handleChangeCrypto = e => {
        if (getBasketTotal(basket) * 100 === 0) {
            console.log("order total cannot be zero")
        } else if (getBasketTotal(basket) * 100 > 20001) {
            console.log("order total too high")
        } else if (cryptoAddress.length <= 20) {
            setDisabledCrypto(true);
        } else {
            setDisabledCrypto(false);
        }
    }

    console.log(orders);
    return (
        <div className="store py-5">
            <Container className="pb-5 pt-4 px-md-5 text-center bg-white rounded">
                <Row>
                    <Col className='mt-4 ms-lg-5 d-flex-column align-items-center text-lg-start justify-content-center justify-content-lg-start'>
                        <h6 className='fs-5 text-black'>{user ? `${user.email}` : 'Hello Guest'}</h6>
                        <h6 onClick={() => setIsOpenOrders(isOpenOrders ? false : "isOpenOrders")} className='actionItem text-black fs-5'>Orders</h6>
                        <h6 onClick={handleAuthentication} className='actionItem text-primary fs-4'>{user ? 'Sign Out' : 'Sign In'}</h6>
                    </Col>
                    <Col lg={6} className='pe-lg-5 d-flex justify-content-center justify-content-lg-end'>
                        <h1 className='text-primary'>Wurklo Store</h1>
                    </Col>
                    <Col>
                    </Col>
                    <Col lg={1} className='ms-lg-5 align-self-center d-flex-column justify-content-center justify-content-lg-end'>
                        <div onClick={() => setIsOpenCheckout(isOpenCheckout ? false : "isOpenCheckout")} className='basket p-1'>
                            <ShoppingBasketIcon className='text-primary fs-1' /><strong className='basketQuantity text-primary fs-4'>{basket?.length}</strong>

                            <h6>${getBasketTotal(basket)}</h6>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row className="mt-4 pt-md-3 pb-lg-5 d-flex justify-content-around">
                    <Col md={4} className='cards mb-5 p-3 rounded'>
                        <Product
                            id="000001"
                            title="WURK Coin"
                            price={40}
                            image={physicalCoinImage}
                            buttonText="Add to basket"
                        />
                    </Col>
                </Row>

                {/* This modal for checkout */}
                <div className='d-flex'>
                    <Modal
                        fullscreen="md"
                        scrollable
                        size="lg"
                        isOpen={isOpenCheckout}
                        toggle={() => setIsOpenCheckout(isOpenCheckout ? false : "isOpenCheckout")}
                    >
                        <ModalHeader className='p-2 ms-2 ms-lg-0 p-lg-3' toggle={() => setIsOpenCheckout(false)}>
                            <h3 className='text-primary m-0'><strong>Payment Summary</strong></h3>
                        </ModalHeader>
                        <ModalBody>
                            <Container className='g-0'>
                                {basket.map(item => (
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                    />
                                ))}
                            </Container>
                        </ModalBody>
                        <ModalFooter className='d-inline py-1'>
                            <Form onSubmit={credit ? handleSubmitCredit : handleSubmitCrypto}>
                                <FormGroup className='formgroup'>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        placeholder="Enter full name"
                                        type="text"
                                        className='p-1'
                                    />
                                </FormGroup>
                                <FormGroup className='formgroup'>
                                    <Input
                                        id="streetAddress"
                                        name="streetAddress"
                                        value={streetAddress}
                                        onChange={e => setStreetAddress(e.target.value)}
                                        placeholder="Enter street address"
                                        type="text"
                                        className='p-1'
                                    />
                                </FormGroup>
                                <FormGroup className='formgroup'>
                                    <Input
                                        id="cityStateZip"
                                        name="cityStateZip"
                                        value={cityStateZip}
                                        onChange={e => setCityStateZip(e.target.value)}
                                        placeholder="Enter city, state, zip, province, etc ..."
                                        type="text"
                                        className='p-1'
                                    />
                                </FormGroup>
                                <Row className='my-0'>
                                    <Col>
                                        <h6 className={`paymentOption__button p-1 text-center text-white rounded${credit ? " bg-primary" : " bg-secondary"}`} onClick={() => setCredit(true)}>Credit/Debit</h6>
                                    </Col>
                                    <Col>
                                        <h6 className={`paymentOption__button p-1 text-center text-white rounded${!credit ? " bg-primary" : " bg-secondary"}`} onClick={() => setCredit(false)}>Crypto</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className='mt-1'>
                                        {credit ? <CardElement className='p-2 border rounded' onChange={handleChange} /> :
                                            <>
                                                <Input
                                                    name="bnbsol"
                                                    value={cryptoAddress}
                                                    onChange={(e) => {
                                                        setCryptoAddress(e.target.value)
                                                        handleChangeCrypto()
                                                    }}
                                                    placeholder="Enter your BNB or SOL wallet address"
                                                    type="text"
                                                    className='p-1'
                                                />
                                            </>
                                        }
                                    </Col>
                                </Row>
                                <Row className='d-flex align-items-center'>
                                    <Col className='pe-0'>
                                        <h6 className='fs-5 mt-3'>Total: ${getBasketTotal(basket)}</h6>
                                    </Col>
                                    <Col xs={7} className='mt-2 ps-0 d-flex justify-content-end'>
                                        {credit ?
                                            // handle submit for credit payment
                                            <>
                                                <Button
                                                    className="me-2 bg-primary text-white"
                                                    id="card-button"
                                                    disabled={processing || disabled || succeeded}
                                                >
                                                    {processing ? "Processing" : 'Pay Now'}
                                                </Button>
                                                {' '}
                                                <Button onClick={() => setIsOpenCheckout(false)}>
                                                    Cancel
                                                </Button>
                                            </> :
                                            // handle submit for crypto payment
                                            <>
                                                <Button
                                                    className="me-2 bg-primary text-white"
                                                    id="card-button"
                                                    disabled={processing || disabledCrypto || succeeded}
                                                >
                                                    {processing ? "Processing" : 'Pay Now'}
                                                </Button>
                                                {' '}
                                                <Button onClick={() => setIsOpenCheckout(false)}>
                                                    Cancel
                                                </Button>
                                            </>
                                        }
                                    </Col>
                                </Row>
                                {/* Errors */}
                                {error && <div>{error}</div>}
                            </Form>
                        </ModalFooter>
                    </Modal>
                </div>

                {/* this modal for order history */}
                <div>
                    <Modal
                        fullscreen="md"
                        scrollable
                        size="lg"
                        isOpen={isOpenOrders}
                        toggle={() => setIsOpenOrders(isOpenOrders ? false : "isOpenOrders")}
                    >
                        <ModalHeader toggle={() => setIsOpenOrders(false)}>
                        <h3 className='text-primary m-0'><strong>Order History</strong></h3>
                        </ModalHeader>
                        <ModalBody>
                            {orders?.map(order => (
                                <Order order={order} />
                            ))}
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={() => setIsOpenOrders(false)}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
                
                {/* this modal for crypto instructions notice */}
                <div>
                    <Modal
                        fullscreen="md"
                        scrollable
                        size="lg"
                        isOpen={isOpenCryptoNotice}
                        toggle={() => setIsOpenCryptoNotice(isOpenCryptoNotice ? false : "isOpenCryptoNotice")}
                    >
                        <ModalHeader toggle={() => setIsOpenCryptoNotice(false)}>
                        <h3 className='text-primary m-0'><strong>Crypto Order Instructions</strong></h3>
                        </ModalHeader>
                        <ModalBody>
                            You will receive an email to {user?.email} within 24 hours with instructions on how to send your crypto payment. If this email is not correct, contact us through Telegram, or Discord. Also, you must pay from the blockchain address {cryptoAddress}. If you have to pay from another address, you will have to submit a new order, and request this order be canceled. You can do this by responding to the instructions email you will receive. Thank you! 
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={() => {
                                setIsOpenCryptoNotice(false)
                                setCryptoAddress("")
                            }}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>

                {/* this modal for signin */}
                <div>
                    <Modal
                        fullscreen="md"
                        scrollable
                        size="md"
                        isOpen={isOpenSignin}
                        toggle={() => setIsOpenSignin(isOpenSignin ? false : "isOpenSignin")}
                    >
                        <ModalHeader className='bg-primary' toggle={() => setIsOpenSignin(false)}>
                            <img src={coin} alt="product item" className="product-img" /><span className='fs-3 ms-3 text-white'>Wurklo Store</span>
                        </ModalHeader>
                        <Form>
                            <ModalBody>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="example@email.com"
                                        type="email"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder="Enter password"
                                        type="password"
                                    />
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="primary"
                                    type='submit'
                                    onClick={signIn}
                                >
                                    Sign in
                                </Button>
                                {' '}
                                <Button type='submit' onClick={register}>
                                    Register
                                </Button>
                            </ModalFooter>
                        </Form>
                    </Modal>
                </div>
            </Container>
        </div>
    );
};

export default StorePage;