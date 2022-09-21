import { useContext} from "react";
import { IStorePropsObj, ICart } from '../interfaces';
import { StoreContext } from "../../App";
import CartItem from "./CartItem";
import EndWindow from "../EndWindow";
import Loading from "../Loading";

interface IMiniCart {
    hide: (value:boolean)=> void
}

export default function MiniCart({hide}:IMiniCart){
    const {cart, currency, mainCart }:IStorePropsObj = useContext(StoreContext);
    let totalPrice = 0;
    cart.forEach((item: ICart)=>{
        totalPrice += item.price * item.count;
    })
    const viewBag = () => {
        mainCart[0](true)
        hide(false)
    }

    const endOrder = () => {
        setTimeout(()=>{window.location.reload()},1500);
        return <EndWindow />
    }
        return(
            <div className="dark-body">
                <div className="mini-cart">
                <h3>My Bag, <span>{`${cart.length} items`}</span></h3>
                {
                    cart.map(item => {
                        return (
                            <CartItem item={item} key={Date.now()*Math.random()}/>
                        )
                    })
                }
                    <div className="mini-cart-total-price"><h3>Total</h3><h3>{`${Math.floor(totalPrice*100)/100} ${currency[1]}`}</h3></div>
                    <div className="mini-cart-btn">
                        <button onClick={viewBag}>VIEW BAG</button>
                        <button className="cart-btn-order" onClick={endOrder}>ORDER</button>
                    </div>
                </div>
                <Loading />
            </div>
        )

}