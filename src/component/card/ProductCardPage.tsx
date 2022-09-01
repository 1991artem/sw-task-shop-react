import MainPlaceCard from "./MainPlaceCard"
import { IProduct } from '../interfaces';
import { CartStorage } from '../CartStorage';

interface ICardData{
    cardData: IProduct | undefined;
    currency: string;
}

export default function ProductCardPage({cardData, currency}:ICardData){

    CartStorage.selectProduct.id = cardData?.id as string;

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