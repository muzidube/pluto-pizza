import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../components/Input';
import { ORDERS } from '../services/routes';
import { auth, getUserDocument } from '../firebase/firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useEffect, useState } from 'react';

import pizzaImages from "../assets/json/pizzaImages.json";

export default function Login() {
    const navigate = useNavigate();
    const [ inputs, setInputs ] = useState({email: '', password: ''});
    const [ errors, setErrors ] = useState('');

    const onChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        setInputs(( prev ) => ( {...prev, [ e.target.name ]: e.target.value} ));
    };
    const onSubmit = async ( e: React.FormEvent<HTMLFormElement> ) => {
        document.getElementById('login-form')?.classList.remove('animate-shake');
        e.preventDefault();
        try {
            let user = await signInWithEmailAndPassword(
                inputs.email,
                inputs.password
            );
            if (!user) return;
            const userDetails = await getUserDocument(user.user?.uid);
            localStorage.setItem('user', JSON.stringify(userDetails));
            navigate(ORDERS);
        } catch (error: any) {
            alert(error.message);
        }
    };

    const [ signInWithEmailAndPassword, user, loading, error ] =
        useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (error) {
            document.getElementById('login-form')?.classList.add('animate-shake');
            if (error.code === 'auth/user-disabled') {
                setErrors('User has been disabled.');
            } else if (error.code === 'auth/invalid-email') {
                setErrors('The email address is not valid.');
            } else if (error.code === 'auth/user-not-found') {
                setErrors('Incorrect login details.');
            } else if (error.code === 'auth/invalid-login-credentials') {
                setErrors('Incorrect login details.');
            } else if (error.code === 'auth/missing-password') {
                setErrors('Please enter password.');
            } else if (error.code === 'auth/too-many-requests') {
                setErrors('Please try again later.');
            }
        }
    }, [ error ]);

    return (
        <>
            <div
                className="bg-primary-bg flex flex-col mx-auto w-full h-screen items-center justify-center">
                <div className="flex w-1/5">
                    <Link
                        to={ORDERS}
                        className="cursor-pointer py-6 rounded-lg transform transition duration-500 hover:scale-110"
                    >
                        <img
                            className="mx-auto w-200px"
                            src={pizzaImages.logo.image}
                            alt="Pizza logo"
                        />
                    </Link>
                </div>
                <div id="login-form" className="flex flex-col w-4/5 md:w-2/5">
                    <div
                        className="flex flex-col items-center bg-white p-10 border border-gray-primary mb-4 rounded shadow-lg">
                        {/* <h1 className="flex justify-center w-full">
              <p className="font-inter font-bold text-lg text-center">
                PT Plus
              </p>
            </h1> */}
                        <form onSubmit={onSubmit} noValidate className="w-full">
                            <Input
                                label="Email"
                                onChange={onChange}
                                name="email"
                                type="text"
                            />
                            <Input
                                label="Password"
                                onChange={onChange}
                                name="password"
                                type="password"
                                inputClasses="mb-8"
                            />
                            {!errors.length && (
                                <div className="block -mt-5 mb-3 h-4">
                                    <span></span>
                                </div>
                            )}
                            {errors.length > 0 && (
                                <div
                                    className="flex justify-center items-center ui-error-message -mt-5 mb-3 text-error-text w-full text-center font-medium h-4">
                                    <svg
                                        aria-hidden="true"
                                        className="fill-error-text mr-2"
                                        height="12"
                                        width="12"
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="m10.115 1.308 5.635 11.269A2.365 2.365 0 0 1 13.634 16H2.365A2.365 2.365 0 0 1 .25 12.577L5.884 1.308a2.365 2.365 0 0 1 4.231 0zM8 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM8 9c.552 0 1-.32 1-.714V4.714C9 4.32 8.552 4 8 4s-1 .32-1 .714v3.572C7 8.68 7.448 9 8 9z"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>
                                    <p>{errors}</p>
                                </div>
                            )}
                            <button
                                //   disabled={isInvalid}
                                type="submit"
                                className="bg-primary-button text-white w-full rounded h-8 font-bold"
                            >
                                Login
                            </button>
                        </form>
                        {/* 0f7173ff f87666ff */}
                    </div>
                </div>
            </div>
        </>
    );
}
