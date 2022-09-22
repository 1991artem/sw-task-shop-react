import { IProductPrice, IStorePropsObj, IProduct } from '../interfaces';
import { useContext } from 'react';
import { StoreContext } from '../../App';

interface ICartItemInfo {
    product: IProduct
}
export default function CartItemPrice({product}: ICartItemInfo){
    const {currency}: IStorePropsObj = useContext(StoreContext);
    let sectionName: string = '';
    let itemPrice: string = ':(';
    product.prices.forEach((price:IProductPrice)=>{
        if(price.currency.label === currency[1]) {
            itemPrice = `${price.amount} ${price.currency.symbol}`;
            sectionName = price.__typename as string;
        }
    })
    return(
        <>
            <p>{sectionName}</p>
            <h4>{itemPrice}</h4>
        </>
    )
}