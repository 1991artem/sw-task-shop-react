import { IProductPriceItem, IProductPrice } from '../interfaces';

export default function ProductPrice({price, currency}:IProductPriceItem){
    let itemPrice = ':(';
    price.forEach((price:IProductPrice)=>{
        if(price.currency.label === currency) itemPrice = `${price.amount} ${price.currency.symbol}`
    })
    return(
        <div className="product-card-main-info-price">
            <h3>PRICE</h3>
            <p>{itemPrice}</p>
        </div>
    )
}