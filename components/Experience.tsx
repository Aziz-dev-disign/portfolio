import React from "react";
import ExperienceItems from "./ExperienceItems";
import { experiencesItems } from "@/constant";

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>

      {experiencesItems.map((item, index) => (
        <ExperienceItems
          key={index}
          profileRole={item.profileRole}
          workType={item.workType}
          startDate={item.startDate}
          endDate={item.endDate}
          companyName={item.companyName}
          tasks={item.tasks}
          skills={item.skills}
        />
      ))}
    </section>
  );
};

export default Experience;
