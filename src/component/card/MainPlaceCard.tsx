import ProductCardInfo from "./ProductCardInfo";
import { IProduct } from '../interfaces';

interface IMainPlaceCard {
    product: IProduct;
    currency: string;
}

export default function MainPlaceCard({product, currency}:IMainPlaceCard){
    return (
        <div className="product-card-page-main">
            <div className="product-card-page-main_img"><img src={product.gallery[0]} alt={product.name} /></div>
            <ProductCardInfo product={product} currency={currency}/>
        </div>
    )
}