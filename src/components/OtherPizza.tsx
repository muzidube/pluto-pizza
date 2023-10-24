import { FC } from 'react';
import { Link } from "react-router-dom";
import pizzaTypes from '../assets/json/pizzas.json';

import * as ROUTES from '../services/routes';
import DropdownMenu from "./Dropdown";
import { Pizza } from "../services/interfaces";

interface OtherPizzaProps extends React.HTMLAttributes<HTMLDivElement> {
    imageUrl: string
    pizza: any
}

export const OtherPizza: FC<OtherPizzaProps> = ( {imageUrl, pizza} ) => {
    return (
        <>
            <div className="p-4 shadow-all rounded-xl bg-white">
                <Link to={ROUTES.PIZZA_OPTIONS} state={{pizza}} className="flex items-center">
                    <img
                        className="h-48 mr-3"
                        src={imageUrl}
                        alt="Pizza option"
                    />
                </Link>
                <h1 className="font-semibold">
                    {pizza.type}
                </h1>
            </div>
        </>
    );
}