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
                border: '',
                color: ''
            };
            let className:string[] = ['product-mini-card-main-info-attributes_value'];
            if(attributes.name === 'Color'){
                style.backgroundColor = item.displayValue.toLocaleLowerCase();
                style.border = 'solid 1px #cacecb';
                style.color = item.displayValue.toLocaleLowerCase();
            }
            if(params?.get(attributes.name) === item.displayValue) {
                style.border = 'solid 3px #5ECE7B';
            };
            return(
                <div
                className={className.join(' ')}
                style={style}
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