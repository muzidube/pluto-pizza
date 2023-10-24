export interface Size {
    size: string,
    measurements: string,
    serves: string,
    price: number
    toppings: number
}

export interface Pizza {
    type: string,
    size: Size,
    crust: string,
    toppings: string[],
    sauce: string,
    cheese: string,
    price: number,
    id: string
}

export interface Numbers {
    orderNumber: number,
    driverNumber: number
}

export interface Orders {
    order: Pizza[],
    numbers: Numbers,
}
