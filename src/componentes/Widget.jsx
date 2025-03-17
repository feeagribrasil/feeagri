import React from 'react'
import '../styles/widget.scss'

import Imagem4 from '../assets/21.jpg';
import Imagem2 from '../assets/19.jpg';
import Imagem3 from '../assets/17.jpg';

export default function Widget() {

    const contentData = [
        {
          slug: 'organizacao-de-eventos',
          title: 'Organização de Eventos Acadêmicos',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer.',
          img: Imagem2,
        },
        {
          slug: 'incentivo-a-pesquisa-e-extensao',
          title: 'Incentivo à Pesquisa e Extensão',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer.',
          img: Imagem3,
        },
        {
          slug: 'capacitacao-e-desenvolvimento',
          title: 'Capacitação e Desenvolvimento',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer.',
          img: Imagem4,
        },
      ];
  return (
    <div className='widget'>
        
        {contentData.map((card, index) => (
            <div className="contentWidget">
                <img src={card.img} alt="" />
                <h2>{card.title}</h2>
                <p>{card.text}</p>
             
              </div>
        ))}
        
    </div>
  )
}
