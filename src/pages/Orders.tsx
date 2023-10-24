import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
        <div className="w-screen lg:w-5/6 lg:mx-auto">
            {order.map(( order, index ) => (
                <OrdersTable key={index} order={order.order} numbers={order.numbers}/>
            ))}
        </div>
    )
}