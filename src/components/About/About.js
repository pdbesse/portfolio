import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-gray-700">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hello. I'm Phil Besse.
                    </h1>
                    <p className="lg:inline-block text-white text-lg">I'm a fullstack web developer.
                    </p>
                </div>
                <img alt='portrait' src='./assets/images/self.jpg'></img>
            </div>
        </section>
    );
}