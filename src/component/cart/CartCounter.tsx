import { useContext } from 'react';
import { StoreContext } from '../../App';
import { ICart } from '../interfaces';

interface ICartCounter {
    item: ICart;
    index: number;
    reload: {
        reload: boolean;
        setReload: (value: boolean) => void;
    }
}

export default function CartCounter({item, index, reload}: ICartCounter){
    const {cart} = useContext(StoreContext);
    const counterInc = () => {
        cart[index].count++;
        reload.setReload(reload.reload?false:true)

    }
    const counterDec = () => {
        if(cart[index].count > 0){
            cart[index].count--;
            reload.setReload(reload.reload?false:true)
        }
    }
    return (
        <div className="cart-counter">
            <div className="cart-count-btn" onClick={counterInc}><p>+</p></div>
            <div className="cart-counter-count"><p>{item.count}</p></div>
            <div className="cart-count-btn" onClick={counterDec}><p>-</p></div>
        </div>
    )
}