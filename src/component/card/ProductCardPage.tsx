import MainPlaceCard from "./MainPlaceCard"
import { IProduct } from '../interfaces';

interface ICardData{
    cardData: IProduct | undefined;
    currency: string;
}

export default function ProductCardPage({cardData, currency}:ICardData){
    if(cardData){
        return(
            <div className="product-card">
                <MainPlaceCard product={cardData} currency={currency}/>
            </div>
        )
    } else {
        return(
            <p>Sorry</p>
        )

    }

}