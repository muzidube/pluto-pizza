import { PizzaSize } from "../components/PizzaSize";
import { Link } from "react-router-dom";
import * as ROUTES from "../services/routes";
import { PizzaCrusts } from "../components/PizzaCrust";
import { PizzaToppings } from "../components/PizzaToppings";
import { PizzaSauces } from "../components/PizzaSauce";
import { PizzaCheeses } from "../components/PizzaCheese";
import { PizzaSummary } from "../components/PizzaSummary";
import pizzaSizes from "../assets/json/pizzasSizes.json";
import pizzaOptions from "../assets/json/pizzaOptions.json";
import { useState } from "react";
import { useLocation } from 'react-router-dom'

interface Size {
    size: string,
    measurements: string,
    serves: string,
    price: number
    toppings: number
}

export default function PizzaOptions() {
    let pizza = useLocation().state.pizza;
    if (pizza === null) {
        pizza = undefined
    }
    const [ selectedSize, setSelectedSize ] = useState<Size>(pizza !== undefined ? pizza.size : {} as Size);
    const [ selectedCrust, setSelectedCrust ] = useState(pizza !== undefined ? pizza.crust : '');
    const [ selectedToppings, setSelectedToppings ] = useState<string[]>(pizza !== undefined ? pizza.toppings : []);
    const [ selectedSauce, setSelectedSauce ] = useState(pizza !== undefined ? pizza.sauce : '');
    const [ selectedCheese, setSelectedCheese ] = useState(pizza !== undefined ? pizza.cheese : '');

    const handleClick = ( topping: string ) => {
        if (selectedToppings.includes(topping)) {
            const tempArray = selectedToppings.filter(( item ) => item !== topping)
            setSelectedToppings(tempArray)
            return
        } else {
            const tempArray = [ ...selectedToppings, topping ]
            setSelectedToppings(tempArray)
            return
        }
    }

    return (
        <div className="flex flex-col items-center justify-center pb-32">
            <div className="p-8 shadow-all rounded-xl bg-white w-3/4 mb-8">
                <h1 className="font-bold mb-4 text-3xl">
                    Size
                </h1>
                <div className="flex flex-wrap justify-between gap-5">
                    {pizzaSizes.sizes.map(( size, index ) => (
                        <PizzaSize key={index} size={size.size} serves={size.serves}
                                   onClick={() => setSelectedSize(size)}
                                   variant={selectedSize.size === size.size ? "selected" : "normal"}/>
                    ))}
                </div>
            </div>
            <div className="p-8 shadow-all rounded-xl bg-white w-3/4 mb-8">
                <h1 className="font-bold mb-4 text-3xl">
                    Crust
                </h1>
                <div className="flex flex-wrap justify-between gap-5">
                    {pizzaOptions.crusts.map(( crust, index ) => (
                        <PizzaCrusts key={index} crust={crust} onClick={() => setSelectedCrust(crust)}
                                     variant={selectedCrust === crust ? "selected" : "normal"}
                                     imageUrl={`pluto-pizza/images/${crust}.png`}/>
                    ))}
                </div>
            </div>
            <div className="p-8 shadow-all rounded-xl bg-white w-3/4 mb-8">
                <div className="flex gap-5 items-center mb-4">
                    <h1 className="font-bold text-3xl">
                        Toppings
                    </h1>
                    <p className="text-xl">
                        (includes {selectedSize.toppings} toppings, £1.49 per extra topping)
                    </p>
                </div>
                <div className="flex flex-wrap justify-between gap-5">
                    {pizzaOptions.toppings.map(( topping, index ) => (
                        <PizzaToppings key={index} topping={topping} onClick={() => handleClick(topping)}
                                       variant={selectedToppings.includes(topping) ? "selected" : "normal"}
                                       selected={selectedToppings.includes(topping)}
                                       imageUrl={`pluto-pizza/images/${topping}.png`}/>
                    ))}
                </div>
            </div>
            <div className="p-8 shadow-all rounded-xl bg-white w-3/4 mb-8">
                <h1 className="font-bold mb-4 text-3xl">
                    Sauces
                </h1>
                <div className="flex flex-wrap justify-between gap-5">
                    {pizzaOptions.sauces.map(( sauce, index ) => (
                        <PizzaSauces key={index} sauce={sauce} onClick={() => setSelectedSauce(sauce)}
                                     variant={selectedSauce === sauce ? "selected" : "normal"}
                                     imageUrl={`pluto-pizza/images/${sauce}.png`}/>
                    ))}
                </div>
            </div>
            <div className="p-8 shadow-all rounded-xl bg-white w-3/4 mb-8">
                <h1 className="font-bold mb-4 text-3xl">
                    Cheeses
                </h1>
                <div className="flex flex-wrap justify-between gap-5">
                    {pizzaOptions.cheeses.map(( cheese, index ) => (
                        <PizzaCheeses key={index} cheese={cheese} onClick={() => setSelectedCheese(cheese)}
                                      variant={selectedCheese === cheese ? "selected" : "normal"}
                                      imageUrl={`pluto-pizza/images/${cheese}.png`}/>
                    ))}
                </div>
            </div>
            <PizzaSummary size={selectedSize} crust={selectedCrust} toppings={selectedToppings} cheese={selectedCheese}
                          sauce={selectedSauce}
                          price={selectedToppings.length > selectedSize.toppings ? selectedSize.price + ( ( selectedToppings.length - selectedSize.toppings ) * 1.49 ) : selectedSize.price}
                          type={pizza !== undefined ? pizza.type : "Create your own"}/>
        </div>
    )
}