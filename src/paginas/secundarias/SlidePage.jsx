import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../componentes/Header";
import "../../styles/SecundaryPage.scss";
import Footer from "../../componentes/Footer";
import slidesData from "./slidesData";
import Widget from "../../componentes/WidgetCustom";

export default function SlidePage() {
  const { slug } = useParams();
  const slide = slidesData.find((slide) => slide.slug === slug);

  if (!slide) {
    return <h1>Notícia não encontrada</h1>;
  }

  return (
    <div>
      <Header />
      <div className="secundaryPage"></div>
      <div className="containerSecundaryPage">
        <h2>{slide.title}</h2>
        <h3>{slide.content}</h3>
        <img src={slide.img} alt={slide.title} />
        <div className="container">
          <div className="content">
            <h2>{slide.titleTxt}</h2>
            <p>{slide.text}</p>
            <p>{slide.text2}</p>
            <p>{slide.text3}</p>
          </div>
          <div className="widgets">
            <Widget />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
