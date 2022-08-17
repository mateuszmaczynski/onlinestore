import { Main } from "../../components/Main";
import { ProductDetails } from "../../components/Product";
import Link from "next/link";
import {GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType} from "next";
import {serialize} from "next-mdx-remote/serialize";
import {apolloClient} from "../../graphql/apolloClient";
// import {gql} from "@apollo/client";

import {
    GetProductDetailsBySlugDocument,
    GetProductDetailsBySlugQuery,
    GetProductDetailsBySlugQueryVariables, GetProductsSlugsDocument, GetProductsSlugsQuery
} from "../../generated/graphql";

// export interface StoreApiResponse {
//     category: string;
//     description: string;
//     longDescription: string;
//     id: string;
//     image: string;
//     price: number;
//     // rating: {
//     //     rate: number;
//     //     count: number;
//     // };
//     rating: number;
//     title: string;
// }

const ProductIdPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    if(!data) {
        return <div>Coś poszło nie tak</div>
    }

    return (
        <div>
            <Main>
                <div className="pt-2 pl-2">
                    <Link href="/products-csr">
                        <a>Wróć do strony głównej</a>
                    </Link>
                </div>
                <ul className="w-full mb-2">
                    <li key={data.slug}>
                        <ProductDetails data={{
                            description: data.description,
                            id: data.slug,
                            longDescription: data.longDescription,
                            price: data.price,
                            rating: 5,
                            thumbnailUrl: data.images[0].url,
                            thumbnailAlt: data.name,
                            title: data.name
                        }}/>
                    </li>
                </ul>
            </Main>
        </div>
    );
};
export default ProductIdPage;

export const getStaticPaths = async () => {

    // const res = await fetch('https://naszsklep-api.vercel.app/api/products');
    // const data: StoreApiResponse[] = await res.json();
    const { data,  } = await apolloClient.query<GetProductsSlugsQuery>({
        query: GetProductsSlugsDocument
    })

    return {
        paths: data.products.map((product) => {
            return {
                params: {
                    productId: product.slug,
                },
            };
        }),
        fallback: false,
    }
}

export const getStaticProps = async ({
    params
}: InferGetStaticPaths<typeof getStaticPaths>) => {

    if(!params?.productId){
        return {
            props: {},
            notFound: true,
        }
    }

    const { data } = await apolloClient.query<
    GetProductDetailsBySlugQuery,
    GetProductDetailsBySlugQueryVariables
    >({
        variables: {
            slug: params?.productId
        },
        query: GetProductDetailsBySlugDocument
    })
    
    // const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${params.productId}`);
    // const data: StoreApiResponse | null = await res.json();

    if (!data.product){
        return {
            props: {},
            notFound: true,
        }
    }

    return {
        props: {
            data: {
                ...data.product,
                longDescription:  await serialize(data.product.description)
            }
        },
    };
};

export type InferGetStaticPaths<T> = T extends () => Promise<{
        paths: Array<{ params: infer R }>;
    }>
    ? { params?: R }
    : never;
