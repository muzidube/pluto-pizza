import { CreatePizza } from "../components/CreatePizza";
import { OtherPizza } from "../components/OtherPizza";
import { PizzaCard } from "../components/PizzaCard";
import pizzaTypes from "../assets/json/pizzas.json";
import { Link, Navigate } from "react-router-dom";
import * as ROUTES from "../services/routes";
import DropdownMenu from "../components/Dropdown";
import { PizzaCard2 } from "../components/PizzaCard2";
import Divider from '@mui/material/Divider';
import { CartItem } from "../components/CartItem";
import { useEffect, useMemo, useState } from "react";
import { auth, getOrdersDocument } from "../firebase/firebase";
import { Orders } from "../services/interfaces";
import OrdersTable from "../components/OrdersTable";
import { useAuthState } from "react-firebase-hooks/auth";

export default function OrdersPage() {
    const [ user ] = useAuthState(auth);
    const [ order, setOrder ] = useState<Orders[]>([]);

    useEffect(() => {
        let ignore = false;
        const fetchOrders = async () => await getOrdersDocument();
        if (!ignore) {
            fetchOrders().then(( orders: any ) => {
                setOrder(orders)
            });
        }
        return () => {
            ignore = true;
        };
    }, []);
    if (!user) {
        return <Navigate to="/menu" replace/>;
    }
    return (
        <div className="w-1/2 mx-auto">
            {order.map(( order, index ) => (
                <OrdersTable key={index} order={order.order} numbers={order.numbers}/>
            ))}
        </div>
    )
}