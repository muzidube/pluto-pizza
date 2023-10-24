import * as React from 'react';
import Button from '@mui/material/Button';
import { Pizza } from "../services/interfaces";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import * as ROUTES from "../services/routes";
import { updateOrdersDocument } from "../firebase/firebase";

export default function PizzaButton( {pizza}: { pizza: Pizza } ) {
    const handleClick = ( pizza: Pizza ) => {
        pizza.id = uuidv4();
        if (localStorage.getItem('cart') !== null) {
            const cart = JSON.parse(localStorage.getItem('cart')!);
            cart.push(pizza);
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            const cart: Pizza[] = [];
            cart.push(pizza);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
    return (
        <>
            <Link to={ROUTES.CART}>
                <button className="bg-primary-bg px-4 py-2 rounded-md shadow text-base hover:bg-primary-button"
                        onClick={() => handleClick(pizza)}>ADD TO
                    CART
                </button>
            </Link>
        </>
    );
}