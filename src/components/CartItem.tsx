import { cn } from "../utils/MergeTWClasses";
import { Pizza } from "../services/interfaces";
import DeleteIcon from '@mui/icons-material/Delete';
import { NavButton } from "./NavButton";


export const CartItem = ( {pizza}: { pizza: Pizza } ) => {
    const deletePizza = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '{}');
        const newCart = cart.filter(( item: Pizza ) => item.id !== pizza.id);
        localStorage.setItem('cart', JSON.stringify(newCart));
        window.location.reload();
    }

    return (
        <div
            className="border-2 rounded flex items-center justify-between w-full pr-4">
            <div className="flex flex-wrap items-center">

                <img
                    className="h-24 w-24 mr-3"
                    src="/images/PizzaSize.png"
                    alt="Pizza"
                />
                <div className="capitalize pl-4 md:pl-0">
                    <h1>{pizza.type}</h1>
                    <div className="flex flex-wrap gap-1 capitalize">
                        <h1>{pizza.size.size}</h1>
                        <h1>{pizza.size.measurements}</h1>
                        <h1>{pizza.crust}</h1>
                        <h1>{pizza.cheese}</h1>
                        <h1>{pizza.sauce}</h1>
                    </div>
                    <div className="flex flex-wrap gap-1 capitalize">
                        {pizza.toppings.map(( topping, index ) => (
                            <h1 key={index}>{topping}</h1>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-5 items-center justify-center">
                <h1 className="font-bold">£{pizza.price}</h1>
                <button onClick={deletePizza}>
                    <DeleteIcon className="cursor-pointer"></DeleteIcon>
                </button>
            </div>
        </div>
    );
}