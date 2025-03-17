import React from 'react'
import '../styles/widget.scss'

export default function WidgetCustom() {

    const contentData = [
        {
          slug: 'organizacao-de-eventos',
          title: 'Organização de Eventos Acadêmicos',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer.'
        },
        {
          slug: 'incentivo-a-pesquisa-e-extensao',
          title: 'Incentivo à Pesquisa e Extensão',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer.'
        },
        {
          slug: 'capacitacao-e-desenvolvimento',
          title: 'Capacitação e Desenvolvimento',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer.'
        },
      ];
  return (
    <div className='widget'>
        
        {contentData.map((card, index) => (
            <div className="contentWidget">
                <h2 className='custom'>{card.title}</h2>
                <p>{card.text}</p>
              </div>
        ))}
        
    </div>
  )
}
