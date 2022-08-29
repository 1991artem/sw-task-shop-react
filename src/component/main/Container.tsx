import ProductCart from "./PoductCard";
import { IProductForMain } from "../interfaces";

export default function Container({product, showProduct}: any){
    return(
        <div className="main-container_product">
            {product.map((item: IProductForMain)=> {return <ProductCart product={item} showProduct={showProduct} key={item.id}/>})}
        </div>
    )
}