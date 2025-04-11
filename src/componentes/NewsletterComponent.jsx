import React, { useState } from "react";
import "../styles/Newsletter.scss";
import leaf from "../assets/leaf.png";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://apifeeagri-production.up.railway.app/newsletter/subscribe/news",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Inscrição realizada com sucesso!",
        });
        setEmail("");
        setTimeout(() => setStatus({ type: "", message: "" }), 3000); // Limpa após 3 segundos
      } else {
        setStatus({
          type: "error",
          message: data.message || "Erro ao se inscrever",
        });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Erro de conexão com o servidor" });
      console.error("Erro:", error);
    }
  };

  return (
    <div className="Newsletter">
      <div className="container">
        <h2>
          Inscreva-se na nossa Newsletter!{" "}
          <img src={leaf} alt="Folha decorativa" />
        </h2>
        <p>
          Inscreva-se em nossa newsletter e acompanhe atualizações quinzenais
          sobre o meio agrícola, ambiental e tecnologias de biossistemas. Além
          de atualizações, utilizamos nossa newsletter como uma forma de
          atualizarmos nossos associados, delegados de instituições e nossos
          parceiros.
        </p>
        <p className="mob">
          Inscreva-se em nossa newsletter e acompanhe atualizações quinzenais
          sobre o meio agrícola, ambiental e tecnologias de biossistemas
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Cadastrar</button>
        </form>

        {status.message && (
          <div className={`status-message ${status.type}`}>
            <p className="succes"> {status.message} </p>
          </div>
        )}
      </div>
    </div>
  );
}
