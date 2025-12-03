import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import { animate, scroll } from "motion";
import { motion } from 'framer-motion';
import gsap from 'gsap';

const scaleAnimation = {
    initial: {scale: 0, x: "-50%", y: "-50%"},
    open: {scale: 1, x: "-50%", y: "-50%", transition: {duration: 0.4, ease: [0.34, 1.56, 0.64, 1]}},
    close: {scale: 0, x: "-50%", y: "-50%", transition: {duration: 0.4, ease: [0.36, 0, 0.66, -0.56]}}
}

export default function index({
    modal,
    groups
}: {
    modal: any;
    groups: any;
}) {

    const { active, index } = modal;
    const container = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);

    useEffect(() => {
        const moveContainerX = gsap.quickTo(container.current, "left", {duration: 0.8, ease: "power3"})
        const moveContainerY = gsap.quickTo(container.current, "top", {duration: 0.8, ease: "power3"})

        const moveCursorX = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
        const moveCursorY = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})

        const moveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
        const moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
        window.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            moveContainerX(clientX);
            moveContainerY(clientY);
            
            moveCursorX(clientX);
            moveCursorY(clientY);

            moveCursorLabelX(clientX);
            moveCursorLabelY(clientY);
        })
    })

  return (
    <>
        <motion.div ref={container} variants={scaleAnimation} initial={"initial"} animate={active ? "open" : "close"} className='h-[239px] w-[250px] flex items-center justify-center absolute border-5 border-indigo-500 overflow-hidden pointer-events-none'>
            <div style={{top: index * -104 + "%"}} className='h-full w-full absolute transition-all ease-[cubic-bezier(0.65,0,0.35,1)] duration-500'>
                {
                    groups.map( (group, index) => {
                        const { src, color } = group;
                        return (
                            <div key = {`modal_${index}`}
                                className='relative flex items-center justify-center'>
                                <Image
                                    src={`/img/${src}`}
                                    width={300}
                                    height={0}
                                    alt="image" 
                                    className='h-auto'
                                />
                            </div>
                        )
                    })
                }
            </div>
        </motion.div>
        <motion.div ref={cursor} variants={scaleAnimation} initial={"initial"} animate={active ? "open" : "close"} className='w-15 h-15 bg-indigo-500 absolute pointer-events-none rounded-full flex items-center justify-center text-white'></motion.div>
        <motion.div ref={cursorLabel} variants={scaleAnimation} initial={"initial"} animate={active ? "open" : "close"} className='w-15 h-15 bg-transparent absolute pointer-events-none rounded-full flex items-center justify-center text-white'>View</motion.div>
    </>
  )
}
