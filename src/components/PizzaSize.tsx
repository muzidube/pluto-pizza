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

interface PizzaSizeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof optionVariant> {
    variant: "normal" | "selected";
    size: string;
    serves: string;
}

export const PizzaSize: FC<PizzaSizeProps> = ( {size, serves, variant, onClick, className} ) => {
    return (
        <div
            className={cn(optionVariant({variant, className}))}
            onClick={onClick}>
            <img
                className="h-24 w-24 mr-3"
                src="/images/PizzaSize2.png"
                alt="Create your own pizza"
            />
            <div className="grid capitalize">
                <h1>{size}</h1>
                <h1>Serves {serves}</h1>
            </div>
        </div>
    )
}