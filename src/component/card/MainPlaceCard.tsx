import ProductCardInfo from "./ProductCardInfo";
import { IProduct } from '../interfaces';
import ProductImg from './ProductImg';

interface IMainPlaceCard {
    product: IProduct;
    currency: string;
}

export default function MainPlaceCard({product, currency}:IMainPlaceCard){
    return (
        <div className="product-card-page-main">
            <ProductImg product={product}/>
            <ProductCardInfo product={product} currency={currency}/>
        </div>
    )
}