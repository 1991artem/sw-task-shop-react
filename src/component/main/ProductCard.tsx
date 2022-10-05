import { useContext } from 'react';
import { IProduct } from '../interfaces';
import { NavLink } from 'react-router-dom';
import { DataFilter } from '../DataFilter';
import {StoreContext} from '../../App'

interface IProductCard{
    item: IProduct;
}

export function ProductCard({item}:IProductCard){
    const {currency} = useContext(StoreContext)
    let price = DataFilter.getPrice(currency[1], item)
    return(
        <NavLink to={`/card/:${item.id}`} className="main-container_product-card" >
            <div className="main-container_product-card_img"><img src={item.gallery[0]} alt={item.name} /></div>
            <div><p>{item.name}</p></div>
            <div><p>{`${price.value} ${price.symbol}`}</p></div>
        </NavLink>
    )

}