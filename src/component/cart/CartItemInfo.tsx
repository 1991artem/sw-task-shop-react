import { IProduct, IAttributes } from '../interfaces';
import ProductPrice from '../card/ProductPrice';
import ProductAttributes from '../card/ProductAttributes';

interface ICartItemInfo {
    product: IProduct
}

export default function CartItemInfo({product}: ICartItemInfo){
    return(
        <div className="product-card-main-info">
            <h2 className="product-card-main-info-title">{product.name}</h2>
            {
                product.attributes.map((attributes:IAttributes)=>{
                    return(
                        <ProductAttributes attributes={attributes} key={Date.now()*Math.random()}/>
                    )
                } )
            }
            <ProductPrice />
        </div>
    )
}