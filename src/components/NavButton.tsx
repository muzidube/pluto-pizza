import * as React from 'react';
import { FC } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { Link } from 'react-router-dom';

import { cn } from "../utils/MergeTWClasses";

const css =
    'md:hover:text-gray-600 dark:text-white dark:hover:text-gray-400 dark:hover:text-white';

const buttonVariants = cva(
    'nav-button block text-3xl py-2 px-8 mb-3 mx-auto hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:bg-transparent dark:hover:bg-gray-700 dark:border-gray-700',
    {
        variants: {
            variant: {
                default: `text-gray-400 ${css}`,
                selected: `text-header-text border-b-4 border-header-text ${css}`,
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

// This gives the Button component access to the properties of the HTML Button element
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    href: string;
    variant: 'default' | 'selected';
}

export const NavButton: FC<ButtonProps> = ( {
                                                className,
                                                href,
                                                variant,
                                            } ) => {
    return (
        <Link to={href} className={cn(buttonVariants({variant, className}))}>
            {/*{href.charAt(33).toUpperCase() + href.slice(34)}*/}
            {href}
        </Link>
    );
};
