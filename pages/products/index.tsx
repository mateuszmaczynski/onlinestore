import { Main } from "../../components/Main";
// import {Pagination} from "../../components/Pagination";
import { ProductListItem } from "../../components/Product";
import {InferGetStaticPropsType} from "next";


// SSG
interface StoreApiResponse {
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

const ProductPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div className=" flex flex-col min-h-screen ">
            <Main>
                <div className="p-16">
                    <ul className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {data.map((product) => (
                            <ProductListItem key={product.id} data={{
                                id: product.id,
                                price: product.price,
                                rating: product.rating.rate,
                                thumbnailUrl: product.image,
                                thumbnailAlt: product.title,
                                title: product.title
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
    const res = await fetch('https://naszsklep-api.vercel.app/api/products');
    const data: StoreApiResponse[] = await res.json();

    return {
        props: {
            data
        }
    }
};