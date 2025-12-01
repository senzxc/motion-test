'use client'

import { motion } from "motion/react";
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

  return (
    <main className="min-h-screen max-w-5xl flex flex-col justify-center items-center mx-auto">
      <div className="w-full text-4xl">
        {
          groups.map( (group, index) => {
            return <Group key={index} index={index} title={group.title} setModal={setModal}/>
          })
        }
      </div>
      <Modal modal = {modal} groups = {groups} />
    </main>
  );
}
