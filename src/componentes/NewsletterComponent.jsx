import React, { useState } from 'react';
import '../styles/Newsletter.scss';
import leaf from '../assets/leaf.png'

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // A lógica para enviar o e-mail será implementada aqui
    console.log('E-mail cadastrado:', email);
  };

  return (
    <div className='Newsletter'>
      <div className='container'>
        <h2>Inscreva-se na nossa Newsletter! <img src={leaf} alt="" /></h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptatem voluptates minus sunt officiis nobis hic recusandae quam, provident, possimus atque repudiandae! Vero ipsam necessitatibus quasi alias facere voluptatum dicta.</p>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Digite seu e-mail'
            value={email}
            onChange={handleInputChange}
            required
          />
          <button type='submit'>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
