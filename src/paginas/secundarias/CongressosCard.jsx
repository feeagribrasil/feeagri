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
    image: Imagem1,
    title: 'XXXVII CONEEAGRI e I ENPEAG (2024) UFPR - Jandaia do Sul/PR',
    edicao: 'XXXVII',
    description:
      'Ocorre de 22 a 26 de outubro de 2024 na UFPR - Campus Jandaia do Sul, promovendo inovação e integração entre estudantes de todo o Brasil.',
    slug: 'coneeagri-2024',
  },
  {
    image: Imagem2,
    title: 'XXXVI CONEEAGRI (2023) Especial Online',
    edicao: 'XXXVI',
    description:
      'Realizado de 24 a 27 de outubro de 2023 em Pirenópolis, Goiás, com o tema "Inovações Além do Campo: Transformando o Futuro".',
    slug: 'coneeagri-2023',
  },
  {
    image: Imagem3,
    title: 'XXXV CONEEAGRI (2022) Especial Online',
    edicao: 'XXXV',
    description:
      'Evento online realizado de 16 a 19 de novembro de 2022, com minicursos e palestras setoriais.',
    slug: 'coneeagri-2022',
  },
  {
    image: Imagem1,
    title: 'XXXIV CONEEAGRI (2021) Especial Online',
    edicao: 'XXXIV',
    description:
      'Edição online com palestras e minicursos focados nos desafios da Engenharia Agrícola e Ambiental.',
    slug: 'coneeagri-2021',
  },
  {
    image: Imagem2,
    title: 'XXXIII CONEEAGRI (2020) Especial Online',
    edicao: 'XXXIII',
    description:
      'Congresso realizado no formato virtual, adaptando-se ao contexto da pandemia, com debates sobre inovação no setor.',
    slug: 'coneeagri-2020',
  },
  {
    image: Imagem3,
    title: 'XXXII CONEEAGRI (2019) UFPel - Pelotas RS',
    edicao: 'XXXII',
    description:
      'Edição organizada pelo PET Engenharia Agrícola, promovendo discussões sobre tecnologia e sustentabilidade.',
    slug: 'coneeagri-2019',
  },
  {
    image: Imagem1,
    title: 'XXXI CONEEAGRI (2018) UNICAMP - Campinas SP',
    edicao: 'XXXI',
    description:
      'Realizado na Universidade Estadual de Campinas UNICAMP entre 8 e 15 de outubro de 2017, reunindo acadêmicos e profissionais do setor.',
    slug: 'coneeagri-2017',
  },
  {
    image: Imagem1,
    title: 'XXXI CONEEAGRI (2017) UFLA - Lavras MG',
    edicao: 'XXXI',
    description:
      'Realizado na Universidade Federal de Lavras (UFLA) entre 8 e 15 de outubro de 2017, reunindo acadêmicos e profissionais do setor.',
    slug: 'coneeagri-2017',
  },
  {
    image: Imagem2,
    title: 'XXX CONEEAGRI (2016) UFF - Rio de Janeiro RJ',
    edicao: 'XXX',
    description:
      'Ocorreu de 17 a 23 de abril de 2016 na Universidade Federal Fluminense (UFF) em Niterói, com programação voltada ao desenvolvimento agrícola.',
    slug: 'coneeagri-2016',
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
        <h3>{Congressos.edicao}</h3>
        <p>{Congressos.description}</p>
    </div>
    
     
    </div>
  );
}