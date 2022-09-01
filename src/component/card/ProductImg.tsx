import { IProduct } from "../interfaces"
import { useState } from 'react';

interface IProductImg {
    product: IProduct;

}

export default function ProductImg({product}:IProductImg){
    const [bigImg, setbigImg] = useState(product.gallery[0])
    const imgHandler = (e:React.MouseEvent) => {
        setbigImg((e.target as HTMLElement).getAttribute('src') as string);
    }

    return (
        <div className="product-card-img-container">
            <div className="product-card-img-container_mini">
            {
           product.gallery.map((img:string) => {
            return (
                <div className="product-card_mini-img" key={Date.now()*Math.random()}><img src={img} alt={img} onClick={imgHandler} /></div>
            )
           })
           }
            </div>
            <div className="product-card-page-main_img"><img src={bigImg} alt={product.name} /></div>
        </div>
    )
}