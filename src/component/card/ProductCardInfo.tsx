import { useContext } from 'react';
import { IAttributes, IStorePropsObj } from '../interfaces';
import BtnAddToCart from './BtnAddToCart';
import ProductAttributes from './ProductAttributes';
import ProductPrice from './ProductPrice';
import { StoreContext } from '../../App';

export default function ProductCardInfo(){
    const {product}: IStorePropsObj = useContext(StoreContext);

    if(product[1]){
        return(
            <div className="product-card-main-info">
                <h2 className="product-card-main-info-title">{product[1].name}</h2>
                {
                    product[1].attributes.map((attributes:IAttributes)=>{
                        return(
                            <ProductAttributes attributes={attributes} key={Date.now()*Math.random()}/>
                        )
                    } )
                }
                <ProductPrice />
                <BtnAddToCart />
                <div dangerouslySetInnerHTML={{__html: product[1].description}}></div>
            </div>
        )
    } else return (
        <div className="product-card-main-info"></div>
    )

}