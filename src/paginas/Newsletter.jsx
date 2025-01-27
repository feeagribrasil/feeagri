import React from "react";
import Header from "../componentes/Header";
import "../styles/HeaderSecundario.scss";
import NewsletterComponent from "../componentes/NewsletterComponent";

export default function Newsletter() {
  return (
    <div>
         <Header />
            <div className="HeaderSecundario">
              <div className="links">
                <h3> <a href="">Home</a> | <a href="">Newsletter</a></h3>
              </div>
                <div className="container">
                <h2>Acompanhe nossa newsletter</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero quibusdam laboriosam ipsum commodi ratione quia corporis facilis eligendi ullam, explicabo neque in minus, voluptatem dolorum. Veniam nulla sint maxime.</p>
                </div>
              </div>
            <main>
            <NewsletterComponent />
            </main>
    </div>
  )
}
