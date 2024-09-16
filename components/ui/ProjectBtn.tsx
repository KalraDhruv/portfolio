"use client";
import React from 'react';
import {useSwiper} from "swiper/react";
import {PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi';

interface ProjectBtnProps {
    containerStyles: string;
    btnStyles: string;
    iconStyles: string;
}
const ProjectBtn:React.FC<ProjectBtnProps> = ({ containerStyles, btnStyles, iconStyles})=>{
    const swiper = useSwiper();
    return (
        <div className={containerStyles}>
            <button className={btnStyles}>
                <PiCaretLeftBold className={iconStyles} onClick={
                    ()=>swiper.slidePrev()
                }/>
            </button>
            <button className={btnStyles} onClick={
                ()=>swiper.slideNext()
            }>
                <PiCaretRightBold className={iconStyles} />
            </button>
        </div>
    )
}

export default ProjectBtn;