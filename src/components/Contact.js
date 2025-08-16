import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        action="https://formsubmit.co/sathvika.chekuri@gmail.com"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <input type="hidden" name="_captcha" value="false" />
        <div className="pb-8">
          <p className="text-4xl text-black-300 font-bold inline border-b-4 border-pink-600">
            Contact
          </p>
          <p className="text-white-300 py-4">
            Submit the form below or shoot an email - sathvika.chekuri@gmail.com
          </p>
        </div>
        <input
          className="pl-2 py-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="pl-2 bg-[#ccd6f6]"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
