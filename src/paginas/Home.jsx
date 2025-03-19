import React from "react";
import Header from "../componentes/Header";
import "../styles/Home.scss";
import Hero from "../componentes/Hero";
import { Link } from 'react-router-dom';
import StatsCounter from "../componentes/StatsCounter";
import Imagem1 from '../assets/coneeagri.jpeg';
import Imagem2 from '../assets/assembleia.jpg';
import Imagem3 from '../assets/coneeagri2.jpeg';
import Imagem4 from '../assets/21.jpg';
import Imagem5 from '../assets/7.jpeg';
import Imagem6 from '../assets/8.jpg';
import Imagem7 from '../assets/13.jpg';
import abeag from '../assets/abeag.png';
import crea from '../assets/crea.png';
import Contador from "../componentes/Contador";
import Footer from "../componentes/Footer";
import NewsletterComponent from "../componentes/NewsletterComponent";
import '../styles/buttons.scss'


import logo1 from '../assets/logos/1.png';
import logo2 from '../assets/logos/2.png';
import logo3 from '../assets/logos/3.png';
import logo4 from '../assets/logos/4.png';
import logo5 from '../assets/logos/5.png';
import logo6 from '../assets/logos/6.png';
import logo7 from '../assets/logos/7.png';
import logo8 from '../assets/logos/8.png';
import logo9 from '../assets/logos/9.png';
import logo10 from '../assets/logos/10.png';
import logo11 from '../assets/logos/11.png';
import logo12 from '../assets/logos/12.png';
import logo13 from '../assets/logos/13.png';
import logo14 from '../assets/logos/14.png';
import logo15 from '../assets/logos/15.png';
import logo16 from '../assets/logos/16.png';
import logo17 from '../assets/logos/17.png';
import logo18 from '../assets/logos/18.png';
import logo19 from '../assets/logos/19.png';
import logo20 from '../assets/logos/20.png';
import logo22 from '../assets/logos/22.png';
import logo23 from '../assets/logos/5.png';
import logo24 from '../assets/logos/4.png';
import logo25 from '../assets/logos/3.png';
import logo26 from '../assets/logos/2.png';
import logo27 from '../assets/logos/1.png';

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9,
  logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo22, logo23, logo24, logo25, logo26, logo27
];


const cardsData = [
  {
    slug: 'representacao-estudantil',
    title: 'Realização de assembleias gerais, convocação para votação e representação institucional',
    content: 'A FEEAGRI atua como a voz dos estudantes das Engenharias Agrícola, Agrícola e Ambiental e de Biossistemas, promovendo a união e defendendo os interesses acadêmicos e profissionais em nível nacional [...]',
    spn: 'by FEEAGRI • December 20, 2024',
    img: Imagem2,
  },
  {
    slug: 'organizacao-de-eventos',
    title: 'Promoção do Congresso Nacional dos Estudantes de ENgenharia Agrícola, Agrícola e Ambiental e Engenharia de Biossistemas',
    content: 'O CONEEAGRI é mais do que um evento: é o ponto de encontro para estudantes e profissionais de todo o Brasil compartilharem conhecimentos, experiências e fortalecerem os laços em prol do desenvolvimento técnico e científico [...]',
    spn: 'by FEEAGRI • December 20, 2024',
    img: Imagem3,
  },
  {
    slug: 'capacitacao-e-desenvolvimento',
    title: 'Capacitação e desenvolvimento para um futuro sustentável no Agro',
    content: 'Através de iniciativas voltadas à capacitação e desenvolvimento técnico, a FEEAGRI fomenta a formação de profissionais qualificados e conscientes, preparados para enfrentar os desafios da sustentabilidade no agro. Trabalhamos para unir [...]',
    spn: 'by FEEAGRI • December 20, 2024',
    img: Imagem4,
  },
];

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div>
      <Header />
      <Hero />
      
      <div className="stats-section">
        <div className="card">
          <h3><strong>+</strong><StatsCounter finalNumber={30} /></h3>
          <p>Instituições de Ensino</p>
        </div>
        <div className="card">
          <h3><strong>+</strong><StatsCounter finalNumber={5000} /></h3>
          <p>Alunos em todo Brasil</p>
        </div>
        <div className="card">
          <h3><strong>+</strong><StatsCounter finalNumber={20} /></h3>
          <p>Edições do CONEEAGRI</p>
        </div>
        <div className="card">
          <h3><strong>+</strong><StatsCounter finalNumber={10} /></h3>
          <p>Anos de História e Contribuição</p>
        </div>
      </div>

      <div className="content">
        <div className="cardContent">
          <div className="text title">
            <h2>FEEAGRI <br /><strong>NACIONAL</strong></h2>
          </div>
          <div className="text">
            <p>A FEEAGRI foi fundada com o propósito de unificar os estudantes de Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia de Biossistemas de todo o Brasil, fortalecendo a representatividade de nossas áreas em cenários acadêmicos e profissionais. Desde a sua criação, tem atuado na organização do CONEEAGRI, evento anual que reúne acadêmicos, pesquisadores e profissionais do setor.</p>
            <button className="button_primary"> <Link to={`/about`} className="">Saiba mais</Link> </button>
          </div>
        </div>

      </div>

      <main>
        <div className="container">
          <div className="textContainer">
            <h2><strong className="gradientText">Inovação no Campo</strong> & <strong>Desenvolvimento Sustentável</strong> & <strong className="gradientText">Tecnologia</strong></h2>
          </div>
          <div className="separador"></div>
          <div className="featured">
            <div className="featured-main">
              <div className="featured-main-content">
                <h3>Nossas atividades</h3>

                <h2>A última edição do CONEEAGRI foi marcada pela realização do I ENPEAG, reunindo profissionais e estudantes do setor agrícola de todo o Brasil.</h2>
                <p>O XXXVII CONEEAGRI, realizado na UFPR - Campus Jandaia do Sul, foi marcada pela realização do I Encontro Nacional dos Profissionais de Engenharia Agrícola. O encontro ocorreu no último dia do evento, em uma celebração comemorada com um almoço, engajando o networking entre estudantes e profissionais de todo o Brasil.</p>
                <span>by FEEAGRI • December 20, 2024</span>
              </div>
              <img src={Imagem1} alt="Main Feature" />
            </div>

            <div className="featured-secondary">
            {cardsData.map((card, index) => (
              <div className="card">
                <img src={card.img} alt="Feature 2" />
                <h3><Link to={`/atividades/${card.slug}`}>{card.title}</Link></h3>
                <p>{card.content}</p>

              </div>
                 ))}
            </div>
          </div>
        </div>

        <div className="contadorSection">
          <h2><strong>XXXVIII</strong> CONEEAGRI & II ENPEAG</h2>
          <h3>Local: <strong>UFPEL</strong> -  Universidade Federal de Pelotas - Pelotas/RS <br />Data: de X a Y de outubro de 2025</h3>
          <Contador />
          <button className="button_secundary_red">Inscreva-se [em breve]</button>
        </div>

        <div className="congressos-section">
        <div className="congressos-content">
          <h2>Conheça as últimas edições do CONEEAGRI e a edição especial do I ENPEAG.</h2>
          <p>
            <strong>Unindo estudantes de todo o Brasil</strong><br />
            A última edição do CONEEAGRI e o I ENPEAG  realizados na UFPR - Campus Jandaia do Sul, representam marcos na integração dos estudantes de Engenharia Agrícola, Agrícola e Ambiental e de Biossistemas. Esses eventos promovem a troca de conhecimento, o fortalecimento da rede acadêmica e a valorização das áreas de atuação. Juntos, celebramos a união e o avanço das nossas profissões, com um olhar voltado para inovação e sustentabilidade. 
           <br /> <button className="button_primary">
              <Link to={`/congressos`} className="">Todas as edições</Link>
            </button>
          </p>
        </div>
          <div className="congressos-images">
            <div className="main-image">
              <img src={Imagem5} alt="Main Field" />
            </div>
            <div className="side-images">
              <img src={Imagem6} alt="Irrigation System" />
              <img src={Imagem7} alt="Crop Management" />
            </div>
          </div>
          <div className="congressos-footer">
            <span>Ano: 2024 | </span>
            <span>Category: Edição especial</span>
          </div>
        </div>

        <div className="parceiros-section">
          <div className="parceiros-content">
            <div className="parceiros-texto">
              <h2>Nossos Parceiros</h2>
              <p>Contamos com o apoio das principais instituições agrárias e empresas que acreditam na nossa missão de promover a engenharia agrícola e ambiental.</p>
            </div>
            <div className="parceiros-imagem">
              <img src={abeag} alt="Parceiros" />
              <img src={crea} alt="Parceiros" />
            </div>
          </div>
        </div>

        <div className="contato-section">
          <h2>Entre em Contato</h2>
          <p className="desktop">Tem alguma dúvida, sugestão ou gostaria de saber mais sobre nossas atividades? Estamos aqui para ouvir você! 
          Entre em contato com a FEEAGRI e faça parte da construção de um futuro mais conectado e inovador para nossas áreas.</p>
          <p className="mobile">Tem alguma dúvida, sugestão ou gostaria de saber mais sobre nossas atividades? Estamos aqui para ouvir você!</p>
          <div className="contato-content">
            <div className="contato-form">
              <h3>Envie uma mensagem</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="telefone">Telefone</label>
                  <input type="tel" id="telefone" name="telefone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
                </div>
                <button type="submit" className="button_primary">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    
      <NewsletterComponent />
      <Footer />
    </div>
  );
}
