import { useContext } from 'react';
import { IProductPrice, IStorePropsObj } from '../interfaces';
import { StoreContext } from '../../App';



export default function ProductPrice(){
    const {product, currency}: IStorePropsObj = useContext(StoreContext);
    let sectionName: string = '';
    let value: number = 0;
    let symbol: string = ':(';
    product[1]?.prices.forEach((price:IProductPrice)=>{
        if(price.currency.label === currency[1]) {
            value = price.amount;
            symbol = price.currency.symbol;
            sectionName = price.__typename as string;
        }
    })
    return(
        <div className="product-card-main-info-price">
            <h3>{sectionName}</h3>
            <p>{`${value} ${symbol}`}</p>
        </div>
    )
}