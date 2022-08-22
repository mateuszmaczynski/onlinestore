import { useState } from "react";
import { Main } from "../components/Main";
import { ProductListItem } from "../components/Product";
import { useQuery } from "react-query";
// import {Pagination} from "../components/Pagination";

// CSR
export interface ProductProps {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

const ProductPageCSR = () => {
  const [currentOffset, setOffset] = useState(0);
  const numberOffers = 5;

  const getProducts = async () => {
    const res = await fetch(
      `https://naszsklep-api.vercel.app/api/products?take=${numberOffers}&offset=${currentOffset}`
    );
    const data: ProductProps[] = await res.json();
    return data;
  };

  const { data, isLoading, error } = useQuery("products", getProducts);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen ">
      <Main>
        <div className="p-16">
          <ul className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {data.map((product) => (
              <ProductListItem
                key={product.id}
                data={{
                  id: product.id,
                  price: product.price,
                  rating: product.rating.rate,
                  thumbnailUrl: product.image,
                  thumbnailAlt: product.title,
                  title: product.title,
                }}
              />
            ))}
          </ul>
        </div>
        {/*<Pagination />*/}
      </Main>
    </div>
  );
};

export default ProductPageCSR;
