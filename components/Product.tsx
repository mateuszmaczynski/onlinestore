import Image from "next/image";
import Link from "next/link";
import {Rating} from "./Rating";
import {NextSeo} from "next-seo";
// import {HandlingUrlReactMarkdown} from "../components/HandlingUrlReactMarkdown";
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";
import {useCartState} from "./Cart/CartContext";

interface ProductDetails {
    description: string;
    id: number;
    longDescription: MDXRemoteSerializeResult<Record<string, unknown>>;
    price: number;
    rating: number;
    thumbnailUrl: string;
    thumbnailAlt: string;
    title: string;
}

type ProductListItem = Pick<ProductDetails, "id" | "price" | "rating" | "thumbnailAlt" | "thumbnailUrl" | "title">;

interface ProductListItemProps {
    data: ProductListItem;
}

interface ProductDetailsProps {
    data: ProductDetails;
}

export const ProductListItem = ({
    data: {
        id,
        price,
        rating,
        thumbnailAlt,
        thumbnailUrl,
        title
    }
}: ProductListItemProps) => {
    const cartState = useCartState();
    return (
        <div className="p-2 border-2 border-sky-500 rounded-lg shad ow-2xl">
            <Link href={`/products/${id}`}>
                <a>
                    <div className="w-full p-4">
                        <Image
                            src={thumbnailUrl}
                            alt={thumbnailAlt}
                            className="w-full h-full lg:w-full lg:h-full mix-blend-multiply"
                            width={16}
                            height={9}
                            layout="responsive"
                            objectFit="contain"
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-md text-black">
                                <span aria-hidden="true">
                                    {title}
                                </span>
                            </h3>
                        </div>

                        <div className="text-sm font-medium text-black">
                            {`${price} zł`}
                        </div>
                    </div>
                </a>
            </Link>
            <div className="pt=4">
                <Rating rating={rating}/>
            </div>
            <div className="flex justify-center mt-4">
                <button onClick={() => cartState.addItemToCart({
                    id,
                    price,
                    title,
                    count: 1
                })} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg px-5 py-2.5 text-center mr-2 mb-2">
                    Dodaj do koszyka
                </button>
            </div>
        </div>
    )
}

export const ProductDetails = ({
   data: {
       id,
       description,
       longDescription,
       price,
       rating,
       thumbnailAlt,
       thumbnailUrl,
       title
   }
}: ProductDetailsProps) => {
    return (
        <div className="p-4 w-full" >
            <h2 className=" text-2xl font-bold py-8 ">{`${title} - ${price} zł/szt`}</h2>
            <NextSeo
                title={title}
                description={description}
                canonical={`https://onlinestore-nine.vercel.app/${id}`}
                openGraph={{
                    url: `https://onlinestore-nine.vercel.app/${id}`,
                    title: title,
                    description: description,
                    images: [
                        {
                            url: thumbnailUrl,
                            alt: thumbnailAlt,
                            type: 'image/jpeg',
                        },
                    ],
                    site_name: 'Najlepszy sklep internetowy',
                }}
            />
            <div>
                <Image
                    src={thumbnailUrl}
                    alt={thumbnailAlt}
                    className="w-full  h-full lg:w-full lg:h-full mix-blend-multiply"
                    width={16}
                    height={9}
                    layout="responsive"
                    objectFit="contain"
                />
            </div>
            <p className="p-8">{description}</p>
            <article className={"p-4 prose lg:prose-xl"}>
                //executed on server
                <MDXRemote { ...longDescription } />
                //executed on client
                {/*<HandlingUrlReactMarkdown id={id}>{longDescription}</HandlingUrlReactMarkdown>*/}
            </article>
            <Rating rating={rating}/>
        </div>
    )
}
