import { useQuery, gql } from '@apollo/client';
import { ICategories, IProductPrice, IProduct} from './component/interfaces';
import Header from './component/header/Header';
import Main from './component/main/Main';
import { useEffect, useState} from 'react';
import ProductCardPage from './component/card/ProductCardPage';

const query = gql`
            query   {
                categories {
                name
                products {
                    id
                    name
                    inStock
                    gallery
                    description
                    category
                    attributes {
                    id
                    name
                    type
                    items {
                        displayValue
                        value
                        id
                    }
                    }
                    prices {
                    currency {
                        label
                        symbol
                    }
                    amount
                    }
                    brand
                }
                }
            }
            `;


export default function App() {
  const {loading, error,data} = useQuery(query);
  const [categoriesName, setCategoriesName] = useState('all');
  const [currency, setCurrency] = useState('USD');
  const [product, setProduct] = useState('');
  const [miniCart, setMiniCart] = useState(false);

  useEffect(()=>{
    setProduct('');
  },[categoriesName])


  if(loading) return <div><p>...Loading</p></div>;
  if(error) return <div><p>{`Error:  ${error.message}`}</p></div>;

  const sortData = (categoriesName: string) => {
    let selectCategories: ICategories | {} = {}
    dataFromServer.forEach((categories: ICategories) => {
      if(categories.name === categoriesName){
        selectCategories = categories;
      }
    });
    return selectCategories
  }

  const filterConfigProductForMainCatalog = (data: ICategories) => {
    let filterProductArray: { name: string; img: string; price: {}; }[] = [];
    data.products?.forEach(product=>{
      let filterProduct = {
        name: product.name,
        img: product.gallery[0],
        id:product.id,
        price: {}
      };
      product.prices.forEach((curr: IProductPrice) => {
        if(curr.currency.label === currency){
          filterProduct.price = {
            value: curr.amount,
            label: curr.currency.label,
            symbol: curr.currency.symbol
          }
        }
      })
      filterProductArray.push(filterProduct)
    })
    return filterProductArray;
  }

  const checkCategories = (value: string) =>{
    setCategoriesName(value)
  }

  const checkCurrency = (value: string) =>{
    setCurrency(value)
  }

  const showMiniCart = (value: boolean) =>{
    setMiniCart(value)
  }

  const showProduct = (prod: string ) =>{
    setProduct(prod)
  }

  const handlerHide = (e: Event) => {
    if((e.target as HTMLElement).className === "header"){
        setProduct('')
    }
  }

  document.body.addEventListener('click', handlerHide, true)

  let dataFromServer: ICategories[] = data.categories;
  let categories = dataFromServer.map((element)=>{
    return element.name
  });
  let selectDataItem: ICategories = sortData(categoriesName) as ICategories;
  let filterProductArrayForMain = filterConfigProductForMainCatalog(selectDataItem);

  let productDataForCard = selectDataItem.products?.filter((prod:IProduct)=> prod.id === product)[0];

  return (
    <div className='wrapper'>
      <Header categories={categories} checkCategories={checkCategories} checkCurrency={checkCurrency}  showMiniCart={showMiniCart}/>
      {
      product? <ProductCardPage cardData={productDataForCard} currency={currency}/> : <Main product={filterProductArrayForMain} categories={categoriesName} showProduct={showProduct} miniCart={miniCart}/>
      }
    </div>
  );
}
