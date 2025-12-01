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
    <div className='group flex justify-between items-center w-full p-10 border-y border-gray-200 hover:text-gray-400 cursor-pointer'
        onMouseEnter={() => setModal({ active: true, index: index})}
        onMouseLeave={() => setModal({ active: false, index: index})}>
        <h2 className='group-hover:-translate-x-2 transition-all duration-200'>{title}</h2>
        <p className='text-sm group-hover:translate-x-2 transition-all duration-200'>Design & Development</p>
    </div>
  )
}