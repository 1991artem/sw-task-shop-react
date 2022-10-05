import { ICart } from '../interfaces';
import CartItemInfo from './CartItemInfo';
import CartCounter from './CartCounter';
import CartImg from './CartImg';
import { DataFilter } from '../DataFilter';

interface ICartItem {
    item: ICart;
    index: number;
    reload: {
        reload: boolean;
        setReload: (value: boolean) => void;
    }
}
export default function CartItem({item, index, reload}: ICartItem){
    let product = DataFilter.getProductDataForCard(item.id)
    return(
        <div className='mini-cart-item'>
            <CartItemInfo product={product} params={item}/>
            <CartCounter item={item} index={index} reload={reload}/>
            <CartImg img={product.gallery}/>
        </div>
    )
}