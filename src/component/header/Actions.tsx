import Cart from "./Cart"
import Currency from "./Currency"

export default function Action({checkCurrency, showMiniCart}:any){
    return (
        <div className="header-actions">
            <div className="header-actions_empty"></div>
            <div className="header-actions_empty"></div>
            <Currency checkCurrency={checkCurrency}/>
            <Cart showMiniCart={showMiniCart}/>
        </div>
    )
}