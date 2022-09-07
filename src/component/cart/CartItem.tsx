import { ICart } from '../interfaces';
import { DataFilter } from '../DataFilter';
import CartItemInfo from './CartItemInfo';
import CartCounter from './CartCounter';
import CartImg from './CartImg';

interface ICartItem {
    item: ICart;
}
export default function CartItem({item}: ICartItem){
    let product = DataFilter.filterDataForCart(item);
    return(
        <div className='mini-cart-item'>
            <CartItemInfo product={product}/>
            <CartCounter count={item.count}/>
            <CartImg img={product.gallery}/>
        </div>
    )
}