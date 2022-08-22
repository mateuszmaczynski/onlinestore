import { Main } from "../../components/Main";
import { ProductListItem } from "../../components/Product";
import { InferGetStaticPropsType } from "next";
import { apolloClient } from "../../graphql/apolloClient";
import { gql } from "@apollo/client";
import {
  GetProductsListDocument,
  GetProductsListQuery,
} from "../../generated/graphql";
// import {Pagination} from "../../components/Pagination";

// SSG
interface StoreApiResponse {
  category: string;
  description: string;
  id: string;
  image: string;
  price: number;
  // rating: {
  //     rate: number;
  //     count: number;
  // };
  rating: number;
  title: string;
}

const ProductPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className=" flex flex-col min-h-screen ">
      <Main>
        <div className="p-16">
          <ul className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {data.products.map((product) => (
              <ProductListItem
                key={product.slug}
                data={{
                  id: product.slug,
                  price: product.price,
                  rating: 5,
                  thumbnailUrl: product.images[0].url,
                  thumbnailAlt: product.name,
                  title: product.name,
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

export default ProductPage;

export const getStaticProps = async () => {
  // const res = await fetch('https://naszsklep-api.vercel.app/api/products');
  // const data: StoreApiResponse[] = await res.json();
  const { data } = await apolloClient.query<GetProductsListQuery>({
    query: GetProductsListDocument,
  });

  return {
    props: {
      data,
    },
  };
};
