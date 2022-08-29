import MainPlaceCard from "./MainPlaceCard"
import { IProduct } from '../interfaces';

interface ICardData{
    cardData: IProduct | undefined;
}

export default function ProductCardPage({cardData}:ICardData){
    if(cardData){
        return(
            <div className="product-card">
                <MainPlaceCard product={cardData}/>
            </div>
        )
    } else {
        return(
            <p>Sorry</p>
        )

    }

}