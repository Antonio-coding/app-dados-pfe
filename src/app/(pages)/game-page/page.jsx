'use client'
import React, { useState } from "react";
import { Dado } from "@/app/components/dado";
import { Styles } from "@/app/(pages)/game-page/style"


export default function GamePage() {
  const [dadoJogador1, setDadoJogador1] = useState();
  const [dadoJogador2, setDadoJogador2] = useState();
  const [jogadorAtivo, setJogadorAtivo] = useState(1); // Começa com o jogador 1
  const [placarJogador1, setPlacarJogador1] = useState(0);
  const [placarJogador2, setPlacarJogador2] = useState(0);

  const handleClickJogar = (jogador) => {
    const valor = Math.floor(Math.random() * 6) + 1;
    jogador === 1 ? setDadoJogador1(valor) : setDadoJogador2(valor);
    setJogadorAtivo(jogador === 1 ? 2 : 1); // Troca para o próximo jogador

    // Atualiza o placar após a jogada do segundo jogador
    if (jogador === 2) {
      if (dadoJogador1 > dadoJogador2) {
        setPlacarJogador1(placarJogador1 + 1);
      } else if (dadoJogador2 > dadoJogador1) {
        setPlacarJogador2(placarJogador2 + 1);
      }
    }
  };

  return (
    <>
      <div className={Styles.main}>
        <div>
          <h1 className={Styles.title}>Jogador 1</h1>
          <Dado valor={dadoJogador1} />
          <button className={Styles.button} onClick={() => handleClickJogar(1)} disabled={jogadorAtivo !== 1}>
            Jogar Dado
          </button>
          <p>Placar: {placarJogador1}</p>
        </div>
        <div>
          <h1 className={Styles.title}>Jogador 2</h1>
          <Dado valor={dadoJogador2} />
          <button className={Styles.button} onClick={() => handleClickJogar(2)} disabled={jogadorAtivo !== 2}>
            Jogar Dado
          </button>
          <p>Placar: {placarJogador2}</p>

        </div>
      </div>
    </>
  );
}
