import { IProduct } from '../interfaces';

interface IProductCardInfo {
    product: IProduct;
}

export default function ProductCardInfo({product}:IProductCardInfo){
    console.log(product)
    return(
        <div className="product-card-main-info">
            <h2 className="product-card-main-info-title">{product.name}</h2>

        </div>
    )
}