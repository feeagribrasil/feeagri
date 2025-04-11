import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../componentes/Header";
import "../../styles/CongressosPage.scss";
import "../../styles/SecundaryPage.scss";
import Imagem1 from "../../assets/coneeagri.webp";
import Imagem2 from "../../assets/c1.jpeg";
import Imagem3 from "../../assets/c2.png";
import Imagem4 from "../../assets/c3.jpeg";
import Imagem5 from "../../assets/c4.png";
import Imagem6 from "../../assets/c5.jpeg";
import Footer from "../../componentes/Footer";

const congressosData = [
  {
    image: Imagem1,
    title: "XXXVII CONEEAGRI e I ENPEAG (2024) UFPR - Jandaia do Sul/PR",
    edicao: "XXXVII",
    description:
      "Ocorre de 22 a 26 de outubro de 2024 na UFPR - Campus Jandaia do Sul, promovendo inovação e integração entre estudantes de todo o Brasil.",
    text: "A edição de 2024 do CONEEAGRI marca um novo capítulo na história do congresso, trazendo o I ENPEAG (Encontro Nacional de Pesquisa em Engenharia Agrícola) para enriquecer a troca de conhecimentos. O evento contará com palestras de renomados especialistas, mesas-redondas sobre os desafios da engenharia agrícola no Brasil e apresentações de trabalhos acadêmicos. Além disso, haverá visitas técnicas a propriedades e indústrias da região, permitindo que os participantes tenham uma experiência prática do que há de mais moderno no setor. Essa edição se destaca pela forte presença de inovação e tecnologia, conectando estudantes e profissionais com as tendências do futuro.",
    slug: "coneeagri-2024",
  },
  {
    image: Imagem2,
    title: "XXXVI CONEEAGRI (2023) Especial Online",
    edicao: "XXXVI",
    description:
      'Realizado de 24 a 27 de outubro de 2023 com o tema "Inovações Além do Campo: Transformando o Futuro".',
    text: "A edição de 2023 foi marcada por discussões aprofundadas sobre como a tecnologia pode impulsionar a sustentabilidade e eficiência no setor agrícola. Contou com a participação de especialistas internacionais, que compartilharam insights sobre automação no campo, agricultura digital e novas práticas para o manejo sustentável. Apesar de seu formato online, o evento proporcionou ampla interação entre os participantes, através de workshops ao vivo, fóruns de debates e apresentações de startups do agro. A edição reafirmou o compromisso do CONEEAGRI com a disseminação do conhecimento e a formação de engenheiros agrícolas preparados para o futuro.",
    slug: "coneeagri-2023",
  },
  {
    image: Imagem3,
    title: "XXXV CONEEAGRI (2022) Especial Online",
    edicao: "XXXV",
    description:
      "Evento online realizado de 16 a 19 de novembro de 2022, com minicursos e palestras setoriais.",
    text: "Em 2022, o CONEEAGRI trouxe um formato inovador de minicursos interativos e palestras setoriais, aprofundando temas como agrometeorologia, manejo sustentável e uso de inteligência artificial na agricultura. A programação foi desenvolvida para oferecer uma experiência dinâmica, com painéis de debates entre acadêmicos e profissionais do setor. Uma das grandes novidades foi a realização de desafios técnicos, nos quais os participantes puderam propor soluções inovadoras para problemas reais enfrentados no campo. Essa edição destacou-se pelo engajamento dos participantes e pela diversidade dos temas abordados.",
    slug: "coneeagri-2022",
  },
  {
    image: Imagem1,
    title: "XXXIV CONEEAGRI (2021) Especial Online",
    edicao: "XXXIV",
    description:
      "Edição online com palestras e minicursos focados nos desafios da Engenharia Agrícola e Ambiental.",
    text: "A pandemia trouxe desafios inéditos para a organização de eventos acadêmicos, mas a edição de 2021 do CONEEAGRI conseguiu se reinventar com uma programação intensa e altamente informativa. Os participantes tiveram acesso a uma ampla gama de minicursos práticos, abordando desde modelagem computacional até técnicas avançadas de irrigação. Além disso, as palestras contaram com profissionais que compartilharam suas experiências no setor, trazendo insights valiosos sobre o mercado de trabalho e as tendências para os próximos anos. A interação digital possibilitou um evento inclusivo e acessível a um público amplo de diferentes regiões do Brasil.",
    slug: "coneeagri-2021",
  },
  {
    image: Imagem2,
    title: "XXXIII CONEEAGRI (2020) Especial Online",
    edicao: "XXXIII",
    description:
      "Congresso realizado no formato virtual, adaptando-se ao contexto da pandemia, com debates sobre inovação no setor.",
    text: "Diante do contexto da pandemia, o CONEEAGRI 2020 foi um dos primeiros a adotar um formato 100% online, permitindo que estudantes e profissionais de todo o país participassem sem sair de casa. O evento destacou-se pela abordagem de temas emergentes, como a digitalização do agro e os desafios logísticos no cenário pós-pandemia. Com palestras ministradas por especialistas e um espaço interativo para networking, o congresso conseguiu manter sua essência de compartilhar conhecimento e promover o crescimento profissional dos participantes.",
    slug: "coneeagri-2020",
  },
  {
    image: Imagem3,
    title: "XXXII CONEEAGRI (2019) UFPel - Pelotas RS",
    edicao: "XXXII",
    description:
      "Edição organizada pelo PET Engenharia Agrícola, promovendo discussões sobre tecnologia e sustentabilidade.",
    text: "A cidade de Pelotas recebeu a edição de 2019 do CONEEAGRI, que teve como foco a relação entre tecnologia e sustentabilidade na engenharia agrícola. O evento contou com palestras, mesas-redondas e oficinas práticas, trazendo uma abordagem inovadora para discutir os avanços da automação, biotecnologia e uso eficiente da água na produção agrícola. Além das atividades acadêmicas, os participantes puderam visitar propriedades rurais da região, conhecendo de perto os desafios e oportunidades do setor agropecuário no sul do Brasil.",
    slug: "coneeagri-2019",
  },
  {
    image: Imagem1,
    title: "XXXI CONEEAGRI (2018) UNICAMP - Campinas SP",
    edicao: "XXXI",
    description:
      "Realizado na Universidade Estadual de Campinas UNICAMP entre 8 e 15 de outubro de 2018, reunindo acadêmicos e profissionais do setor.",
    text: "A UNICAMP foi o palco do CONEEAGRI 2018, que trouxe uma programação repleta de atividades acadêmicas e práticas para os estudantes de engenharia agrícola. Com foco na integração entre pesquisa e inovação, o evento abordou temas como o uso de sensores na agricultura de precisão, as novas tendências em mecanização agrícola e os impactos das mudanças climáticas na produção agrícola. Além das palestras e mesas-redondas, os participantes tiveram a oportunidade de realizar visitas técnicas a centros de pesquisa e empresas do setor, ampliando sua visão sobre as possibilidades da carreira.",
    slug: "coneeagri-2018",
  },
  {
    image: Imagem1,
    title: "XXXI CONEEAGRI (2017) UFLA - Lavras MG",
    edicao: "XXXI",
    description:
      "Realizado na Universidade Federal de Lavras (UFLA) entre 8 e 15 de outubro de 2017, reunindo acadêmicos e profissionais do setor.",
    text: "A Universidade Federal de Lavras (UFLA) recebeu a edição de 2017 do CONEEAGRI, que trouxe um olhar detalhado sobre as inovações e desafios enfrentados pela engenharia agrícola no Brasil. O evento promoveu palestras sobre gestão de recursos hídricos, inovação na mecanização agrícola e avanços na área de energias renováveis aplicadas ao setor agropecuário. Os participantes puderam interagir com especialistas renomados e visitar laboratórios da universidade, conhecendo de perto pesquisas de ponta desenvolvidas na área.",
    slug: "coneeagri-2017",
  },
  {
    image: Imagem2,
    title: "XXX CONEEAGRI (2016) UFF - Rio de Janeiro RJ",
    edicao: "XXX",
    description:
      "Ocorreu de 17 a 23 de abril de 2016 na Universidade Federal Fluminense (UFF) em Niterói, com programação voltada ao desenvolvimento agrícola.",
    text: "O CONEEAGRI 2016 aconteceu na UFF, trazendo uma programação diversificada voltada ao desenvolvimento agrícola. O evento abordou temas como irrigação eficiente, sustentabilidade na produção de alimentos e as novas demandas do mercado agrícola brasileiro. Com painéis interativos e visitas técnicas, os participantes puderam trocar experiências e ampliar seus conhecimentos sobre as inovações que estavam moldando o futuro do setor.",
    slug: "coneeagri-2016",
  },
];

export default function CongressosPage() {
  const { slug } = useParams();
  const Congressos = congressosData.find(
    (Congressos) => Congressos.slug === slug
  );

  if (!Congressos) {
    return <h1>Notícia não encontrada</h1>;
  }

  return (
    <div>
      <Header />
      <div className="secundaryPage"></div>
      <div className="containerSecundaryPage">
        <img src={Congressos.image} alt="" />
        <h1>{Congressos.title}</h1>
        <p>{Congressos.description}</p>
        <p>{Congressos.text}</p>
      </div>

      <Footer />
    </div>
  );
}
