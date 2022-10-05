import { useContext, useState} from "react";
import { IStorePropsObj, ICart } from '../interfaces';
import { StoreContext } from "../../App";
import CartItem from "./CartItem";
import EndWindow from "../EndWindow";
import { NavLink } from "react-router-dom";

interface IMiniCart {
    hide: (value:boolean)=> void
}

export default function MiniCart({hide}:IMiniCart){
    const {cart, currency }:IStorePropsObj = useContext(StoreContext);
    const [state, setState] = useState(true);
    const [reload, setReload] = useState(false);
    const reloadCart = {reload: reload, setReload: setReload}
    let totalPrice = 0;
    cart.forEach((item: ICart)=>{
        totalPrice += item.price * item.count;
    })
    const viewBag = () => {
        hide(false)
    }

    const endOrder = () => {
        cart.length = 0;
        localStorage.removeItem('cart');
        setState(false)
        setTimeout(()=>{window.location.reload()},1500);
    }
        return(
            <>{state?
                <div className="dark-body">
                    <div className="mini-cart">
                    <h3>My Bag, <span>{`${cart.length} items`}</span></h3>
                    {
                        cart.map((item, index) => {
                            return (
                                <CartItem item={item} index={index} reload={reloadCart} key={Date.now()*Math.random()}/>
                            )
                        })
                    }
                        <div className="mini-cart-total-price"><h3>Total</h3><h3>{`${Math.floor(totalPrice*100)/100} ${currency[1]}`}</h3></div>
                        <div className="mini-cart-btn">
                            <NavLink to="/cart" className="cart-btn-view" onClick={viewBag}><p>VIEW BAG</p></NavLink>
                            <button className="cart-btn-order" onClick={endOrder}>ERASE ALL</button>
                        </div>
                    </div>
                </div>
            : <EndWindow />}
            </>

        )

}