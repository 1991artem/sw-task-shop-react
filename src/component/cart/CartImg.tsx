
interface ICartImg {
    img: string[]
}
export default function CartImg({img}:ICartImg){
    return (
        <div className="mini-cart-img">
            <img src={img[0]} alt={''} />
        </div>
    )
}