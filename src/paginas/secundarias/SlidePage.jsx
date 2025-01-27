import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../componentes/Header';
import '../../styles/SecundaryPage.scss'
import Footer from '../../componentes/Footer'

import Hero1 from '../../assets/6.jpg';
import Hero2 from '../../assets/5.jpg';
import Hero3 from '../../assets/9.jpg';

const slidesData = [
  {
    slug: 'federacao-brasileira',
    title: 'Federação Brasileira dos Estudantes de Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia de Biossistemas',
    content: 'Somos uma organização estudantil que promove a união e o fortalecimento dos estudantes dessas áreas.',
    img: Hero1,
  },
  {
    slug: 'futuro-engenharia-agricola',
    title: 'O Futuro da Engenharia Agrícola!',
    content: 'Juntos, impulsionamos a inovação no campo e promovemos a sustentabilidade!',
    img: Hero2,
    },
  {
    slug: 'coneeagri-enpeag',
    title: 'XXXVII CONEEAGRI e I ENPEAG',
    content: 'Participe do evento e conecte-se com futuros engenheiros de todo o Brasil.',
    img: Hero3,
    },
];

export default function SlidePage() {
  const { slug } = useParams();
  const slide = slidesData.find((slide) => slide.slug === slug);

  if (!slide) {
    return <h1>Notícia não encontrada</h1>;
  }

  return (
    <div>
        <Header />
        <div className='secundaryPage'>
        
        </div>
        <div className="containerSecundaryPage">
            <img src={slide.img} alt="" />
        <h1>{slide.title}</h1>
        <p>{slide.content}</p>
    </div>
    
    <Footer />
    </div>
  );
}