import { useContext } from 'react';
import { IAttributes, IStorePropsObj, ICart } from '../interfaces';
import BtnAddToCart from './BtnAddToCart';
import ProductAttributes from './ProductAttributes';
import ProductPrice from './ProductPrice';
import { StoreContext } from '../../App';

export default function ProductCardInfo(){
    const {product}: IStorePropsObj = useContext(StoreContext)
    let productToCart: ICart = {
        id: product[1]?.id as string,
        count: 0,
        params: new Map()
    };

    const cardInfoHandler = (e: React.MouseEvent) => {
        if((e.target as HTMLElement).getAttribute('data-value')){
            productToCart.count = 1;
            let attribute: string[] = ((e.target as HTMLElement).getAttribute('data-value') as string).split(';');
            productToCart.params.set(attribute[0], attribute[1]);
        }
    }

    if(product[1]){
        return(
            <div className="product-card-main-info" onClick={cardInfoHandler}>
                <h2 className="product-card-main-info-title">{product[1].name}</h2>
                {
                    product[1].attributes.map((attributes:IAttributes)=>{
                        return(
                            <ProductAttributes attributes={attributes} key={Date.now()*Math.random()}/>
                        )
                    } )
                }
                <ProductPrice />
                <BtnAddToCart product={productToCart}/>
                <div dangerouslySetInnerHTML={{__html: product[1].description}}></div>
            </div>
        )
    } else return (
        <div className="product-card-main-info"></div>
    )

}