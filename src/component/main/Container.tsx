import { useContext } from "react";
import ProductCart from "./PoductCard";
import { IProductForMain, IStorePropsObj } from "../interfaces";
import { StoreContext } from "../../App";

export default function Container(){
    const {productArrayForMain}: IStorePropsObj = useContext(StoreContext);
    return(
        <div className="main-container_product">
            {productArrayForMain.map((item: IProductForMain)=> {
                return <ProductCart item={item} key={item.id}/>})
                }
        </div>
    )
}