import React from 'react'
import Image from 'next/image';
import { animate, scroll } from "motion";
import { motion } from 'framer-motion';

const scaleAnimation = {
    initial: {scale: 0, x: "-50%", y: "-50%"},
    open: {scale: 1, x: "-50%", y: "-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    close: {scale: 0, x: "-50%", y: "-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function index({
    modal,
    groups
}: {
    modal: any;
    groups: any;
}) {

    const { active, index } = modal;

  return (
    <motion.div variants={scaleAnimation} initial={"initial"} animate={active ? "open" : "close"} className='h-[239px] w-[250px] flex items-center justify-center absolute overflow-hidden'>
        <div style={{top: index * -104 + "%"}} className='h-full w-full absolute transition-all ease-[cubic-bezier(0.76,0,0.24,1)] duration-500'>
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
  )
}
