import { IProductAttributes, IProductAttributesItems} from '../interfaces';

export default function ProductAttributes({attributes}:IProductAttributes){

    return (
        <div className='product-card-main-info-attributes'>
            <h3>{attributes.name}</h3>
            <div>
            {
            attributes.items.map((item:IProductAttributesItems)=>{
                return(
                    <div className='product-card-main-info-attributes_value' key={Date.now()*Math.random()}>
                        <p>{item.displayValue}</p>
                    </div>
                )
            })
            }
            </div>
        </div>
    )

}