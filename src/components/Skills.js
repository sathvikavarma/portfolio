import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import React from "../assets/react.png";
import GitHub from "../assets/github.png";
import NODE from "../assets/node.png";
import Tailwind from "../assets/tailwind.png";
import Firebase from "../assets/firebase.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen text-gray-300 py-16 md:py-20 lg:py-24">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
  <div className="text-center">
    <p className="text-4xl text-black font-bold inline border-b-4 border-pink-600 ">
      Skills
    </p>
    <p className="text-white py-4 font-bold">These are the technologies I've worked with</p>
  </div>
       <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8">
  {[{ src: HTML, label: "HTML" },
    { src: CSS, label: "CSS" },
    { src: Javascript, label: "JAVASCRIPT" },
    { src: React, label: "REACT" },
    { src: GitHub, label: "GITHUB" },
    { src: NODE, label: "NODE JS" },
    { src: Tailwind, label: "Tailwind" },
    { src: Firebase, label: "Firebase" }].map((tech, index) => (
    <div
      key={index}
      className="bg-gray text-gray-800 shadow-md shadow-gray-700 rounded-lg p-6 hover:scale-105 duration-300"
    >
      <img className="w-20 mx-auto" src={tech.src} alt={tech.label} />
      <p className="my-4 font-semibold">{tech.label}</p>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Skills;
