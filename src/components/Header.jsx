import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo + Nama Ecommerce */}
                    <Link to="/" className="relative">
                        <div className="flex items-center space-x-2 cursor-pointer">
                            <img
                                className="h-10 w-10"
                                src=""
                                alt="Logo"
                            />
                            <span className="text-xl font-bold text-gray-800">Rehan Store</span>
                        </div>

                    </Link>

                    {/* Menu kanan: Button Pesanan + Icon */}
                    <div className="flex items-center space-x-4">
                        <button className="btn btn-ghost">Pesanan</button>
                        <Link to="/cart" className="relative">
                            <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-gray-900" />
                            {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                                
                            </span> */}
                        </Link>

                        <button>
                            <UserCircleIcon className="h-6 w-6 text-gray-700 hover:text-gray-900" />
                        </button>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header
