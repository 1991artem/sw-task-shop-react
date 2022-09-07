import { IProductAttributes, IProductAttributesItems } from "../interfaces"

export default function CartAttributes({attributes}:IProductAttributes){
    return(
        <div className='product-card-mini-main-info-attributes'>
        <p>{attributes.name}</p>
        <div>
        {
        attributes.items.map((item:IProductAttributesItems)=>{
            return(
                <div
                id={`product-card-${attributes.name.toLowerCase()}`}
                className='product-mini-card-main-info-attributes_value'
                key={Date.now()*Math.random()}>
                    <p>{item.displayValue}</p>
                </div>
            )
        })
        }
        </div>
    </div>
    )
}