import React from 'react';
import Image from 'next/image';

interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
}


const timelineData: TimelineItem[] = [
  {
    "id": "1",
    "date": "20/04/2015",
    "title": "IFES",
    "description": "Começo da minha jornada no Instituto Federal do Espirito Santo, no campus Vitória. Representei a equipe de natação do IFES durante meus 4 anos lá. Me formei como técnico em eletrotécnica em Dezembro de 2018.",
    "image": "/assets/timeline/ifes.jpeg"
  },
  {
    "id": "2",
    "date": "04/02/2019",
    "title": "UFES",
    "description": "Iniciei minha jornada na Universidade Federal do Espirito Santo, cursando Engenharia de Computação. Atualmente estou no 5º período e já tive a oportunidade de participar de grandes projetos de extensão na faculdade.",
    "image": "/assets/timeline/ufes.jpeg"
  },
  {
    "id": "3",
    "date": "01/09/2019",
    "title": "AVES",
    "description": "Entrei no projeto Aero Vitória Espirito Santo (AVES) em 2019. O grupo AVES projeta e constrói aeronaves de carga remotamente controladas para a competição da SAE Brasil AeroDesign. Minha área no grupo é na parte de telemetria e aquisição de dados.",
    "image": "/assets/timeline/aves.png"
  },
  {
    "id": "4",
    "date": "01/11/2019",
    "title": "PET",
    "description": "Entrei para o grupo PET (Programa de Educação Tutorial) em 2019. Lá participo de diversas comissões como DEV, grupo de IA e eletrônica (onde atualmente sou o líder).",
    "image": "/assets/timeline/pet.jpg"
  },
  {
    "id": "5",
    "date": "01/11/2019",
    "title": "Introcomp",
    "description": "Entrei no Introcomp ao mesmo tempo que entrei no PET. Lá pude me desenvolver em diversas áreas como comunicação e programação. Tive a oportunidade de lecionar aulas para alunos do Ensino Médio de todo o Brasil pela plataforma da Twitch, além de poder criar os materiais das aulas.",
    "image": "/assets/timeline/introcomp.png"
  },
  {
    "id": "6",
    "date": "01/04/2021",
    "title": "Solares",
    "description": "O projeto mais recente que faço parte. No Solares atuamos em diversas áreas, tanto sociais quanto técnicas. Faço parte do grupo de Telemetria do barco de competição, que criamos para participar do Desafio Solar Brasil (DSB).",
    "image": "/assets/timeline/solares.jpeg"
  },
  {
    "id": "7",
    "date": "05/07/2021",
    "title": "Alura",
    "description": "Entrei como estagiário Scuba Team da Alura, na área de desenvolvimento mobile. Depois fui efetivado como instrutor e desenvolvedor de software voltado para o React Native.",
    "image": "/assets/timeline/alura.jpeg"
  }
];


export default function Sobre() {
  return (
    <div className="bg-gray-100 min-h-screen pt-20 text-center">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">Minha Trajetória</h1>
        <div className="relative timeline">
          <div id="lineTimeline" className="absolute top-0 left-8 md:left-1/2 h-full bg-gray-400 w-1"></div>
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item p-4 my-4 bg-white rounded shadow text-left ${
                index % 2 === 0 ? 'md:ml-4' : 'md:mr-4'
              }`}
              style={{
                marginLeft: index % 2 === 0 ? 'auto' : '2px',
                marginRight: index % 2 === 0 ? '-2px' : 'auto',
              }}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:mr-4 mb-4 md:mb-0">
                  <div className="relative aspect-w-1 aspect-h-1">
                    <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
                  </div>
                </div>
                <div className="content">
                  <div className="text-xl font-bold mb-2">{item.date}</div>
                  <h2 className="text-2xl mb-2">{item.title}</h2>
                  <p className="text-lg">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}