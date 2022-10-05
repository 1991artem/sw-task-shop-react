import {ProductCard} from "./ProductCard";
import { ICategories, IProduct } from "../interfaces";
import Title from "./Title";

interface IContainer {
  category: ICategories
}

export function Container({category}: IContainer) {
  return (
    <>
    <Title name={category.name}></Title>
      <div className="main-container_product">
        {category.products.map((item: IProduct) => {
          return <ProductCard item={item} key={item.id} />;
        })}
      </div>
    </>
  );
}
