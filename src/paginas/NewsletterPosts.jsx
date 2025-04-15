import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import "../styles/auxiliar.scss";
import imagem from '../assets/9.jpg';
import imagem2 from '../assets/10.jpg';

export default function NewsletterPost() {
  return (
    <div>
      <Header />
      <div className="auxiliar">
        <div className="container">
          <h1>FEEAGRI</h1>
          <h2>Federação Brasileira dos Estudantes de Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia de Biossistemas</h2>
          <h2 className="custom"><strong>Newsletter #1</strong></h2>

          <p>
            É com grande entusiasmo que iniciamos nossa primeira Newsletter oficial! Aqui você encontrará informações importantes sobre as ações da FEEAGRI, oportunidades de representação estudantil e atualizações sobre eventos nacionais da nossa área. Fique por dentro e compartilhe com os colegas!
          </p>

          <div className="resume">
            <h2>Resumo da Edição</h2>
            <ul>
              <li>
                <p>Como se tornar delegado da FEEAGRI</p>
              </li>
              <li>
                <p>Primeira edição da Newsletter da Federação</p>
              </li>
              <li>
                <p>Atualizações sobre o XXXVII CONEEAGRI</p>
              </li>
            </ul>
          </div>

          <div className="sep" />

          {/* BLOCO 1 - DELEGADO */}
          <div className="conteudo">
            <h2>Torne-se um Delegado da FEEAGRI</h2>
            <h3>Representando sua instituição em nível nacional</h3>
            <p>
              A FEEAGRI convida estudantes de Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia de Biossistemas a formarem chapas e participarem da eleição para o Conselho Diretivo 2025, com mandato de <strong>1º de janeiro a 31 de dezembro de 2025</strong>.
            </p>

            <h3>📌 Quem pode se candidatar?</h3>
            <p>
              Estudantes regularmente matriculados nos cursos citados acima e associados à <strong>ABEAG</strong> (nacional ou regional), com a associação em dia.
            </p>

            <h3>📑 Documentos necessários</h3>
            <p>Envie os documentos até <strong>27 de novembro de 2024</strong> para <strong>abeagnacional@gmail.com</strong>:</p>
            <ul>
              <li>Documento de identidade de todos os candidatos</li>
              <li>Atestados de matrícula atualizados</li>
              <li>Declaração com os cargos que cada membro ocupará</li>
              <li>Comprovante de regularidade com a ABEAG</li>
              <li>Proposta de candidatura da chapa (PDF)</li>
            </ul>
            <p><em>Obs: Apenas um e-mail por chapa deve ser enviado.</em></p>

            <h3>📢 Como será a votação?</h3>
            <p>
              A votação será realizada de forma <strong>virtual</strong> no dia <strong>5 de dezembro de 2024, às 19h (horário de Brasília)</strong>. Apenas os delegados oficialmente reconhecidos poderão votar, com envio de comprovação até <strong>3 de dezembro</strong>.
            </p>

            <h3>📊 Apuração e resultado</h3>
            <p>
              A apuração ocorrerá logo após o encerramento da eleição, com condução da Comissão Eleitoral. Em caso de empate, o critério de desempate será o tempo de associação à ABEAG. Persistindo o empate, uma nova votação será convocada.
            </p>

            <p>📩 Dúvidas? Escreva para: <strong>abeagnacional@gmail.com</strong></p>
          </div>

          {/* BLOCO 2 - ESTREIA NEWSLETTER */}
          <div className="conteudo">
            <h2>Estreia da Newsletter FEEAGRI</h2>
            <h3>Agora com comunicações mensais para os estudantes</h3>
            <img src={imagem} alt="Newsletter FEEAGRI" />
            <p>
              A FEEAGRI está lançando sua Newsletter mensal com o objetivo de aproximar ainda mais os estudantes e divulgar as ações da Federação. Esperamos manter todos informados sobre oportunidades, eventos, atividades e muito mais.
            </p>
            <p>Se você é estudante da área, acompanhe nossos canais e fique por dentro de tudo que estamos organizando para fortalecer nossa comunidade acadêmica!</p>
          </div>

          {/* BLOCO 3 - CONEEAGRI */}
          <div className="conteudo">
            <h2>Novidades sobre o XXXVII CONEEAGRI</h2>
            <h3>O maior encontro nacional da nossa categoria está chegando!</h3>
            <img src={imagem2} alt="CONNEAGRI" />
            <p>
              O XXXVII Congresso Nacional dos Estudantes de Engenharia Agrícola (CONNEAGRI) e o I Encontro Nacional dos Pós-Graduandos em Engenharia Agrícola (ENPEAG) ocorrerão entre os dias <strong>22 e 26 de outubro de 2024</strong>, na UFPR – Campus Jandaia do Sul.
            </p>
            <p>
              A FEEAGRI estará presente e trará atualizações mensais sobre o evento. Fique atento aos prazos de inscrição, chamadas de trabalhos e oportunidades de participação ativa na organização e execução do congresso.
            </p>
            <p>📩 Dúvidas sobre o evento? Nos escreva!</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
