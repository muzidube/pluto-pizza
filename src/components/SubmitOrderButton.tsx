import * as React from 'react';
import Button from '@mui/material/Button';
import { Numbers, Pizza } from "../services/interfaces";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import * as ROUTES from "../services/routes";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { updateOrdersDocument } from "../firebase/firebase";

export default function SubmitOrderButton( {cart, numbers}: { cart: Pizza[], numbers: Numbers } ) {
    const handleClick = ( cart: Pizza[] ) => {
        localStorage.clear();
        const order = {
            order: cart,
            numbers
        }
        updateOrdersDocument(order);
    }
    return (
        <Link to={ROUTES.THANK_YOU} state={{numbers}}>
            <button className="bg-primary-bg px-4 py-2 rounded-md shadow text-base hover:bg-primary-button"
                    onClick={() => handleClick(cart)}>SUBMIT ORDER
            </button>
        </Link>

    );
}