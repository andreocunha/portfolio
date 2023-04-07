import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function About() {
  return (
    <div id='sobre' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            Sobre
          </p>
          <h2 className='py-4'>Quem sou eu?</h2>
          <p className='py-2 text-gray-600'>
          Sou formado em Engenharia de Computação pela UFES e atuo
          como instrutor e desenvolvedor de software na Alura, com foco
          em React Native. Trabalho também como Full Stack na Moddev,
          empregando tecnologias como Next.js, Node.js, Electron, React
          Native, Android Nativo e WordPress, entre outras. Possuo
          amplo conhecimento em microcontroladores, como Arduino e
          ESP, além de experiência em Internet das Coisas (IoT).
          Atualmente, tenho me dedicado à engenharia de prompts em
          diversas soluções que envolvem inteligência artificial, utilizando
          o ChatGPT.
          </p>
          <p className='py-2 text-gray-600'>
            Durante a graduação, participei de diversos projetos de extensão sendo eles o PET, Solares, Introcomp e AVES.
            No Programa de Educação Tutorial (PET), tive a oportunidade de me
            desenvolver em diversas áreas que geralmente não são abordadas no
            currículo da graduação, reforçando os três pilares acadêmicos: ensino,
            pesquisa e extensão. <br /><br />
            No Solares fiz parte da equipe de telemetria do barco solar, onde
            desenvolvi um sistema de monitoramento de dados em tempo real com WebSocket.
            Nos demais projetos desenvolvi várias habilidades como liderança, trabalho em equipe, comunicação e resolução de problemas.
          </p>
          <Link href='/#projetos'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Veja meus ultimos projetos
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src='/assets/about.jpg' className='rounded-xl' alt='/' width={500} height={500} />
        </div>
      </div>
    </div>
  );
};
