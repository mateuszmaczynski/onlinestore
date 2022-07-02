import Image from "next/image";
import Link from "next/link";
import {Rating} from "./Rating";

interface ProductDetails {
    description: string;
    id: number;
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
                            <h3 className="text-sm text-black">

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
        </div>
    )
}

export const ProductDetails = ({
   data: {
       description,
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
            <div>
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
            <p className="p-8">{description}</p>
            <Rating rating={rating}/>
        </div>
    )
}