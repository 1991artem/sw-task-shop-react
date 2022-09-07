import { useContext } from 'react';
import { IProductForMain, IStorePropsObj } from '../interfaces';
import { StoreContext } from '../../App';

interface IProductCard{
    item: IProductForMain;
}

export default function ProductCart({item}:IProductCard){
    const {product}: IStorePropsObj = useContext(StoreContext)

    const productCardOnClick = (id: string) => {
        product[0](id)
    }

    return(
        <div className="main-container_product-card" onClick={()=>productCardOnClick(item.id)}>
            <div className="main-container_product-card_img"><img src={item.img} alt={item.name} /></div>
            <div><p>{item.name}</p></div>
            <div><p>{`${item.price.value} ${item.price.symbol}`}</p></div>
        </div>
    )

}