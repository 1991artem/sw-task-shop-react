import { useContext, useState } from "react";
import { ICart, IStorePropsObj } from '../interfaces';
import { StoreContext } from '../../App';


export default function BtnAddToCart(){
    const {cart, product}: IStorePropsObj = useContext(StoreContext);
    const [state, setState] = useState(false)
    let productToCart: ICart = {
        id: product[1]?.id as string,
        count: 0,
        price: 0,
        params: new Map()
    };

    const handleClick = () =>{
        let element = document.querySelector('.product-card-main-info-btn')?.parentElement?.children;
        productToCart.count = 1;
        console.log(element)
        if(element){
            for(let i = 0; i < element.length; i++){
                if(element[i].className === 'product-card-main-info-attributes') {
                    let attrList = element[i].children[1].children
                    for(let j = 0; j < attrList.length; j++){
                        if(attrList[j].className === 'product-card-main-info-attributes_value active'){
                            console.log(attrList[j])
                            productToCart.params.set(element[i].children[0].innerHTML, attrList[j].innerHTML)
                        }
                    }
                }
                if(element[i].className === 'product-card-main-info-price') productToCart.price = Number(element[i].children[1].innerHTML.split(' ')[0]);
            }
        }
        //cart.push(productToCart);
        if(productToCart.id){
            if(cart.length === 0){
                cart.push(productToCart);
            } else {
                for(let i = 0; i < cart.length; i++){
                    if((cart[i].id === productToCart.id) && (JSON.stringify(Array.from(productToCart.params)) === JSON.stringify(Array.from(cart[i].params)))){
                        console.log(JSON.stringify(Array.from(productToCart.params)) === JSON.stringify(Array.from(cart[i].params)))
                        cart[i].count++;
                    } else {
                        console.log('not ++')
                        cart.push(productToCart);
                    }
                }
            }
        }
        setState(state?false:true)
        console.log(cart)
    }

    return(
        <button className="product-card-main-info-btn" onClick={handleClick}><p>ADD TO CART</p></button>
    )
}