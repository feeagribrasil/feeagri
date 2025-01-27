import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../componentes/Header';
import '../../styles/CongressosPage.scss'

import Imagem1 from '../../assets/coneeagri.webp';
import Imagem2 from '../../assets/c1.jpeg';
import Imagem3 from '../../assets/c2.png';
import Imagem4 from '../../assets/c3.jpeg';
import Imagem5 from '../../assets/c4.png';
import Imagem6 from '../../assets/c5.jpeg';

const congressosData = [
  {
    slug: 'federacao-brasileira',
    title: 'Federação Brasileira dos Estudantes de Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia de Biossistemas',
    content: 'Somos uma organização estudantil que promove a união e o fortalecimento dos estudantes dessas áreas.',
    img: Imagem1,
  },
  {
    slug: 'futuro-engenharia-agricola',
    title: 'O Futuro da Engenharia Agrícola!',
    content: 'Juntos, impulsionamos a inovação no campo e promovemos a sustentabilidade!',
    img: Imagem2,
    },
  {
    slug: 'coneeagri-enpeag',
    title: 'XXXVII CONEEAGRI e I ENPEAG',
    content: 'Participe do evento e conecte-se com futuros engenheiros de todo o Brasil.',
    img: Imagem3,
    },
];

export default function CongressosPage() {
  const { slug } = useParams();
  const Congressos = congressosData.find((Congressos) => Congressos.slug === slug);

  if (!Congressos) {
    return <h1>Notícia não encontrada</h1>;
  }

  return (
    <div>
        <Header />
        <div className='CongressosPage'>
        
        </div>
        <div className="containerCongressosPage">
            <img src={Congressos.img} alt="" />
        <h1>{Congressos.title}</h1>
        <p>{Congressos.content}</p>
    </div>
    
     
    </div>
  );
}