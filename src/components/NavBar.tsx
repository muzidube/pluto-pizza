import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';

import { auth } from '../firebase/firebase';
import pizzaImages from "../assets/json/pizzaImages.json";
import { useCurrentPath } from "../hooks/useCurrentPath";
import { NavButton } from "./NavButton";

interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {
    routes: string[]
}

export const NavBar: FC<NavBarProps> = ( {routes} ) => {
    const [ user ] = useAuthState(auth);
    const [ signOut, loading, error ] = useSignOut(auth);
    // Gets the current path from the useCurrentPath hook and then changes the the button class to selected if the current path matches the route.
    const currentPath = useCurrentPath();
    return (
        <>
            <nav className="bg-primary-bg mb-12 p-3">
                {!user && (
                    <NavButton className="capitalize text-base w-8 mx-0 text-header-text mb-0" href={'login'}
                               variant={'default'}/>
                )}
                {user && (
                    <div className="flex gap-5">
                        <NavButton className="capitalize text-base w-8 mx-0 text-header-text mb-0" href={'orders'}
                                   variant={'default'}/>
                        <button
                            className="capitalize text-base nav-button block py-2 px-8 mb-0 hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:bg-transparent dark:hover:bg-gray-700 dark:border-gray-700"
                            onClick={async () => await signOut()}>Log Out
                        </button>
                    </div>
                )}
                <div className="flex flex-col items-center justify-center">
                    <img src={pizzaImages.logo.image} alt="Pizza logo" className="w-1/2 sm:w-1/6"/>
                    <div
                        className="items-center justify-between flex w-full md:w-auto md:order-1"
                        id="navbar-user"
                    >
                        <ul className="flex flex-col w-full items-center justify-center font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-primary-bg dark:bg-secondary-bg md:dark:bg-secondary-bg dark:border-gray-700">
                            {routes.map(( route, index ) => (
                                <li key={index}>
                                    <NavButton className="uppercase font-bold text-2xl"
                                               href={route.substring(1)}
                                               variant={currentPath === route ? 'selected' : 'default'}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}