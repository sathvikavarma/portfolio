import photo from "../assets/coder.png";

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen text-gray-300 px-4 py-8">
      <div className="max-w-[1000px] mx-auto flex flex-col md:grid md:grid-cols-2 items-center gap-8 mt-32">
        {/* Image Section */}
        <div className="flex justify-center">
          <img className="rounded-full w-64 md:w-96" src={photo} alt="Coder" />
        </div>
        {/* Text Section */}
        <div>
          <p className="text-4xl text-black font-bold inline border-b-4 border-pink-600">
            About
          </p>
          <p className="mt-6 text-white text-lg">
            Hi 👋 I'm <span className="font-semibold text-pink-400">Sathvika Chekuri</span>, nice to meet you.
          </p>
          <p className="mt-4 text-white text-base leading-relaxed">
            I'm a full-stack developer who loves building efficient, scalable, and intuitive applications. I thrive on solving complex problems, optimizing performance, and creating seamless user experiences. With 3 years of experience in the IT industry, I've worked on diverse projects that showcase my skills and passion for development.
          </p>
          <p className="mt-4 text-white text-base">
            You can explore some of my projects and the skills I've acquired throughout my journey as a Software Engineer.
          </p>
          <p className="mt-4 text-white text-base">
            <span className="font-semibold text-pink-400">Currently open to opportunities!</span> <br />
            Feel free to reach out at <a href="mailto:sathvika.chekuri@gmail.com" className="underline text-pink-400">sathvika.chekuri@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
