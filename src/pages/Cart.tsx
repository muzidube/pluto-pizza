import { useEffect, useState } from "react";

import pizzaSizes from "../assets/json/pizzasSizes.json";
import { PizzaSize } from "../components/PizzaSize";
import { Pizza } from "../services/interfaces";
import { CartItem } from "../components/CartItem";
import { CartSummary } from "../components/CartSummary";

export default function Cart() {
    const [ cart, setCart ] = useState<Pizza[]>([]);
    useEffect(() => {
        if (localStorage.getItem('cart')) {
            setCart(JSON.parse(localStorage.getItem('cart')!));
        }
    }, []);
    return (
        <div className="flex flex-col items-center justify-center overflow-y-auto pb-32">
            <div className="p-8 shadow-all rounded-xl bg-white w-3/4 mb-8">
                <h1 className="font-bold mb-4 text-3xl">
                    Cart
                </h1>
                <div className="flex flex-wrap justify-between gap-5">
                    {cart.map(( item, index ) => (
                        <CartItem key={index} pizza={item}/>
                    ))}
                </div>
            </div>
            <CartSummary cart={cart}/>
        </div>
    )
}