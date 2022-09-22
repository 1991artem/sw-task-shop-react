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
        params: []
    };

    const handleClick = () =>{
        let element = document.querySelector('.product-card-main-info-btn')?.parentElement?.children;
        productToCart.count = 1;
        if(element){
            for(let i = 0; i < element.length; i++){
                if(element[i].className === 'product-card-main-info-attributes') {
                    let attrList = element[i].children[1].children
                    for(let j = 0; j < attrList.length; j++){
                        if(attrList[j].className === 'product-card-main-info-attributes_value active'){
                            productToCart.params.push([element[i].children[0].innerHTML, attrList[j].innerHTML])
                        }
                    }
                }
                if(element[i].className === 'product-card-main-info-price') productToCart.price = Number(element[i].children[1].innerHTML.split(' ')[0]);
            }
        }
        console.log(productToCart.params)
        if(productToCart.id){
            if(cart.length === 0){
                cart.push(productToCart);
            } else {
                let add: boolean = true;
                for(let i = 0; i < cart.length; i++){
                    if(cart[i].id === productToCart.id){
                        if(Array.from(productToCart.params).join('') === Array.from(cart[i].params).join('')){
                            cart[i].count++;
                            add = false;
                            break;
                        }
                    }
                }
                if(add)cart.push(productToCart);
            }
        }
        sessionStorage.setItem('cart', JSON.stringify(cart))
        setState(state?false:true)
    }

    return(
        <button className="product-card-main-info-btn" onClick={handleClick}><p>ADD TO CART</p></button>
    )
}