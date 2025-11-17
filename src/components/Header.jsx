import { Link } from "react-router-dom";
import images from "../utils/images";
import { useEffect, useState } from "react";

function Header() {

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // Scroll DOWN → header hilang
            setShow(false);
        } else {
            // Scroll UP → header muncul
            setShow(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`
                fixed top-0 left-0 right-0 z-50 
                bg-white shadow 
                transition-transform duration-300
                ${show ? "translate-y-0" : "-translate-y-full"}
            `}>
            <div id='task-bar' className='border-b border-[#BEBCBD] h-[65px] flex items-center justify-center'>
                <div id='frame-510' className="w-[1160px] h-[45px] grid grid-cols-[95px_484px_420px_auto]">

                    <div id='logo'>
                        <img
                            src={images["xmas-mall-logo.svg"]}
                            alt="Logo"
                            className="cursor-pointer"
                        />
                    </div>

                    <div className="pl-[100px] flex items-center justify-between gap-6 px-auto text-[#807D7E] text-base font-medium">
                        <button className="rounded hover:text-[#8A33FD] hover:scale-105  transition-all duration-300 ">Shop</button>
                        <button className="rounded hover:text-[#8A33FD] hover:scale-105  transition-all duration-300 ">Men</button>
                        <button className="rounded hover:text-[#8A33FD] hover:scale-105  transition-all duration-300 ">Women</button>
                        <button className="rounded hover:text-[#8A33FD] hover:scale-105  transition-all duration-300 ">Combos</button>
                        <button className="rounded hover:text-[#8A33FD] hover:scale-105  transition-all duration-300 ">Joggers</button>
                    </div>

                    <div id='search' className="flex items-center justify-center ">
                        <div className="w-[267px]">
                            <label className="input bg-[#F6F6F6] rounded border border-transparent">
                                <svg
                                    className="h-[1em] opacity-50"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>

                                <input
                                    type="search"
                                    required
                                    placeholder="Search"
                                    className="text-[#3F4646]"
                                />
                            </label>
                        </div>
                    </div>

                    <div id='frame-389' className="flex items-center justify-end gap-4">
                        <Link>
                            <img src={images["love.svg"]} alt="love" className="cursor-pointer hover:scale-110 transition" />
                        </Link>

                        <Link to="/cart">
                            <img src={images["cart.svg"]} alt="user" className="cursor-pointer hover:scale-110 transition h-[44px] w-[44px]" />
                        </Link>

                        <Link>
                            <img src={images["user.svg"]} alt="cart" className="cursor-pointer hover:scale-110 transition" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
