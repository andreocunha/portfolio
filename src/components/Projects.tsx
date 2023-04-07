import React from 'react';
import ProjectItem from './ProjectItem';
import Link from 'next/link';

export function Projects() {
  return (
    <div id='projetos' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-28'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projetos
        </p>
        <h2 className='py-4'>O que eu construí</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Hotel Duas Praias'
            backgroundImg='/assets/projects/duas-praias.png'
            projectUrl='https://duaspraias.com.br'
            tech='Next.js + Styled Components'
          />
          <ProjectItem
            title='EGS'
            backgroundImg='/assets/projects/egs.png'
            projectUrl='https://www.egssurvey.com.br'
            tech='Next.js'
          />
          <ProjectItem
            title='Desafio Solar Brasil'
            backgroundImg='/assets/projects/dsb.png'
            projectUrl='https://dsbrastreio.com.br'
            tech='Next.js + TailwindCSS'
          />
          <ProjectItem
            title='Pulseira Anti-Covid'
            backgroundImg='/assets/projects/pulseira.png'
            projectUrl='https://www.linkedin.com/posts/andr%C3%A9-oliveira-cunha-b26b3a156_ufes-cria-pulseira-anti-covid-para-monitorar-activity-6682490130743218176-NLIY'
            tech='ESP8266 + Arduino'
          />
        </div>
        <div className='mt-8 flex justify-center'>
          <Link href='/projetos'>
            <button className='bg-[#5651e5] text-white py-2 px-4 rounded-md'>
              Ver todos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
