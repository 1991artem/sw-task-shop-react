import { IProductForMain } from '../interfaces';
interface IProductCard{
    product: IProductForMain;
    showProduct: (id: string)=> void
}

export default function ProductCart({product, showProduct}:IProductCard){

    const productCardOnClick = (id: string) => {
        showProduct(id)
    }

    return(
        <div className="main-container_product-card" onClick={()=>productCardOnClick(product.id)}>
            <div className="main-container_product-card_img"><img src={product.img} alt={product.name} /></div>
            <div><p>{product.name}</p></div>
            <div><p>{`${product.price.value} ${product.price.symbol}`}</p></div>
        </div>
    )

}