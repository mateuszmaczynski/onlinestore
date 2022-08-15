import { Main } from "../../components/Main";
import { ProductListItem } from "../../components/Product";
import {InferGetStaticPropsType} from "next";
import {apolloClient} from "../../graphql/apolloClient";
import { gql } from "@apollo/client";
// import {Pagination} from "../../components/Pagination";

// SSG
interface StoreApiResponse {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    // rating: {
    //     rate: number;
    //     count: number;
    // };
    rating: number;
    title: string;
}

const ProductPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div className=" flex flex-col min-h-screen ">
            <Main>
                <div className="p-16">
                    <ul className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {data.products.map((product) => (
                            <ProductListItem key={product.slug} data={{
                                id: product.slug,
                                price: product.price,
                                rating: product.rating,
                                thumbnailUrl: product.images[0].url,
                                thumbnailAlt: product.name,
                                title: product.name
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
    const { data,  } = await apolloClient.query<GetProductsListResponse>({
        query: gql`
            query GetProductsList {
                products {
                    slug
                    name
                    price
                    rating
                    images(first: 1){
                        url
                    }
                }
            }
        `
    })

    return {
        props: {
            data
        }
    }
};

export interface GetProductsListResponse {
    products: Product[];
}

export interface Product {
    slug: string;
    name: string;
    price: number;
    rating: number
    images: Image[];
}

export interface Image {
    url: string;
}