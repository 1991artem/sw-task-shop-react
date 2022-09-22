import { ICart } from '../interfaces';
import { DataFilter } from '../DataFilter';
import CartItemInfo from './CartItemInfo';
import CartCounter from './CartCounter';
import CartImg from './CartImg';

interface ICartItem {
    item: ICart;
    index: number;
    reload: {
        reload: boolean;
        setReload: (value: boolean) => void;
    }
}
export default function CartItem({item, index, reload}: ICartItem){
    let product = DataFilter.filterDataForCart(item);
    return(
        <div className='mini-cart-item'>
            <CartItemInfo product={product} params={item}/>
            <CartCounter item={item} index={index} reload={reload}/>
            <CartImg img={product.gallery}/>
        </div>
    )
}