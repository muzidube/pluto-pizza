import * as React from 'react';
import { FC } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import * as ROUTES from "../services/routes";
import { Link } from "react-router-dom";

interface PizzaCardProps extends React.HTMLAttributes<HTMLDivElement> {
    imageUrl: string
    pizza: any
}

export const PizzaCard: FC<PizzaCardProps> = ( {imageUrl, pizza} ) => {
    return (
        <Card sx={{maxWidth: 200, borderRadius: 5}}
              className="shadow-all bg-white hover:bg-primary-bg font-league transform transition duration-500 hover:scale-105">
            <Link to={ROUTES.PIZZA_OPTIONS} state={{pizza}} className="flex items-center">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className="h-48 mr-3"
                        image={imageUrl}
                        alt={pizza.type}
                    />
                    <CardContent>
                        <h1 className="font-league text-lg font-semibold">
                            {pizza.type}
                        </h1>
                        <h2 className="font-league text-md">
                            {pizza.description}
                        </h2>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
}