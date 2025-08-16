import photo from "../assets/coder.png";

const About = () => {
  return (
    <div name="about" className=" w-full h-screen text-gray-300">
      <div className="flex flex-row justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2">
          <div className="">
            <img className="rounded-full w-96" src={photo} alt="" />
          </div>
          <div className="">
            <p className=" text-4xl text-black font-bold inline border-b-4 border-pink-600">
              About
            </p>
           <p className="mt-6 text-white">
  Hi👋 &nbsp;I'm Sathvika Chekuri, nice to meet you.
</p>
<br />
<p className="text-white">
  <br />
  Hey! I'm a full-stack developer who loves building efficient, scalable, and intuitive applications. 
  I thrive on solving complex problems, optimizing performance, and creating seamless user experiences. 
  I have 3 years of experience as a Software Engineer in the IT
  industry.
  <br />
  You can see some of my projects and the skills that I have
  acquired in my journey as a Software Engineer.
</p>
<br />
<p className="text-white">
  Currently, I am looking out for a job<br />Please
  feel free to contact me at sathvika.chekuri@gmail.com
</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
