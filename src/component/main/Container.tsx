import ProductCart from "./PoductCard";
import { IProductForMain } from "../interfaces";

export default function Container({product}: any){
    console.log(product)
    return(
        <div className="main-container_product">
            {product.map((item: IProductForMain)=> {return <ProductCart product={item} />})}
        </div>
    )
}