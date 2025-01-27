import React from "react";
import "../styles/Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Institucional</h4>
          <ul>
            <li><a href="#!">Quem Somos</a></li>
            <li><a href="#!">Nossa Missão</a></li>
            <li><a href="#!">Política de Privacidade</a></li>
            <li><a href="#!">Termos de Uso</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Sobre Nós</h4>
          <ul>
            <li><a href="#!">História</a></li>
            <li><a href="#!">Equipe</a></li>
            <li><a href="#!">Carreiras</a></li>
            <li><a href="#!">Blog</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Ajuda</h4>
          <ul>
            <li><a href="#!">FAQ</a></li>
            <li><a href="#!">Suporte</a></li>
            <li><a href="#!">Contato</a></li>
            <li><a href="#!">Feedback</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Redes Sociais</h4>
          <ul>
            <li><a href="#!">Facebook</a></li>
            <li><a href="#!">Instagram</a></li>
            <li><a href="#!">LinkedIn</a></li>
            <li><a href="#!">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} FEEAGRI. Todos os direitos reservados. Website desenvolvido por André Bandeli</p>
      </div>
    </footer>
  );
}
