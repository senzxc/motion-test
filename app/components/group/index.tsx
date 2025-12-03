import React from 'react'

export default function index({
    index,
    title,
    setModal,
}: {
    index: number;
    title: string;
    setModal: any;
}) {
  return (
    <div className='group flex justify-between items-center w-full p-10 border-y border-gray-300 text-gray-500 hover:text-black hover:bg-black/3 transition duration-200 cursor-pointer'
        onMouseEnter={() => setModal({ active: true, index: index})}
        onMouseLeave={() => setModal({ active: false, index: index})}>
        <h2 className='group-hover:-translate-x-10 transition-all ease-[cubic-bezier(0.34,1.56,0.64,1)] duration-200'>{title}</h2>
        <p className='text-sm group-hover:translate-x-10 transition-all ease-[cubic-bezier(0.34,1.56,0.64,1)] duration-200'>Design & Development</p>
    </div>
  )
}