import Container from "./Container"
import Title from "./Title"

export default function Main({product, categories}: any){
    return (
        <div className="main">
            <Title categoriesName={categories} />
            <Container product={product}/>
        </div>
    )
}