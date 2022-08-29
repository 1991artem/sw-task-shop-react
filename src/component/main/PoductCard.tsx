import { IProductForMain } from '../interfaces';
interface IProductCard{
    product:IProductForMain;
}

export default function ProductCart({product}:IProductCard){
    console.log(product)
    return(
        <div className="main-container_product-card">
            <div className="main-container_product-card_img"><img src={product.img} alt={product.name} /></div>
            <div><p>{product.name}</p></div>
            <div><p>{`${product.price.value} ${product.price.label}`}</p></div>
        </div>
    )

}