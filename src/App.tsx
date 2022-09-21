import { useState, createContext, useRef } from 'react';
import { useQuery, gql } from '@apollo/client';
import { IStorePropsObj, IProduct, IProductForMain} from './component/interfaces';
import Header from './component/header/Header';
import Main from './component/main/Main';
import ProductCardPage from './component/card/ProductCardPage';
import { DataFilter } from './component/DataFilter';
import Loading from './component/Loading';

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
  const [mainCart, setMainCart] = useState(false);
  const cart = useRef([]);

  if(loading) return <Loading />;
  if(error) return <div><p>{`Error:  ${error.message}`}</p></div>;

  const DATA_FILTER: DataFilter = new DataFilter(data.categories);

  const handlerHide = (e: Event) => {
    if((e.target as HTMLElement).className === "header" || (e.target as HTMLElement).className === "header-link"){
        setProduct('');
        setMainCart(false);
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
    mainCart: [setMainCart, mainCart],
    productArrayForMain: productArrayForMain,
  })


  return (
    <StoreContext.Provider value={STORE_PROPS_OBJ}>
    <div className='wrapper'>
      <Header />
      {
      !mainCart && product? <ProductCardPage /> : <Main />
      }
    </div>
    </StoreContext.Provider>
  );
}
