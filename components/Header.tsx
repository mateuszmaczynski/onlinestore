export const Header = () => {
    return (
        <header className="max-w-7xl mx-auto w-full">
            <nav className="flex items-center justify-between flex-wrap bg-blue-600 p-6 rounded-t-lg mt-2">
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a href="/"
                           className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            Home
                        </a>
                        <a href="products-csr"
                           className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            Products
                        </a>
                        <a href="/contact"
                           className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}