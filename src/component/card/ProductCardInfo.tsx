import { IProduct, IAttributes } from '../interfaces';
import BtnAddToCart from './BtnAddToCart';
import ProductAttributes from './ProductAttributes';
import ProductPrice from './ProductPrice';

interface IProductCardInfo {
    product: IProduct;
    currency: string;
}

export default function ProductCardInfo({product, currency}:IProductCardInfo){
    console.log(product.description)
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
            <ProductPrice price={product.prices} currency={currency}/>
            <BtnAddToCart />
            <div dangerouslySetInnerHTML={{__html: product.description}}></div>
        </div>
    )
}