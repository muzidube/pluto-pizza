import { matchRoutes, useLocation } from 'react-router-dom';
import * as ROUTES from '../services/routes';

export const useCurrentPath = () => {
    // Uses useLocation() to get the current location from React Router.
    const location = useLocation();
    // List of routes to match against and then return the path of the matched route.
    const [ {route} ] =
    matchRoutes(
        [
            {
                path: ROUTES.CART,
                label: 'Cart',
            },
            {
                path: ROUTES.LOGIN,
                label: 'Login',
            },
            {
                path: ROUTES.MENU,
                label: 'Menu',
            },
            {
                path: ROUTES.NOT_FOUND,
                label: 'Not Found',
            },
            {
                path: ROUTES.ORDERS,
                label: 'Orders',
            },
            {
                path: '/',
                label: 'Menu',
            },
            {
                path: ROUTES.PIZZA_OPTIONS,
                label: 'Pizza Options',
            },
            {
                path: ROUTES.THANK_YOU,
                label: 'Thank You',
            },
        ],
        location
    ) ?? [];
    return route.path;
};
