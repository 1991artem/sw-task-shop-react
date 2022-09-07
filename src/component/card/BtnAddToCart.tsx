import { useContext } from "react";
import { ICart, IStorePropsObj } from '../interfaces';
import { StoreContext } from '../../App';

interface IBtnAddToCart {
    item: ICart
}

export default function BtnAddToCart({item}: IBtnAddToCart){
    const {cart}: IStorePropsObj = useContext(StoreContext);
    const handleClick = () =>{
        if(item.id){
            cart.push(item);
        }
        console.log(cart)
    }

    return(
        <button className="product-card-main-info-btn" onClick={handleClick}><p>ADD TO CART</p></button>
    )
}