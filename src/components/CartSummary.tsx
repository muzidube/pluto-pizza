import { FC } from 'react';
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils/MergeTWClasses";
import PizzaButton from "./PizzaButton";
import { Numbers, Pizza } from "../services/interfaces";
import { v4 as uuidv4 } from 'uuid';
import * as React from "react";
import SubmitOrderButton from "./SubmitOrderButton";

interface CartSummmaryProps extends React.HTMLAttributes<HTMLDivElement> {
    cart: Pizza[]
}

export const CartSummary: FC<CartSummmaryProps> = ( {cart} ) => {
    const total = cart.reduce(( acc, pizza ) => acc + pizza.price, 0);
    const orderNumber = Math.floor(Math.random() * 9000000 + 1000000);
    const driverNumber = Math.floor(Math.random() * 9000 + 1000);

    const numbers: Numbers = {
        orderNumber,
        driverNumber
    }

    return (
        <div
            className="p-8 fixed bottom-0 left-0 right-0 w-full rounded bg-white flex items-center justify-between">
            <h1 className="font-bold text-3xl">
                Total
            </h1>
            <div className="flex gap-5 flex-wrap text-xl items-center">
                <h1 className="font-bold">£{total.toFixed(2)}</h1>
                <SubmitOrderButton cart={cart} numbers={numbers}/>
            </div>
        </div>
    )
}