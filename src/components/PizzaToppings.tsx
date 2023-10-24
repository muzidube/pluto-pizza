import { FC } from 'react';
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils/MergeTWClasses";

const optionVariant = cva(
    'border-2 rounded grid grid-cols-2 items-center justify-center hover:cursor-pointer hover:bg-primary-bg',
    {
        variants: {
            variant: {
                normal: 'bg-white',
                selected: 'bg-primary-bg',
            },
        },
        defaultVariants: {
            variant: "normal"
        }
    }
);

interface PizzaToppingsProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof optionVariant> {
    variant: "normal" | "selected";
    topping: string;
    selected: boolean;
    imageUrl: string;
}

export const PizzaToppings: FC<PizzaToppingsProps> = ( {topping, variant, onClick, className, selected, imageUrl} ) => {
    return (
        <div
            className={cn(optionVariant({variant, className}))}
            onClick={onClick}>
            <img
                className="h-24 w-24 mr-3"
                src={imageUrl}
                alt="Create your own pizza"
            />
            <div className="capitalize">
                <h1>{topping}</h1>
            </div>
        </div>
    )
}