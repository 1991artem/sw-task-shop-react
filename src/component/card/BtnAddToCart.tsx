import { useContext } from "react";
import { ICart, IStorePropsObj } from '../interfaces';
import { StoreContext } from '../../App';

interface IBtnAddToCart {
    product: ICart
}

export default function BtnAddToCart({product}: IBtnAddToCart){
    const {cart}: IStorePropsObj = useContext(StoreContext)
    const handleClick = () =>{
        if(product.count) cart.push(product);
    }

    return(
        <button className="product-card-main-info-btn" onClick={handleClick}><p>ADD TO CART</p></button>
    )
}