import { useContext} from "react";
import { IStorePropsObj, ICart } from '../interfaces';
import { StoreContext } from "../../App";
import CartItem from "../cart/CartItem";

export function MainCartContainer(){

    const {cart, currency}:IStorePropsObj = useContext(StoreContext);
    console.log(cart)
    let totalPrice = 0;
    let quantity = 0;
    cart.forEach((item: ICart)=>{
        totalPrice += item.price * item.count;
        quantity += item.count;
    })

    return(
            <div className="cart">
                <div className="main-title">
                    <h6>{`CART`}</h6>
                </div>
            {
                cart.map(item => {
                    return (
                        <CartItem item={item} key={Date.now()*Math.random()}/>
                    )
                })
            }
            <div>
            <div className="mini-cart-total-price"><p>Tax 21%</p><h3>{`${Math.floor(totalPrice*100*0.21)/100} ${currency[1]}`}</h3></div>
            <div className="mini-cart-total-price"><p>Quantity</p><h3>{`${quantity}`}</h3></div>
            <div className="mini-cart-total-price"><p>Total</p><h3>{`${Math.floor(totalPrice*100)/100} ${currency[1]}`}</h3></div>
                <div className="mini-cart-btn">
                    <button className="cart-btn-order">ORDER</button>
                </div>
            </div>
            </div>
    )
}