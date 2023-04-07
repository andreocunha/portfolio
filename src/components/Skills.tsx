import { skills } from '@/mock/skills';
import Image from 'next/image';
import React from 'react';

export function Skills() {
  return (
    <div id='habilidades' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full gap-4'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Habilidades
        </p>
        <h2 className='py-4'>O que eu sei</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
          {
            skills?.map((skill, index) => (
              <div className='flex justify-around items-center w-48 p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' key={index}>
                <Image src={skill.image} width={32} height={32} alt={skill.name} />
                <h3>{skill.name}</h3>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
