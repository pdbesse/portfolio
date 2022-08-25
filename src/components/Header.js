// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
    return (
        <header className="bg-gray-900 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="title-font font-medium text-white mb-4 md:mb-0">
                    <p className="ml-3 text-xl">
                        Phil Besse
                    </p>
                </div>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <a href="#about" className="mr-5 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded">
                        About Me
                    </a>
                    <a href="#portfolio" className="mr-5 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded">
                        Portfolio
                    </a>
                    <a href="#resume" className="mr-5 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded">
                        Resume
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                    Hire Me
                </a>
            </div>
        </header>
    );
}