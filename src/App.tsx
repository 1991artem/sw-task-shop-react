import { useQuery, gql } from '@apollo/client';
import { ICategories, IProductPrice } from './component/interfaces';
import Header from './component/header/Header';
import Main from './component/main/Main';
import { useState } from 'react';

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

  if(loading) return <div><p>...Loading</p></div>;
  if(error) return <div><p>{`Error:  ${error.message}`}</p></div>;

  let dataFromServer: ICategories[] = data.categories;

  let categories = dataFromServer.map((element)=>{
    return element.name
  });

  const sortData = (categoriesName: string) => {
    let selectCategories: ICategories | {} = {}
    dataFromServer.forEach((categories: ICategories) => {
      if(categories.name === categoriesName){
        selectCategories = categories;
      }
    });
    return selectCategories
  }
  let selectDataItem: ICategories = sortData(categoriesName) as ICategories;

  const filterConfigProductForMainCatalog = (data: ICategories) => {
    let filterProductArray: { name: string; img: string; price: {}; }[] = [];
    data.products?.forEach(product=>{
      let filterProduct = {
        name: product.name,
        img: product.gallery[0],
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

  let filterProductArrayForMain = filterConfigProductForMainCatalog(selectDataItem);

  const checkCategories = (value: string) =>{
    setCategoriesName(value)
  }
  const checkCurrency = (value: string) =>{
    setCurrency(value)
  }

  return (
    <div className='wrapper'>
      <Header categories={categories} checkCategories={checkCategories} checkCurrency={checkCurrency}/>
      <Main product={filterProductArrayForMain} categories={categoriesName}/>
    </div>
  );
}
