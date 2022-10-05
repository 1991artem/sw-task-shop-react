import { useContext, useState} from "react";
import { IStorePropsObj, ICart } from '../interfaces';
import { StoreContext } from "../../App";
import CartItem from "../cart/CartItem";
import EndWindow from '../EndWindow';

export function MainCartContainer(){
    const {cart, currency }:IStorePropsObj = useContext(StoreContext);
    const [state, setState] = useState(true);
    const [reload, setReload] = useState(false);
    const reloadCart = {reload: reload, setReload: setReload}
    let totalPrice = 0;
    let quantity = 0;
    cart.forEach((item: ICart)=>{
        totalPrice += item.price * item.count;
        quantity += item.count;
    })
    const endOrder = () => {
        cart.length = 0;
        localStorage.removeItem('cart');
        setState(false)
        setTimeout(()=>{window.location.reload()},1500);
    }

    return(
        <>{ state?
            <div className="cart">
                <div className="cart-title">
                    <h6>{`CART`}</h6>
                </div>
            {
                cart.map((item, index) => {
                    return (
                        <CartItem item={item} index={index} reload={reloadCart} key={Date.now()*Math.random()}/>
                    )
                })
            }
            <div className="cart-price-discr">
            <div className="mini-cart-total-price"><p>Tax 21%</p><h3>{`${Math.floor(totalPrice*100*0.21)/100} ${currency[1]}`}</h3></div>
            <div className="mini-cart-total-price"><p>Quantity</p><h3>{`${quantity}`}</h3></div>
            <div className="mini-cart-total-price"><p>Total</p><h3>{`${Math.floor(totalPrice*100)/100} ${currency[1]}`}</h3></div>
                <div className="main-cart-btn">
                    <button className="cart-btn-order" onClick={endOrder}>ERASE ALL</button>
                </div>
            </div>
            </div>
            : <EndWindow />
        }
        </>

    )
}