import pizzaSizes from "../assets/json/pizzasSizes.json";
import { PizzaSize } from "../components/PizzaSize";
import pizzaOptions from "../assets/json/pizzaOptions.json";
import { PizzaCrusts } from "../components/PizzaCrust";
import { PizzaToppings } from "../components/PizzaToppings";
import { PizzaSauces } from "../components/PizzaSauce";
import { PizzaCheeses } from "../components/PizzaCheese";
import { PizzaSummary } from "../components/PizzaSummary";
import { useLocation } from "react-router-dom";

export default function ThankYou() {
    let numbers = useLocation().state.numbers;

    return (
        <div className="flex flex-col items-center justify-center pb-32">
            <div className="p-8 shadow-all rounded-xl bg-white w-3/4 mb-8">
                <h1 className="font-bold mb-4 text-3xl text-center">
                    THANK YOU
                </h1>
                <h1 className="text-center">
                    Thank you so much for your order! Your order number is <strong>{numbers.orderNumber}</strong> and
                    your driver number
                    is <strong>{numbers.driverNumber}</strong>.
                </h1>
            </div>

        </div>
    )
}