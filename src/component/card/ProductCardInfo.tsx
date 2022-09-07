import { useContext, useState } from 'react';
import { IAttributes, IStorePropsObj, ICart } from '../interfaces';
import BtnAddToCart from './BtnAddToCart';
import ProductAttributes from './ProductAttributes';
import ProductPrice from './ProductPrice';
import { StoreContext } from '../../App';

export default function ProductCardInfo(){
    const {product}: IStorePropsObj = useContext(StoreContext)
    const [card, setCard] = useState(true)
    let productToCart: ICart = {
        id: product[1]?.id as string,
        count: 0,
        price: 0,
        params: new Map()
    };
    const setPrice = (value: number) => {productToCart.price = value};

    const cardInfoHandler = (e: React.MouseEvent) => {
        if((e.target as HTMLElement).getAttribute('data-value')){
            (e.target as HTMLElement).classList.add('active');
            let attribute: string[] = ((e.target as HTMLElement).getAttribute('data-value') as string).split(';');
            productToCart.params.set(attribute[0], attribute[1]);
            productToCart.count = 1;
        }
        if((e.target as HTMLElement).innerHTML === 'ADD TO CART') setCard(card? false: true)
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
                <ProductPrice setPrice={setPrice}/>
                <BtnAddToCart item={productToCart}/>
                <div dangerouslySetInnerHTML={{__html: product[1].description}}></div>
            </div>
        )
    } else return (
        <div className="product-card-main-info"></div>
    )

}