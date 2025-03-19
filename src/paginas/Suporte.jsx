import React from 'react'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'
import '../styles/auxiliar.scss'

export default function Suporte() {
  return (
    <div>
        <Header />
        <div className='auxiliar'>
            <div className="container">
                <h2>Suporte</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, possimus adipisci necessitatibus modi repellendus ducimus sunt neque tempore eveniet excepturi quos nihil id sapiente omnis dolores ab animi error blanditiis.</p>
            </div>
        </div>

        <Footer />
    </div>
  )
}
