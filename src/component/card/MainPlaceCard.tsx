import ProductCardInfo from "./ProductCardInfo";
import { IProduct } from '../interfaces';

interface IMainPlaceCard {
    product: IProduct;
}

export default function MainPlaceCard({product}:IMainPlaceCard){
    return (
        <div className="product-card-page-main">
            <div className="product-card-page-main_img"><img src={product.gallery[0]} alt={product.name} /></div>
            <ProductCardInfo product={product}/>
        </div>
    )
}