import { IStorePropsObj } from '../interfaces';
import { useState, useContext } from 'react';
import { StoreContext } from '../../App';


export default function ProductImg(){
    const {product}: IStorePropsObj = useContext(StoreContext);
    const [bigImg, setbigImg] = useState(product[1]?.gallery[0])

    if(product[1]){
        const imgHandler = (e:React.MouseEvent) => {
            setbigImg((e.target as HTMLElement).getAttribute('src') as string);
        }

        return (
            <div className="product-card-img-container">
                <div className="product-card-img-container_mini">
                {
               product[1].gallery.map((img:string) => {
                return (
                    <div className="product-card_mini-img" key={Date.now()*Math.random()}><img src={img} alt={img} onClick={imgHandler} /></div>
                )
               })
               }
                </div>
                <div className="product-card-page-main_img"><img src={bigImg} alt={product[1].name} /></div>
            </div>
        )
    } else return (
        <div className="product-card-img-container">
            <div className="product-card-img-container_mini">
                <div className="product-card-page-main_img"><p> image </p></div>
            </div>
        </div>
    )

}