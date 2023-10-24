import { Link } from "react-router-dom";
import * as ROUTES from '../services/routes';

export const CreatePizza = () => {
    return (
        <div className="p-4 shadow-all rounded-xl bg-white">
            <Link to={ROUTES.PIZZA_OPTIONS} className="flex items-center">
                <img
                    className="mr-3"
                    src="/images/CreatePizza.png"
                    alt="Create your own pizza"
                />
            </Link>
        </div>
    );
}