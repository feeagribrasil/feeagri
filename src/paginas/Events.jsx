import React from "react";
import { Link } from 'react-router-dom';

import Header from "../componentes/Header";
import "../styles/HeaderSecundario.scss";
import "../styles/Events.scss";
import Footer from '../componentes/Footer';
import Contador from '../componentes/Contador';

import Imagem1 from '../assets/coneeagri.webp';
import Imagem2 from '../assets/c1.jpeg';
import Imagem3 from '../assets/c2.png';
import Imagem4 from '../assets/c3.jpeg';
import Imagem5 from '../assets/c4.png';
import Imagem6 from '../assets/c5.jpeg';

export default function Events() {

  const congressos = [
      {
        image: Imagem1,
        title: 'Federação Brasileira dos Estudantes de Engenharia Agrícola',
        description: 'Somos uma organização estudantil que promove a união e o fortalecimento dos estudantes dessas áreas.',
        slug: 'federacao-brasileira',
      },
      {
        image: Imagem2,
        title: 'O Futuro da Engenharia Agrícola!',
        description: 'Juntos, impulsionamos a inovação no campo e promovemos a sustentabilidade!',
        slug: 'futuro-engenharia-agricola',
      },
      {
        image: Imagem3,
        title: 'XXXVII CONEEAGRI e I ENPEAG',
        description: 'Participe do evento e conecte-se com futuros engenheiros de todo o Brasil.',
        slug: 'coneeagri-enpeag',
      },
      {
        image: Imagem1,
        title: 'Federação Brasileira dos Estudantes de Engenharia Agrícola',
        description: 'Somos uma organização estudantil que promove a união e o fortalecimento dos estudantes dessas áreas.',
        slug: 'federacao-brasileira',
      },
      {
        image: Imagem2,
        title: 'O Futuro da Engenharia Agrícola!',
        description: 'Juntos, impulsionamos a inovação no campo e promovemos a sustentabilidade!',
        slug: 'futuro-engenharia-agricola',
      },
      {
        image: Imagem3,
        title: 'XXXVII CONEEAGRI e I ENPEAG',
        description: 'Participe do evento e conecte-se com futuros engenheiros de todo o Brasil.',
        slug: 'coneeagri-enpeag',
      },
    ];
  
    
  return (
    <div>
      <Header />
      <div className="HeaderSecundario">
        <div className="links">
          <h3>
            <a href="">Home</a> | <a href="">Congressos</a>
          </h3>
        </div>
        <div className="container">
          <h2>Congressos</h2>
          <p>Unindo estudantes e promovendo avanços na Engenharia Agrícola para um futuro mais sustentável.</p>
        </div>
      </div>
      <div className="contadorSection2">
        <h2><strong>XXXVIII</strong> CONEEAGRI & II ENPEAG</h2>
        <h3>Local: UFPel - Pelotas/RS</h3>
        <Contador />
      </div>
      <main>
        <div className="featuredSec">
          <div className="featuredSec-main">
            <div className="featuredSec-main-content">
              <h3>Ultimas edições</h3>
              <h2>XXXVII CONEEAGRI e I Encontro Nacional dos Profissionais de</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, dolorem alias. Aperiam ducimus, debitis autem atque voluptatibus sunt officia placeat reiciendis est soluta, earum optio nisi expedita ut quod. Placeat.</p>
              <span>by FEEAGRI • December 20, 2024</span>
            </div>
            <img src={Imagem1} alt="Main Feature" />
          </div>

          <div className="featuredSec-secondary">
          {congressos.map((congresso, index) => (
            <div className="card">
            <img src={congresso.image} alt={congresso.title} />
              <h3>{congresso.title}</h3>
              <p>{congresso.description}</p>
              <Link to={`/congressos/${congresso.slug}`} className="Hero__button">Saiba mais</Link>
            </div>
           ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
