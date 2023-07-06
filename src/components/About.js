import React from "react";
import photo from "../assets/projects/image.jpeg";

const About = () => {
  return (
    <div name="about" className=" w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-row justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2">
          <div className="">
            <img className="rounded-full w-96" src={photo} alt="" />
          </div>
          <div className="">
            <p className=" text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
            <p className="mt-6">
              Hi👋 &nbsp;I'm Anurakti Arora, nice to meet you.
            </p>
            <br></br>
            <p>
              I started working as a Software Engineer in 2021 after completing
              Full Stack Development certification from
              <a className="text-pink-600" href="https://www.newtonschool.co/">
                {" "}
                Newton School
              </a>
              . Before transitioning into IT sector, I worked for 6 years in a
              government bank. I have experience in developing fast, responsive
              and dynamic web applications.
            </p>
            <br></br>
            <p>
              Currently I am looking for a job as a Front End/Full Stack
              Developer in the UK.<br></br>Please feel free to contact me at
              anuraktiarora92@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
