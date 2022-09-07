/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import {StoreContext} from '../../App'
import { IStorePropsObj } from '../interfaces';

interface ILink {
    name: string
}

export default function Link({name}:ILink){
    const {categoriesName}: IStorePropsObj = useContext(StoreContext);

    const handleClick = (event:React.MouseEvent):void =>{
        event.preventDefault();
        categoriesName[0](((event.target) as HTMLElement).innerHTML);
    }

    return(
        <li className="link">
            <a className="header-link"
            href="#"
            onClick={handleClick}
            >{name}</a>
        </li>
    )
}