import { useState, createContext } from 'react';
import { useQuery, gql } from '@apollo/client';
import { IStorePropsObj, ICart} from './component/interfaces';
import Header from './component/header/Header';
import Main from './component/main/Main';
import Scandiweb from './component/Scandiweb';
import { ErrorPage } from './component/ErrorPage';
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
  const [currency, setCurrency] = useState('USD');
  const cart: ICart[] = localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart') as string):[];

  if(loading) return <Scandiweb />;
  if(error) return <ErrorPage />;

  const dataFilter: DataFilter =  new DataFilter(data.categories)

  const STORE_PROPS_OBJ: IStorePropsObj = ({
    currency: [setCurrency, currency],
    cart: cart,
    data: data.categories,
  })

  return (
    <StoreContext.Provider value={STORE_PROPS_OBJ}>
    <div className='wrapper'>
      <Header />
      <Main />
    </div>
    </StoreContext.Provider>
  );
}
