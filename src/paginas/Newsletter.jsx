import React from "react";
import Header from "../componentes/Header";
import "../styles/HeaderSecundario.scss";
import NewsletterComponent from "../componentes/NewsletterComponent";
import Footer from "../componentes/Footer";

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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            libero quibusdam laboriosam ipsum commodi ratione quia corporis
            facilis eligendi ullam, explicabo neque in minus, voluptatem dolorum.
            Veniam nulla sint maxime.
          </p>
        </div>
      </div>
      
      {/* Seção com Posts Simulados */}
      <section className="newsletter-posts">
        <div className="post">
          <h3>#3. Avanços Tecnológicos na Engenharia Agrícola</h3>
          <p>
            A engenharia agrícola tem se beneficiado de inovações tecnológicas, como o uso de drones para monitoramento de culturas, sensores de umidade do solo e máquinas autônomas que aumentam a produtividade e a eficiência no campo. Essas tecnologias não apenas facilitam o trabalho dos profissionais, mas também contribuem para práticas agrícolas mais sustentáveis.
          </p>
          <span className="date">March 3, 2025</span>
        </div>
        <div className="post">
          <h3>#2. Sustentabilidade e Inovação no Agronegócio</h3>
          <p>
            A sustentabilidade é um tema cada vez mais presente na engenharia agrícola. O uso de técnicas de cultivo mais eficientes, como a agricultura de precisão e a rotação de culturas, está ajudando a reduzir o impacto ambiental das práticas agrícolas. A inovação nesse setor é fundamental para garantir a produção de alimentos de forma responsável e com menor impacto no meio ambiente.
          </p>
          <span className="date">March 2, 2025</span>
        </div>
        <div className="post">
          <h3>#1. Desafios da Irrigação no Brasil</h3>
          <p>
            O Brasil, apesar de ser um país com abundância hídrica, enfrenta desafios significativos na gestão da irrigação. A engenharia agrícola desempenha um papel crucial na implementação de sistemas eficientes que otimizem o uso da água nas lavouras, evitando desperdícios e garantindo o abastecimento para a agricultura em diferentes regiões do país.
          </p>
          <span className="date">March 1, 2025</span>
        </div>
      </section>

      
      <main>
        <NewsletterComponent />
      </main>
      <Footer/>
    </div>
  );
}
