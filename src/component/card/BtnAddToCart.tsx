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
            if(cart.length === 0){
                cart.push(item);
            } else {
                for(let i = 0; i < cart.length; i++){
                    if((cart[i].id === item.id) && (JSON.stringify(Array.from(item.params)) === JSON.stringify(Array.from(cart[i].params)))){
                        cart[i].count++;
                        break;
                    } else {
                        cart.push(item);
                        break;
                    }
                }
            }
        }
        console.log(cart)
    }

    return(
        <button className="product-card-main-info-btn" onClick={handleClick}><p>ADD TO CART</p></button>
    )
}