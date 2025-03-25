import React, { useState } from 'react';
import axios from 'axios'; 
import '../styles/Newsletter.scss';
import leaf from '../assets/leaf.png';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envia o email para o backend usando axios
      const response = await axios.post('apifeeagri-production.up.railway.app/newsletter/subscribe/', {
        email: email, // Envia o email no corpo da requisição
      });

      if (response.status === 200) {
        console.log('Sucesso:', response.data.message);
        alert('Inscrição realizada com sucesso!');
        setEmail(''); // Limpa o campo de email após o sucesso
      }
    } catch (error) {
      // Trata erros da requisição
      console.error('Erro:', error.response?.data?.message || error.message);
      alert('Erro ao se inscrever. Tente novamente.');
    }
  };

  return (
    <div className='Newsletter'>
      <div className='container'>
        <h2>Inscreva-se na nossa Newsletter! <img src={leaf} alt="" /></h2>
        <p>Inscreva-se em nossa newsletter e acompanhe atualizações quinzenais sobre o meio agrícola, ambiental e tecnologias de biossistemas. Além de atualizações, utilizamos nossa newsletter como uma forma de atualizarmos nossos associados, delegados de instituições e nossos parceiros.  </p>
        <p className='mob'>Inscreva-se em nossa newsletter e acompanhe atualizações quinzenais sobre o meio agrícola, ambiental e tecnologias de biossistemas</p>

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