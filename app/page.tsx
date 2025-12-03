'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Group from "./components/group";
import Modal from "./components/modal"

export default function Home() {

  const groups = [
    {
      title: "Framer Motion",
      src: "phro.jpg",
      color: "text-black"
    },
    {
      title: "Jaran Goyang",
      src: "golshi.gif",
      color: "text-black"
    },
    {
      title: "Hatsune Miku",
      src: "miku.gif",
      color: "text-black"
    },
    {
      title: "Hello World",
      src: "mika.jpg",
      color: "text-black"
    }
  ]

  const [modal, setModal] = useState({active: false, index: 0})

  const text = Array(20).fill(0).flatMap(() => [
    {
      title: "WELCOME"
    },
    {
      title: "✦"
    }
  ])

  return (
    <main className="min-h-screen max-w-5xl flex flex-col justify-center items-center mx-auto">
      <div className="overflow-hidden whitespace-nowrap flex">
        <motion.div
          className="flex p-4 bg-black"
          animate={{ x: ["10%", "-10%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity
          }}
          style={{ width: "200%" }}
          >

            {
              text.map( (item, index) => {
                return <span key={index} className="font-semibold italic text-white text-4xl mx-4"> {item.title} </span>
              } )
            }
          
        </motion.div>
      </div>

      <div className="w-full text-4xl mt-auto">
        {
          groups.map( (group, index) => {
            return <Group key={index} index={index} title={group.title} setModal={setModal}/>
          })
        }
      </div>
      
      <div className="overflow-hidden whitespace-nowrap flex mt-auto">
        <motion.div
          className="flex p-4 bg-black"
          animate={{ x: ["10%", "-10%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity
          }}
          style={{ width: "200%" }}
          >

            {
              text.map( (item, index) => {
                return <span key={index} className="font-semibold italic text-white text-4xl mx-4"> {item.title} </span>
              } )
            }
          
        </motion.div>
      </div>

      <Modal modal = {modal} groups = {groups} />
    </main>
  );
}
