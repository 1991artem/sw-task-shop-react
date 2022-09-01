import { CartStorage } from "../CartStorage"

export default function BtnAddToCart(){
    const handleClick = () =>{
        if(CartStorage.selectProduct.id){
            CartStorage.cart.push(CartStorage.selectProduct);
        }
        CartStorage.selectProduct = {
            id: '',
            count: 1,
            params: new Map()
        };
        console.log(CartStorage.cart)
    }

    return(
        <button className="product-card-main-info-btn" onClick={handleClick}><p>ADD TO CART</p></button>
    )
}