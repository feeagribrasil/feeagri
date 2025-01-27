import React from 'react'
import '../styles/HeaderSecundario.scss'
import '../styles/Membros.scss'
import Header from "../componentes/Header";
import Footer from '../componentes/Footer'
import '../styles/buttons.scss'
import { Link } from 'react-router-dom';

import Imagem1 from '../assets/pessoa.jpg'

const membrosData = [
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
];

const exMembrosData = [
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },

];

export default function Membros() {
  return (
    <div>
          <Header />
                 <div className="HeaderSecundario">
                   <div className="links">
                     <h3> <a href="">Home</a> | <a href="">Membros</a></h3>
                   </div>
                     <div className="container">
                     <h2>Conselho Diretivo</h2>
                     <p>Conheça as pessoas que contribuem para a consolidação da Federação.</p>
                     <button className='button_primary'><Link to={`/membros/delegacao`} className="">Página de Delegados</Link></button>
                     </div>
                   </div>
                 <main>
                  <div className="containerCustom">
                  <div className="container">
          <h2>Gestão 2025</h2>
          <div className="membros">
            {membrosData.map((membro, index) => (
              <div key={index} className="cardMembro">
                <img src={membro.foto} alt={membro.nome} className="fotoMembro" />
                <h4>{membro.nome}</h4>
                <p>{membro.instituicao}</p>
                <p>{membro.cargo}</p>
              </div>
            ))}
          </div>
          <h2>Ex membros</h2>
          <div className="membros">
            {exMembrosData.map((membro, index) => (
              <div key={index} className="cardMembro">
                <img src={membro.foto} alt={membro.nome} className="fotoMembro" />
                <h4>{membro.nome}</h4>
                <p>{membro.instituicao}</p>
                <p>{membro.cargo}</p>
              </div>
            ))}
          </div>
        </div>
                  </div>
                 </main>
                 <Footer />
    </div>
  )
}
