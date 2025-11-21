import React from "react";
import images from "../utils/images";

const Footer = () => {

    return (
        <footer className="w-full h-[650px] bg-[#3C4242] text-[#F6F6F6] font-sans flex flex-col justify-center">
            <div className="container mx-auto px-8 md:px-16">

                <div className="grid grid-cols-1 md:grid-cols-[142px_121px_162px_394px] mb-7 gap-16 px-14">

                    {/* Kolom 1: Need Help */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold mb-2">Need Help</h3>
                        <a href="#" className="hover:text-gray-300 text-sm">Contact Us</a>
                        <a href="#" className="hover:text-gray-300 text-sm">Track Order</a>
                        <a href="#" className="hover:text-gray-300 text-sm">Returns & Refunds</a>
                        <a href="#" className="hover:text-gray-300 text-sm">FAQ's</a>
                        <a href="#" className="hover:text-gray-300 text-sm">Career</a>
                    </div>

                    {/* Kolom 2: Company */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold mb-2">Company</h3>
                        <a href="#" className="hover:text-gray-300 text-sm">About Us</a>
                        <a href="#" className="hover:text-gray-300 text-sm">euphoria Blog</a>
                        <a href="#" className="hover:text-gray-300 text-sm">euphoriastan</a>
                        <a href="#" className="hover:text-gray-300 text-sm">Collaboration</a>
                        <a href="#" className="hover:text-gray-300 text-sm">Media</a>
                    </div>

                    {/* Kolom 3: More Info */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold mb-2">More Info</h3>
                        <a href="#" className="hover:text-gray-300 text-sm">Term and Conditions</a>
                        <a href="#" className="hover:text-gray-300 text-sm">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300 text-sm">Shipping Policy</a>
                        <a href="#" className="hover:text-gray-300 text-sm">Sitemap</a>
                    </div>

                    {/* Kolom 4: Location */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold">Location</h3>
                        <p className="text-sm">support@euphoria.in</p>
                        <p className="text-sm">Eklingpura Chouraha, Ahmedabad Main Road</p>
                        <p>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>
                    </div>
                </div>

                {/* Bagian Sosial Media & Download App */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-14">

                    {/* Social Media Icons */}
                    <div className="flex gap-2 mb-6 md:mb-0 ">
                        {/* Facebook */}
                        <div className="bg-[#F6F6F6] p-2 rounded-xl w-[37.02px] h-[37.02px] flex items-center justify-center">
                            <img
                                src={images["facebook.svg"]}
                                alt="Logo"
                                className="cursor-pointer"
                            />
                        </div>
                        {/* Instagram */}
                        <div className="bg-[#F6F6F6] p-2 rounded-xl w-[37.02px] h-[37.02px] flex items-center justify-center">
                            <img
                                src={images["instagram.svg"]}
                                alt="Logo"
                                className="cursor-pointer"
                            />
                        </div>
                        {/* Twitter */}
                        <div className="bg-[#F6F6F6] p-2 rounded-xl w-[37.02px] h-[37.02px] flex items-center justify-center">
                            <img
                                src={images["twitter.svg"]}
                                alt="Logo"
                                className="cursor-pointer"
                            />
                        </div>
                        {/* LinkedIn */}
                        <div className="bg-[#F6F6F6] p-2 rounded-xl w-[37.02px] h-[37.02px] flex items-center justify-center">
                            <img
                                src={images["linkedin.svg"]}
                                alt="Logo"
                                className="cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Download App Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Download The App</h3>
                        <div className="flex gap-4">
                            <div className="w-[153px] h-[51px] rounded-md flex items-center justify-center">
                                {/* Google Play */}
                                <img
                                    src={images["play-store.svg"]}
                                    alt="Logo"
                                    className="cursor-pointer"
                                />
                            </div>
                            <div className="w-[153px] h-[51px] rounded-md flex items-center justify-center">
                                {/* App Store */}
                                <img
                                    src={images["app-store.svg"]}
                                    alt="Logo"
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Popular Categories (Accordion Style) */}
                <div className="border-t border-b border-gray-500 py-6 mb-8">
                    <div className="flex justify-between items-center cursor-pointer">
                        <h3 className="text-xl font-bold px-14">Popular Categories</h3>
                        <img className="pr-8" src={images["arrow-down.svg"]} alt="arrow-down" />
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm md:text-base">
                    Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;