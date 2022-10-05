import { IAttributes, ICart, IProductTransfer } from '../interfaces';
import BtnAddToCart from './BtnAddToCart';
import ProductAttributes from './ProductAttributes';
import ProductPrice from './ProductPrice';

export default function ProductCardInfo({product}:IProductTransfer){
        return(
            <div className="product-card-main-info">
                <h2 className="product-card-main-info-title">{product.name}</h2>
                {
                    product.attributes.map((attributes:IAttributes)=>{
                        return(
                            <ProductAttributes attributes={attributes} key={Date.now() * Math.random()} params={{} as ICart}/>
                        )
                    } )
                }
                <ProductPrice product={product}/>
                <BtnAddToCart product={product}/>
                <div dangerouslySetInnerHTML={{__html: product.description}}></div>
            </div>
        )
}