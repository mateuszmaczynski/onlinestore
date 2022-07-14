import { Main } from "../../components/Main";
import { ProductDetails } from "../../components/Product";
import Link from "next/link";
import {GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType} from "next";

export interface StoreApiResponse {
    category: string;
    description: string;
    longDescription: string;
    id: number;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
    title: string;
}

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
                    <li key={data.id}>
                        <ProductDetails data={{
                            description: data.description,
                            id: data.id,
                            longDescription: data.longDescription,
                            price: data.price,
                            rating: data.rating.rate,
                            thumbnailUrl: data.image,
                            thumbnailAlt: data.title,
                            title: data.title
                        }}/>
                    </li>
                </ul>
            </Main>
        </div>
    );
};
export default ProductIdPage;



export const getStaticPaths = async () => {
    const res = await fetch('https://naszsklep-api.vercel.app/api/products');
    const data: StoreApiResponse[] = await res.json();

    return {
        paths: data.map((product) => {
            return {
                params: {
                    productId: product.id.toString(),
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

    const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${params.productId}`);
    const data: StoreApiResponse | null = await res.json();

    return {
        props: {
            data
        },
    };
};

export type InferGetStaticPaths<T> = T extends () => Promise<{
        paths: Array<{ params: infer R }>;
    }>
    ? { params?: R }
    : never;