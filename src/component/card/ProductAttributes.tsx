import { IProductAttributes, IProductAttributesItems} from '../interfaces';
import { useState } from 'react';

export default function ProductAttributes({attributes, params}:IProductAttributes){
    const [select, setSelect] = useState(attributes? attributes.items[0].displayValue:'');
    const attributesHandler = (e: React.MouseEvent) => {
        setSelect((e.target as HTMLElement).innerHTML);
    }

    return (
        <div className='product-card-main-info-attributes'>
            <h3>{attributes.name}</h3>
            <ul>
            {
            attributes.items.map((item:IProductAttributesItems)=>{
                return(
                    <li
                    className={item.displayValue === select? 'product-card-main-info-attributes_value active': 'product-card-main-info-attributes_value'}
                    data-value={`${attributes.name};${item.displayValue}`}
                    onClick={attributesHandler}
                    key={Date.now()*Math.random()}>
                    {item.displayValue}
                    </li>
                )
            })
            }
            </ul>
        </div>
    )

}