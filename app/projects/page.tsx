"use client"
import React,{useState} from 'react'
import {motion} from 'framer-motion';

import{Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub} from "react-icons/bs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import ProjectBtn from "@/components/ui/ProjectBtn"
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        code: "01",
        category: "Multithreading",
        title: "Bunny Finder",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicinig elit. Cupiditate magnam modi",
        technologies: [
            {name: "HTML 5"},
            {name: "CSS 3"},
            {name: "JavaScript"}
        ],
        image: "/images/torii.jpg",
        github:"",
    },
    {
        code: "02",
        category: "fullstack",
        title: "No Tree No Life",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicinig elit. Cupiditate magnam modi",
        technologies: [
            {name: "HTML 5"},
            {name: "CSS 3"},
            {name: "JavaScript"}
        ],
        image: "/images/kingdom.jpg",
        github:"",
    },
    {
        code: "03",
        category: "frontend",
        title: "Beach Time",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicinig elit. Cupiditate magnam modi",
        technologies: [
            {name: "HTML 5"},
            {name: "CSS 3"},
            {name: "JavaScript"}
        ],
        image: "/images/moon.jpg",
        github:"",
    }
]

export default function Projects() {
    const handleSlideChange =(swiper:Swiper) => {
        const currentIndex=swiper.activeIndex;
        setProject(projects[currentIndex]);
    }
    const [project, setProject]= useState(projects[0]);
    return(
      <motion.section initial={{opacity:0}} animate={{opacity: 1}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:[h-460px] flex flex-col
                xl:justify-between order-2 xl:order-none"> 
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        {/** Project Number */}
                        <div className="text-8xl leading-none font-extrabold text-darkCharcoal text-outline">
                            {project.code}
                        </div>
                        {/** Project Category */}
                        <h2 className="text-[42px] font-bold leading-none text-darkCharcoal group-hover:text-modernCyan 
                        transition-all duration-500 capitalize">
                            {project.category} project
                        </h2>
                        {/** Project Description */}
                        <p className="text-darkCharcoal">{project.description}</p>
                        <ul className="flex gap-3">
                            {project.technologies.map((item,index)=>{
                                return(
                                    <li key={index} className="text-xl text-grayishBlue">
                                        {item.name}
                                        {/** Removing the trailing comma */}
                                        {index !== project.technologies.length -1 && ","}
                                    </li>
                                )

                            })}
                        </ul>
                        {/** Border */}
                        <div className="border border-grayishBlue"></div>

                        <div className="flex items-center gap-4">
                            {/** Live project Button*/}
                            <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-grayishBlue flex justify-center items-center group">
                                            <BsGithub className="text-lightGrey text-3xl group-hover:text-modernCyan"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github</p>

                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            
                            
                        </div>

                    </div>
                </div>
                <div className="w-full xl:w-[50%]">
                  <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  className="xl:h=[520px] mb-12"
                  onSlideChange={handleSlideChange}>

                    {projects.map((project, index)=>{
                        return (<SwiperSlide className="w-full"key={index}>
                            <div className="h-[460px] relative group flex justify-center items-center bg-darkCharcoal">
                                <div className="relative w-full h-full">
                                    <Image 
                                      src={project.image}
                                      fill
                                      className="object-cover"
                                      alt=""
                                    />

                                </div>
                                
                            </div>
                        </SwiperSlide>)

                    })}
                    <ProjectBtn />
                  </Swiper>

                </div>

            </div>
        </div>

      </motion.section> 
    )

}