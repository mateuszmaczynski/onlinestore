import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

type Pagination = Array<number>;

export const Pagination = () => {
    const numberOfPages = 10;
    const initialPaginationCollection = Array.from(Array(numberOfPages).keys()).map((n) => n + 1)
    const [paginationCollection, setPaginationCollection] = useState<Pagination>(initialPaginationCollection);
    const [currentPage, setCurrentPage] = useState(1)

    let setNumber = () => {
        let values: Array<number> = [];
        console.log('initialPaginationCollection =', initialPaginationCollection);
        let arrayLength = initialPaginationCollection.length
        for (let i = 0; i < 3; i++) {
            values.push(initialPaginationCollection[i]);
        }
        for (let j = 3; j > 0; j--) {
            values.push(initialPaginationCollection[arrayLength - j])
        }
        return values;
    }

    const [displayNumbersOfPages, setDisplayNumbersOfPages] = useState(setNumber());


    const isActiveClass = "border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium";
    const inactiveClass = "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium";

    return (
        <nav className="w-full border-t border-gray-200 px-4 flex items-center justify-center sm:px-0">
            <div className="hidden md:-mt-px md:flex">
                <Link href={`/products/page/${displayNumbersOfPages[0]}`}>
                    <a
                        href="#"
                        className={`${currentPage === displayNumbersOfPages[0] ? isActiveClass : inactiveClass}`}
                    >
                        {displayNumbersOfPages[0]}
                    </a>
                </Link>
                <Link href={`/products/page/${displayNumbersOfPages[1]}`}>
                    <a
                        href="#"
                        className={`${currentPage === displayNumbersOfPages[1] ? isActiveClass : inactiveClass}`}
                        aria-current="page"
                    >
                        {displayNumbersOfPages[1]}
                    </a>
                </Link>
                <Link href={`/products/page/${displayNumbersOfPages[2]}`}>
                    <a
                        href="#"
                        className={`${currentPage === displayNumbersOfPages[2] ? isActiveClass : inactiveClass}`}
                    >
                        {displayNumbersOfPages[2]}
                    </a>
                </Link>
                <span
                    className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                ...
                </span>
                <Link href={`/products/page/${displayNumbersOfPages[3]}`}>
                    <a
                        href="#"
                        className={`${currentPage === displayNumbersOfPages[3] ? isActiveClass : inactiveClass}`}
                    >
                        {displayNumbersOfPages[3]}
                    </a>
                </Link>
                <Link href={`/products/page/${displayNumbersOfPages[4]}`}>
                    <a
                        href="#"
                        className={`${currentPage === displayNumbersOfPages[4] ? isActiveClass : inactiveClass}`}
                    >
                        {displayNumbersOfPages[4]}
                    </a>
                </Link>
                <Link href={`/products/page/${displayNumbersOfPages[5]}`}>
                    <a
                        href="#"
                        className={`${currentPage === displayNumbersOfPages[5] ? isActiveClass : inactiveClass}`}
                    >
                        {displayNumbersOfPages[5]}
                    </a>
                </Link>
            </div>
        </nav>
    )
}