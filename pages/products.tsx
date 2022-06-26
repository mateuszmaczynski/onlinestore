import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { useQuery } from "react-query";

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

const getProducts = async () => {
  const res = await fetch(`http://fakestoreapi.com/products/`);
  const data: ProductProps[] = await res.json();
  return data;
};

const ProductPageCSR = () => {
  const {data, isLoading, error} = useQuery("products", getProducts);

  if (isLoading){
    return <div>Loading...</div>
  }

  if (!data || error){
    return <div>Something went wrong...</div>
  }

  return (
      <div className=" flex flex-col min-h-screen ">
        <Header />
        <Main>
          <div className="p-16">
            <ul className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {data.map((product) => (
                 <div>
                   {product.title}
                 </div>
              ))}
            </ul>
          </div>
        </Main>
        <Footer />
      </div>
  );
};

export default ProductPageCSR;
