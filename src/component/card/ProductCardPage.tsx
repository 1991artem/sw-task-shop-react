import { useParams } from "react-router-dom";
import MainPlaceCard from "./MainPlaceCard"

export default function ProductCardPage(){
    let {id}= useParams();
    if(id){
        id = id.split('').slice(1).join('')
    }
        return(
            <div className="product-card">
                <MainPlaceCard id={id}/>
            </div>
        )

}