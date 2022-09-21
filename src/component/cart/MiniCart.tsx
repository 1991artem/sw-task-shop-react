import { useContext, useState} from "react";
import { IStorePropsObj, ICart } from '../interfaces';
import { StoreContext } from "../../App";
import CartItem from "./CartItem";
import EndWindow from "../EndWindow";

interface IMiniCart {
    hide: (value:boolean)=> void
}

export default function MiniCart({hide}:IMiniCart){
    const {cart, currency, mainCart }:IStorePropsObj = useContext(StoreContext);
    const [state, setState] = useState(true);
    const [reload, setReload] = useState(false);
    const reloadCart = {reload: reload, setReload: setReload}
    let totalPrice = 0;
    cart.forEach((item: ICart)=>{
        totalPrice += item.price * item.count;
    })
    const viewBag = () => {
        mainCart[0](true)
        hide(false)
    }

    const endOrder = () => {
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
                            <button onClick={viewBag}>VIEW BAG</button>
                            <button className="cart-btn-order" onClick={endOrder}>ORDER</button>
                        </div>
                    </div>
                </div>
            : <EndWindow />}
            </>

        )

}