
interface ICartCounter {
    count: number
}

export default function CartCounter({count}: ICartCounter){
    return (
        <div className="cart-counter">
            <div className="cart-count-btn"><p>+</p></div>
            <div className="cart-counter-count"><p>{count}</p></div>
            <div className="cart-count-btn"><p>-</p></div>
        </div>
    )
}