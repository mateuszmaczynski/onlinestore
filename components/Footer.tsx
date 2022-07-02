import Link from "next/link";

export const Footer = () => {
    const currentDate = new Date().getFullYear();
    return (
        <footer
            className="max-w-7xl mx-auto w-full p-2 mb-2 bg-blue-600 shadow rounded-b-lg shadow md:flex md:items-center md:justify-between md:p-6">
            <span className="text-sm text-white sm:text-center">© {currentDate} All Rights Reserved</span>
            <div className="sm:flex sm:items-center sm:justify-between text-center">
                <Link href="/products-csr" className="hover:underline">
                    <a className="flex items-center mb-4 sm:mb-0 mr-6 text-white">
                        Products(CSR)
                    </a>
                </Link>
                <Link href="/contact" className="hover:underline">
                    <a className="flex items-center mb-4 mr-6 sm:mb-0 mr-6 text-white">
                        Contact
                    </a>
                </Link>
            </div>
        </footer>
    )
}