
export interface ICategories {
    name: string;
    products?: IProduct[];
    __typename: string
}

export interface IProduct {
    attributes: [];
    brand: string;
    category: string;
    description: string;
    gallery: string[]
    id: string;
    inStock: boolean
    name: string;
    prices: [];
    __typename?: string;
}

export interface IProductPrice {
    amount: number
    currency: {
        label: string;
        symbol: string
    }
}

export interface IProductForMain {
    name: string,
    img: string,
    id: string,
    price: {
        value: number
        label: string;
        symbol: string
    }
}