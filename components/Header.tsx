import Link from "next/link";

export const Header = () => {
    return (
        <header className="max-w-7xl mx-auto w-full">
            <nav className="flex items-center justify-between flex-wrap bg-blue-600 p-6 rounded-t-lg mt-2">
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link href="/">
                            <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                                Home
                            </a>
                        </Link>
                        <Link href="/products">
                            <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                                Products(SSG)
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                                Contact
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}