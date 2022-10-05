import { useContext } from 'react';
import { IStorePropsObj, IProductTransfer } from '../interfaces';
import { StoreContext } from '../../App';
import { DataFilter } from '../DataFilter';

export default function ProductPrice({product}:IProductTransfer){
    const {currency}: IStorePropsObj = useContext(StoreContext);
    let price = DataFilter.getPrice(currency[1], product)
    return(
        <div className="product-card-main-info-price">
            <h3>{price.sectionName}</h3>
            <p>{`${price.value} ${price.symbol}`}</p>
        </div>
    )
}