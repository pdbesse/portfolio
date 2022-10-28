import React from "react";
import { skills } from "./skills-data";
import resume from '../assets/Phillip-Besse-Resume.pdf';

export default function Resume() {
  return (
    <section id="resume">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>

          <a href={resume} target="_blank" rel="noreferrer noopener" className="lg:w-2/3 mx-auto leading-relaxed text-base text-white" download>
            <button className="w-100inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
              Download my resume.
            </button>
          </a>

        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}