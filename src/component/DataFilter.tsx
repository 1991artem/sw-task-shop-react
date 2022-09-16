import { ICategories, IProductForMain, IProductPrice, IPrice, IProduct, ICart } from './interfaces';

export class DataFilter {
    static data: ICategories[];
    constructor(data: ICategories[]){
        DataFilter.data = data
    }
    filterProductByCategory(categoryName: string): ICategories {
        let selectedCategories: ICategories | {} = {}
        DataFilter.data.forEach((categories: ICategories) => {
          if(categories.name === categoryName){
            selectedCategories = categories;
          }
        });
        return selectedCategories as ICategories
    }

    filterConfigProductForMainCatalog(categoryName: string, currency: string): IProductForMain[]{
        let filterProductArray: IProductForMain[] = [];
        this.filterProductByCategory(categoryName).products?.forEach(product=>{
          let filterProduct: IProductForMain = {
            name: product.name,
            img: product.gallery[0],
            id:product.id,
            price: {} as IPrice
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
        return filterProductArray as IProductForMain[];
    }
    separateСategoriesName(){
        return DataFilter.data.map((element)=>{
            return element.name
          });
    }
    getProductDataForCard(categoryName: string, product: string): IProduct | undefined{
        return this.filterProductByCategory(categoryName).products?.filter((prod:IProduct)=> prod.id === product)[0];
    }
    static filterDataForCart(item: ICart): IProduct {
      //DataFilter.cartSort(item)
      console.log(item)
      let productForCart: IProduct | {} = {};
      DataFilter.data.forEach((categories: ICategories) =>{
        categories.products?.forEach((product: IProduct) => {
          if(product.id === item.id) productForCart = product
        })
      })
      return productForCart as IProduct;
    }
}