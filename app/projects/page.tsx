"use client"
import React,{useState} from 'react'
import {motion} from 'framer-motion';

import{Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub} from "react-icons/bs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
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
        image: "/public/owl.jpg",
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
        image: "/public/owl.jpg",
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
        image: "/public/owl.jpg",
        github:"",
    }
]
export default function Projects() {
    return(
       <div>Projects</div> 
    )

}