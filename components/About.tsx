/* eslint-disable react/no-unescaped-entities */
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center">
          As an experienced web and mobile developer with a few years' practice,
          I'm a passionate software engineer who excels at the complex dance
          between logic and creativity.
          <br />
          <br />
          With a passion for creating elegant solutions, I confidently navigate
          the ever-changing landscape of software development. My journey
          involves translating concepts into code, creating fluid user
          experiences and constantly exploring the boundaries of what's
          possible. My particular expertise lies in web development, where I
          have gained solid experience in designing and implementing
          high-performance, user-friendly solutions. My commitment to technical
          excellence and my ability to rise to the challenges of web development
          make me a dedicated professional, ready to bring significant
          innovation to any project.
        </p>
        <span className="text-gray-300 text-center border p-2 rounded-md mt-2">English and French spoken</span>
      </div>
    </section>
  );
};

export default About;
