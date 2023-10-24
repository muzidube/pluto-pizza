import React, { FC } from 'react';
import { cn } from "../utils/MergeTWClasses";

// This gives the Input component access to the properties of the HTML input element
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    // Custom properties go in here
    label: string;
    placeholder?: string;
    required?: boolean;
    labelClasses?: string;
    inputClasses?: string;
}

export const Input: FC<InputProps> = ( {
                                           labelClasses,
                                           label,
                                           placeholder,
                                           inputClasses,
                                           ...props
                                       } ) => {
    return (
        <>
            <label
                htmlFor={label.toLowerCase()}
                className={cn(
                    'block mb-2 text-sm font-medium text-gray-900 dark:text-white',
                    labelClasses
                )}
            >
                {label}
            </label>
            <input
                type="text"
                id={label.toLowerCase()}
                className={cn(
                    'bg-white border border-gray-300 text-primary-text text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-secondary-bg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8',
                    inputClasses
                )}
                {...props}
                placeholder={placeholder}
                required
            ></input>
        </>
    );
};
