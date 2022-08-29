import Container from "./Container"
import Title from "./Title"

export default function Main({product, categories, showProduct}: any){
    return (
        <div className="main">
            <Title categoriesName={categories} />
            <Container product={product} showProduct={showProduct}/>
        </div>
    )
}