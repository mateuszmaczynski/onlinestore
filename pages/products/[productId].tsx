import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { ProductDetails } from "../../components/Product";
import Link from "next/link";
import {GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType} from "next";

export interface StoreApiResponse {
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

const ProductIdPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    if(!data) {
        return <div>Coś poszło nie tak</div>
    }

    return (
        <div>
            <Header />
            <Main>
                <div className="p-16">
                    <Link href="/products-csr">
                        <a>Wróć</a>
                    </Link>
                </div>
                <ul className="w-full my-4">
                    <li key={data.id}>
                        <ProductDetails data={{
                            description: data.description,
                            price: data.price,
                            rating: data.rating.rate,
                            thumbnailUrl: data.image,
                            thumbnailAlt: data.title,
                            title: data.title
                        }}/>
                    </li>
                </ul>
            </Main>
            <Footer />
        </div>
    );
};

export default ProductIdPage;

export const getStaticProps = async ({params}: GetStaticPropsContext<{id: string}>) => {
    if(!params?.id){
        return {
            props: {},
            notFound: true,
        }
    }

    const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${params.id}`);
    const data: StoreApiResponse | null = await res.json();

    return {
        props: {
            data
        },
    };
};
