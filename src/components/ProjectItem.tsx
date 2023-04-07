import Image from 'next/image'
import React from 'react'

interface ProjectItemProps {
  title: string;
  backgroundImg: string;
  tech: string;
  projectUrl: string;
}

const ProjectItem = ({title, backgroundImg, tech, projectUrl}: ProjectItemProps) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
      <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' width={600} height={400} />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
          <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
          <a href={projectUrl} target='_blank' rel='noreferrer'>
              <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Mais detalhes</p>
          </a>
      </div>
 </div>
  )
}

export default ProjectItem