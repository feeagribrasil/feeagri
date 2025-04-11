import React from "react";
import Header from "../componentes/Header";
import "../styles/HeaderSecundario.scss";
import NewsletterComponent from "../componentes/NewsletterComponent";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";

export default function Newsletter() {
  return (
    <div>
      <Header />
      <div className="HeaderSecundario">
        <div className="links">
          <h3>
            {" "}
            <a href="">Home</a> | <a href="">Newsletter</a>
          </h3>
        </div>
        <div className="container">
          <h2>Newsletter</h2>
          <p>
            Acompanhe nossas atualizações quinzenais e fique por dentro das
            atualizações no setor agrícola.
          </p>
        </div>
      </div>

      <section className="newsletter-posts">
        <div className="post">
          <h3>
            <Link to={`/post`}>#3. Eleições para o conselho diretivo</Link>
          </h3>
          <p>
            Confira as novidades que os membros do conselho diretivo prepararam
            para garantir maior representatividade nas eleições.
          </p>
          <span className="date">March 3, 2025</span>
        </div>
        <div className="post">
          <h3>
            <Link to={`/post`}>#2. Eleições para o conselho diretivo</Link>
          </h3>
          <p>
            A sustentabilidade é um tema cada vez mais presente na engenharia
            agrícola. O uso de técnicas de cultivo mais eficientes, como a
            agricultura de precisão e a rotação de culturas, está ajudando a
            reduzir o impacto ambiental das práticas agrícolas. A inovação nesse
            setor é fundamental para garantir a produção de alimentos de forma
            responsável e com menor impacto no meio ambiente.
          </p>
          <span className="date">March 2, 2025</span>
        </div>
        <div className="post">
          <h3>
            <Link to={`/post`}>#1. Eleições para o conselho diretivo</Link>
          </h3>
          <p>
            O Brasil, apesar de ser um país com abundância hídrica, enfrenta
            desafios significativos na gestão da irrigação. A engenharia
            agrícola desempenha um papel crucial na implementação de sistemas
            eficientes que otimizem o uso da água nas lavouras, evitando
            desperdícios e garantindo o abastecimento para a agricultura em
            diferentes regiões do país.
          </p>
          <span className="date">March 1, 2025</span>
        </div>
      </section>

      <main>
        <NewsletterComponent />
      </main>
      <Footer />
    </div>
  );
}
