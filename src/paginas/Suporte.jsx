import React from 'react'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'
import '../styles/auxiliar.scss'

export default function Suporte() {
  return (
    <div>
        <Header />
        <div className='auxiliar'>
            <div className="container2">
                <h2>Suporte</h2>
                <p>Bem-vindo à nossa central de suporte! Estamos aqui para ajudar com qualquer dúvida ou problema relacionado à FEEAGRI.</p>
                
                <h3>Como podemos te ajudar?</h3>
                <p>Se precisar de assistência com inscrições, eventos, participação como delegado ou qualquer outro assunto, entre em contato conosco.</p>

                <h3>Contato</h3>
                <p>📧 <strong>Email:</strong> feeagri.brasil@gmail.com</p>
                <p>📱 <strong>WhatsApp:</strong> (XX) XXXXX-XXXX</p>
                <p>📍 <strong>Redes Sociais:</strong> Nos acompanhe no Instagram e Facebook para novidades!</p>

                <h3>Perguntas Frequentes</h3>
                <p>Consulte nosso FAQ para dúvidas comuns sobre processos seletivos, regulamentos e eventos.</p>
            </div>
        </div>

        <Footer />
    </div>
  )
}
