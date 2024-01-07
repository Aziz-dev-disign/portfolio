import React from "react";

export interface ExperienceItemsProps {
  profileRole: string;
  startDate: string;
  endDate: string;
  companyName: string;
  workType: string;
  tasks: string[];
  skills: string[];
}

const ExperienceItems = ({
  tasks,
  profileRole,
  startDate,
  endDate,
  companyName,
  workType,
  skills,
}: ExperienceItemsProps) => {
  return (
    <div className=" container mx-auto 2xl ">
      <div className="flex  flex-row justify-between pt-5">
        <p className="text-gray-300 ">
          <span className="font-semibold">{profileRole} <span>( {workType} )</span></span>
        </p>
        <p className="text-gray-300">
          {startDate} - {endDate}, {companyName}
        </p>
      </div>
      <div className="text-gray-300 pt-5">
        {tasks.map((task, index) => (
          <ul
            key={index}
            className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400"
          >
            <li className="flex items-center">
              <svg
                className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              {task}
            </li>
          </ul>
        ))}
      </div>
      <div className="flex-col flex sm:flex-row ">
        {skills.map((item, index) => (
          <div
            key={index}
            className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItems;
