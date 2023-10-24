import { PizzaCard } from "../components/PizzaCard";
import pizzaTypes from "../assets/json/pizzas.json";
import { PizzaCard2 } from "../components/PizzaCard2";

export default function Menu() {
    return (
        <>
            <h2 className="fancy text-4xl">CREATION STATION</h2>
            <div className="flex flex-col py-5 p-5 items-center justify-center w-full">
                <div className="p-5 md:p-10">
                    <PizzaCard2 className="" imageUrl={"/images/CreatePizza.png"}/>
                </div>
                <h2 className="fancy text-4xl">PIZZAS</h2>
                <div className="grid py-5 p-5 gap-5 w-full h-full justify-center md:flex md:p-10">
                    {pizzaTypes.pizzas.map(( pizza, index ) => (
                        <PizzaCard key={index} imageUrl={pizza.image} pizza={pizza}/>
                    ))}
                </div>
            </div>
        </>
    )
}