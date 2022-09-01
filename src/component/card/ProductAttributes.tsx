import { IProductAttributes, IProductAttributesItems} from '../interfaces';
import { CartStorage } from '../CartStorage';

export default function ProductAttributes({attributes}:IProductAttributes){

    // CartStorage.selectProduct = {
    //     id: '',
    //     count: 1,
    //     prarams: { a:1
    //     }
    // }

    const attributesHandler = (e:React.MouseEvent) => {
        console.log(CartStorage.selectProduct)
        document.querySelectorAll(`#product-card-${attributes.name}`).forEach((element:Element)=>{
            element.classList.remove('active');
        })
        if((e.target as HTMLElement).id === `product-card-${attributes.name}`){
            (e.target as HTMLElement).classList.add('active');
        } else if ((e.target as HTMLElement).innerHTML){
            (e.target as HTMLElement).parentElement?.classList.add('active');
        }
        CartStorage.selectProduct.params.set(attributes.name, (e.target as HTMLElement).innerHTML);
    }

    return (
        <div className='product-card-main-info-attributes'>
            <h3>{attributes.name}</h3>
            <div>
            {
            attributes.items.map((item:IProductAttributesItems)=>{
                return(
                    <div id={`product-card-${attributes.name}`} className='product-card-main-info-attributes_value' onClick={attributesHandler} key={Date.now()*Math.random()}>
                        <p>{item.displayValue}</p>
                    </div>
                )
            })
            }
            </div>
        </div>
    )

}