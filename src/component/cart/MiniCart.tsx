import { useContext} from "react";
import { IStorePropsObj } from "../interfaces";
import { StoreContext } from "../../App";
import CartItem from "./CartItem";


export default function MiniCart(){
    const {cart}:IStorePropsObj = useContext(StoreContext)

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
        </div>
        </div>
    )
}