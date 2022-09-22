import { IProduct, IAttributes, ICart } from '../interfaces';
import CartAttributes from './CartAttributes';
import CartItemPrice from './CartItemPrice';

interface ICartItemInfo {
    product: IProduct;
    params: ICart;
}

export default function CartItemInfo({product, params}: ICartItemInfo){
    return(
        <div className="product-mini-card-main-info">
            <h2 className="product-card-mimi-main-info-title">{product.name}</h2>
            <CartItemPrice product={product}/>
            {
                product.attributes.map((attributes:IAttributes)=>{
                    return(
                        <CartAttributes attributes={attributes} params={params} key={Date.now()*Math.random()}/>
                    )
                } )
            }
        </div>
    )
}