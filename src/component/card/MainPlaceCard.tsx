import { DataFilter } from '../DataFilter';
import { ErrorPage } from '../ErrorPage';
import { IProduct } from '../interfaces';
import ProductCardInfo from "./ProductCardInfo";
import ProductImg from './ProductImg';

interface IMainPlaceCard {
    id: string | undefined
}


export default function MainPlaceCard({id}: IMainPlaceCard){
    let productItem: IProduct | null = id ? DataFilter.getProductDataForCard(id) : null;
    return (
            productItem?<div className="product-card-page-main">
                        <ProductImg product={productItem}/>
                        <ProductCardInfo product={productItem}/>
                    </div> : <ErrorPage/>
    )
}