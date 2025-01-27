import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../componentes/Header';
import '../../styles/SecundaryPage.scss'
import Footer from '../../componentes/Footer'

import Imagem4 from '../../assets/21.jpg';
import Imagem2 from '../../assets/19.jpg';
import Imagem3 from '../../assets/17.jpg';


const cardsData = [
  {
    slug: 'organizacao-de-eventos',
    title: 'Organização de Eventos Acadêmicos',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, dolorem alias. Aperiam ducimus, debitis autem atque voluptatibus sunt officia placeat reiciendis est soluta, earum optio nisi expedita ut quod. Placeat.',
    spn: 'by FEEAGRI • December 20, 2024',
    img: Imagem2,
  },
  {
    slug: 'incentivo-a-pesquisa-e-extensao',
    title: 'Incentivo à Pesquisa e Extensão',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, dolorem alias. Aperiam ducimus, debitis autem atque voluptatibus sunt officia placeat reiciendis est soluta, earum optio nisi expedita ut quod. Placeat.',
    spn: 'by FEEAGRI • December 20, 2024',
    img: Imagem3,
  },
  {
    slug: 'capacitacao-e-desenvolvimento',
    title: 'Capacitação e Desenvolvimento',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, dolorem alias. Aperiam ducimus, debitis autem atque voluptatibus sunt officia placeat reiciendis est soluta, earum optio nisi expedita ut quod. Placeat.',
    spn: 'by FEEAGRI • December 20, 2024',
    img: Imagem4,
  },

];


export default function Content() {
  const { slug } = useParams();
  const card = cardsData.find((card) => card.slug === slug);

  if (!card) {
    return <h1>Notícia não encontrada</h1>;
  }

  return (
    <div>
        <Header />
        <div className='secundaryPage'>
        
        </div>
        <div className="containerSecundaryPage">
            <img src={card.img} alt="" />
        <h1>{card.title}</h1>
        <p>{card.content}</p>
    </div>
    
    <Footer />
    </div>
  );
}