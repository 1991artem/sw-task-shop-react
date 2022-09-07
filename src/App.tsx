import React, { useEffect, useState, createContext, useRef } from 'react';
import { useQuery, gql } from '@apollo/client';
import { IStorePropsObj, IProduct, IProductForMain} from './component/interfaces';
import Header from './component/header/Header';
import Main from './component/main/Main';
import ProductCardPage from './component/card/ProductCardPage';
import { DataFilter } from './component/DataFilter';

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

export const StoreContext = createContext({} as IStorePropsObj);

export default function App() {
  const {loading, error, data} = useQuery(query);
  const [categoriesName, setCategoriesName] = useState('all');
  const [currency, setCurrency] = useState('USD');
  const [product, setProduct] = useState('');
  const cart = useRef([])
  useEffect(()=>{
    setProduct('');
  },[categoriesName])

  if(loading) return <div><p>...Loading</p></div>;
  if(error) return <div><p>{`Error:  ${error.message}`}</p></div>;

  const DATA_FILTER: DataFilter = new DataFilter(data.categories);

  const handlerHide = (e: Event) => {
    if((e.target as HTMLElement).className === "header"){
        setProduct('')
    }
  }

  document.body.addEventListener('click', handlerHide, true)

  let productArrayForMain: IProductForMain[] = DATA_FILTER.filterConfigProductForMainCatalog(categoriesName, currency);
  let productDataForCard: IProduct | undefined = DATA_FILTER.getProductDataForCard(categoriesName, product);
  let categories: string[] = DATA_FILTER.separateСategoriesName()

  const STORE_PROPS_OBJ: IStorePropsObj = ({
    currency: [setCurrency, currency],
    product: [setProduct, productDataForCard],
    categoriesName: [setCategoriesName, categories, categoriesName],
    cart: cart.current,
    productArrayForMain: productArrayForMain,
  })

  return (
    <StoreContext.Provider value={STORE_PROPS_OBJ}>
    <div className='wrapper'>
      <Header />
      {
      product? <ProductCardPage /> : <Main />
      }
    </div>
    </StoreContext.Provider>
  );
}
