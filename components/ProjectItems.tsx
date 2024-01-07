import Link from 'next/link'
import React from 'react'
import Image from "next/image";

export interface ProjectsItemsProps {
    link: string;
    imgSrc: string;
    title: string;
    subTitle: string
}

const ProjectItems = ({title, subTitle, imgSrc, link}: ProjectsItemsProps) => {
  return (
    <Link
    href={link}
    rel="noopener noreferrer"
    target="_blank"
    className="z-[1]"
  >
    <div className="flex-col flex sm:flex-row mb-5">
      <Image
        src={imgSrc}
        height={150}
        width={100}
        alt={title}
        className="rounded-lg"
      />
      <div className="p-3">
        <p className="text-white font-semibold text-xl">{title}</p>
        <p className="text-gray-500 text-[10px]">
          {subTitle}
        </p>
      </div>
    </div>
  </Link>
  )
}

export default ProjectItems
