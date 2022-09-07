import { IProductAttributes, IProductAttributesItems} from '../interfaces';

export default function ProductAttributes({attributes}:IProductAttributes){
    const attributesHandler = (e:React.MouseEvent) => {
        document.querySelectorAll(`#product-card-${attributes.name.toLowerCase()}`).forEach((element:Element)=>{
            element.classList.remove('active');
        })
        if((e.target as HTMLElement).id === `product-card-${attributes.name.toLowerCase()}`){
            (e.target as HTMLElement).classList.add('active');
        } else if ((e.target as HTMLElement).innerHTML){
            (e.target as HTMLElement).parentElement?.classList.add('active');
        }
    }

    return (
        <div className='product-card-main-info-attributes'>
            <h3>{attributes.name}</h3>
            <div>
            {
            attributes.items.map((item:IProductAttributesItems)=>{
                return(
                    <div
                    id={`product-card-${attributes.name.toLowerCase()}`}
                    className='product-card-main-info-attributes_value'
                    data-value={`${attributes.name};${item.displayValue}`}
                    onClick={attributesHandler}
                    key={Date.now()*Math.random()}>
                        <p data-value={`${attributes.name};${item.displayValue}`}>{item.displayValue}</p>
                    </div>
                )
            })
            }
            </div>
        </div>
    )

}