import { FC } from 'react';
import PizzaButton from "./PizzaButton";
import { Size } from "../services/interfaces";

interface PizzaSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
    type: string
    size: Size
    crust: string
    toppings: string[]
    sauce: string
    cheese: string
    price: number
}

export const PizzaSummary: FC<PizzaSummaryProps> = ( {type, size, crust, toppings, sauce, cheese, price} ) => {
    const pizza = {
        type,
        size,
        crust,
        toppings,
        sauce,
        cheese,
        price,
        id: ''
    }
    return (
        <div
            className="p-8 fixed bottom-0 left-0 right-0 w-full bg-white flex items-center justify-between">
            <h1 className="font-bold text-3xl">
                {type}
            </h1>
            <div className="gap-2 flex-wrap capitalize text-xl hidden sm:flex">
                <h1>{size.size} {size.measurements}</h1>
            </div>
            <div className="flex gap-5 flex-wrap text-xl items-center">
                <h1 className="font-bold">£{price}</h1>
                <PizzaButton pizza={pizza}/>
            </div>
        </div>
    )
}