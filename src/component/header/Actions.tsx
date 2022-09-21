import Cart from "./Cart"
import Currency from "./Currency"

export default function Action(){
    return (
        <div className="header-actions">
            <div className="header-actions_empty"></div>
            <div className="header-actions_empty"></div>
            <Currency />
            <Cart />
        </div>
    )
}