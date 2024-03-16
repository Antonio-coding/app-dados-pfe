'use client'
import React, { useState } from "react";
import { Dado } from "@/app/components/dado";

export default function GamePage() {
  const [dadoJogador1, setDadoJogador1] = useState();
  const [dadoJogador2, setDadoJogador2] = useState();
  const [jogadorAtivo, setJogadorAtivo] = useState(1); // Começa com o jogador 1

  const handleClickJogar = (jogador) => {
    const valor = Math.floor(Math.random() * 6) + 1;
    jogador === 1 ? setDadoJogador1(valor) : setDadoJogador2(valor);
    setJogadorAtivo(jogador === 1 ? 2 : 1); // Troca para o próximo jogador
  };

  return (
    <>
      <div className="flex flex-row gap-4">
        <div>
          <h1 className="title">Jogador 1</h1>
          <Dado valor={dadoJogador1} />
          <button onClick={() => handleClickJogar(1)} disabled={jogadorAtivo !== 1}>
            Jogar Dado
          </button>
        </div>
        <div>
          <h1 className="title">Jogador 2</h1>
          <Dado valor={dadoJogador2} />
          <button onClick={() => handleClickJogar(2)} disabled={jogadorAtivo !== 2}>
            Jogar Dado
          </button>
        </div>
      </div>
    </>
  );
}
