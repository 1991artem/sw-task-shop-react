import { useContext } from "react";
import { MainCartContainer } from "../mainCart/MainCartContainer"
import Container from "./Container"
import Title from "./Title"
import { StoreContext } from "../../App";

export default function Main(){
    const {mainCart} = useContext(StoreContext);
    return (
        <div className="main">
            {
                mainCart[1]?<MainCartContainer /> : <><Title /><Container /></>
            }
        </div>
    )
}