import { useEffect, useState } from "react";

const phrases = [
  "I'm a nature lover...",
  "I'm a coffee addict...",
  "I'm a movie freak...",
  "I'm a travel enthusiast...",
  "I'm a tech geek...",
];
const Home = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    if (!deleting && charIndex <= currentPhrase.length) {
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (!deleting && charIndex > currentPhrase.length) {
      timeout = setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <div name="home" className="w-full h-screen flex items-start justify-center pt-24">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col items-center mt-16">
        <p className="text-pink-600 text-2xl font-bold flex items-center">
          &nbsp; Hi, I am <span className="ml-2">👋</span>
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-white text-center">
          Sathvika Chekuri
        </h1>
        <h3 className="text-4xl sm:text-6xl font-bold text-blue-500 my-2 text-center">
          Software Engineer
        </h3>
        <p className="text-xl font-bold text-white typing-cursor mt-2 text-center">
          {text}
        </p>
      </div>
    </div>
  );
};
export default Home;