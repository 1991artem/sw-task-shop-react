import { IProductAttributes, IProductAttributesItems } from "../interfaces"

export default function CartAttributes({attributes, params}:IProductAttributes){
    return(
        <div className='product-card-mini-main-info-attributes'>
        <p>{attributes.name}</p>
        <div>
        {
        attributes.items.map((item:IProductAttributesItems)=>{
            let style = {
                backgroundColor: '',
            };
            let className:string[] = ['product-mini-card-main-info-attributes_value'];
            if(attributes.name === 'Color'){
                if(params?.get(attributes.name) === item.displayValue) style.backgroundColor = item.displayValue.toLocaleLowerCase();
            } else {
                if(params?.get(attributes.name) === item.displayValue) className.push('chose-value');
            }
            return(
                <div
                id={`product-card-${attributes.name.toLowerCase()}`}
                className={className.join(' ')}
                style={{backgroundColor: style.backgroundColor}}
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