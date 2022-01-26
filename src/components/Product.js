import React from "react";
import { Card, CardBody, CardTitle, CardText, Button, CardImg } from "reactstrap";
import '../App.css';
import { useStateValue } from "../redux/StateProvider";

function Product({ id, image, title, price, buttonText }) {
    const [{basket}, dispatch] = useStateValue();

    console.log('this is the basket >>> ', basket)

    const addToBasket = () => {
        //dispatch item into data layer basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
            },
        });
    };

    return (
        <Card>
            <CardImg className="cardImg" alt="..." src={image} top></CardImg>
            <CardBody>
                <CardTitle className="text-center">{title}</CardTitle>
                <CardText>
                    ${price}
                </CardText>
                <Button onClick={addToBasket} className="shadow bg-primary text-white" id="card-button">{buttonText}</Button>
            </CardBody>
        </Card>
    );
}
export default Product;