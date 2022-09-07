import ProductCardInfo from "./ProductCardInfo";
import ProductImg from './ProductImg';


export default function MainPlaceCard(){
    return (
        <div className="product-card-page-main">
            <ProductImg />
            <ProductCardInfo />
        </div>
    )
}