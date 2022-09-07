import { useContext } from "react";
import { IStorePropsObj } from "../interfaces";
import { StoreContext } from "../../App";

export default function Title(){
    const {categoriesName}: IStorePropsObj = useContext(StoreContext);
    return (
        <div className="main-title">
            <p>{`Category ${categoriesName[2]}`}</p>
        </div>
    )
}