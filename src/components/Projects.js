import React from "react";
import { projects } from "../project-data";
import { ReactComponent as Deploy } from './assets/deploy.svg'
import { ReactComponent as Github } from './assets/github.svg'

export default function Projects() {
    return (
        <section id="portfolio" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Apps
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        All apps are deployed and the GitHub links have been provided.
                    </p>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Mouse over the gif for more information about each app.
                    </p>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Feel free to explore!
                    </p>
                </div>
                <div className="flex flex-wrap -m-4 justify-center">
                    {projects.map((project, i) => (
                        <div className='flex flex-col justify-center'>
                            <div
                                key={i}
                                className="w-full p-4">
                                <div className="flex relative w-full h-full object-cover object-center">
                                    <img
                                        alt="portfolio"
                                        className="absolute w-full h-full object-center object-scale-down"
                                        src={project.image} />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-700 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            {project.subtitle}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">
                                            {project.title}
                                        </h1>
                                        <p className="leading-relaxed">{project.description}</p>
                                    </div>
                                </div>

                            </div>
                            <div className='flex inline-flex justify-center'>
                                <a href={project.deployLink} className='flex inline-flex px-5 pb-10 relative w-50 h-50 bg-gray-900 opacity-100'><Deploy /></a>
                                <a href={project.githubLink} className='flex inline-flex px-5 pb-10 relative w-auto bg-gray-900 opacity-100'><Github /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}