import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItems from "./ProjectItems";
import { projectItems } from "@/constant";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className="grid grid-cols-2 gap-2 container mx-auto 2xl">
        {projectItems.length > 0 && projectItems.map((item, index) => (
          <ProjectItems key={index} link={item.link} imgSrc={item.imgSrc} title={item.title} subTitle={item.subTitle}/>
        ))}
      </div>
    </section>
  );
};

export default Projects;
