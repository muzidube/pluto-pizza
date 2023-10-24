import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import * as ROUTES from './services/routes';

import { NavBar } from "./components/NavBar";

import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";
import PizzaOptions from "./pages/PizzaOptions";
import ThankYou from "./pages/ThankYou";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from './firebase/firebase';

const menuRoutes = [
    ROUTES.MENU,
    ROUTES.CART,
];

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<NavBar routes={menuRoutes}/>}>
                    <Route path="/" element={<Menu/>}/>
                    <Route path={ROUTES.CART} element={<Cart/>}/>
                    <Route path={ROUTES.MENU} element={<Menu/>}/>
                    <Route path={ROUTES.PIZZA_OPTIONS} element={<PizzaOptions/>}/>
                    <Route path={ROUTES.THANK_YOU} element={<ThankYou/>}/>
                    <Route path={ROUTES.ORDERS} element={<Orders/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
                <Route path={ROUTES.LOGIN} element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
