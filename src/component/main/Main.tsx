import MiniCart from "../cart/MiniCart"
import Container from "./Container"
import Title from "./Title"

export default function Main({product, categories, showProduct, miniCart}: any){
    return (
        <div className="main">
            {miniCart? <MiniCart />:''}
            <Title categoriesName={categories} />
            <Container product={product} showProduct={showProduct}/>
        </div>
    )
}