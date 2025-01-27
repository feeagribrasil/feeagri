import React from "react";
import Header from "../componentes/Header";
import "../styles/Parceiros.scss";
import abeag from '../assets/abeag.png'
import Footer from "../componentes/Footer";

export default function Parceiros() {
  return (
    <div>
    <Header />
                     <div className="HeaderSecundario">
                       <div className="links">
                         <h3> <a href="">Home</a> | <a href="">Parceiros</a></h3>
                       </div>
                         <div className="container">
                         <h2>Nossos Parceiros</h2>
                         <p>Somos gratos por contar com o apoio de organizações e instituições que compartilham nossa visão e valores. Nossos parceiros são essenciais para promover o desenvolvimento da Engenharia Agrícola e fortalecer a colaboração em iniciativas que beneficiam estudantes, profissionais e a sociedade.</p>
                         </div>
                       </div>
                     <main>
                      <div className="parceiros parceiro1">
                        <div className="text"><h2>ABEAG NACIONAL</h2></div>
                        {/* <div className="imagem"><img src={abeag} alt="" /></div> */}
                      </div>
                      <div className="parceiros parceiro2">
                        <div className="text"><h2>ABEAG PR</h2></div>
                        {/* <div className="imagem"><img src={abeag} alt="" /></div> */}
                      </div>
                      <div className="parceiros parceiro3">
                        <div className="text"><h2>CREA JOVEM</h2></div>
                        {/* <div className="imagem"><img src={abeag} alt="" /></div> */}
                      </div>
                 
                     </main>
                     <Footer/>
    </div>
  )
}
  