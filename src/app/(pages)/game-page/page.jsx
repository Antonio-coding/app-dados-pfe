'use client'
import React, { useEffect, useState } from "react";
import { Dado } from "@/app/components/dado";
import { Styles } from "@/app/(pages)/game-page/style";

const GamePage = () => {
  const [dadoJogador1, setDadoJogador1] = useState();
  const [dadoJogador2, setDadoJogador2] = useState();
  const [jogadorAtivo, setJogadorAtivo] = useState(1); // Começa com o jogador 1
  const [placarJogador1, setPlacarJogador1] = useState(0);
  const [placarJogador2, setPlacarJogador2] = useState(0);
  const [rodadas, setRodadas] = useState(0);

  useEffect(() => {
    if (rodadas >= 5) {
      setRodadas(rodadas + 2);
      if (placarJogador1 > placarJogador2) {
        alert("O Jogador 1 é o vencedor!");
      } else if (placarJogador1 < placarJogador2) {

        alert("O Jogador 2 é o vencedor!");
      } else {

        alert("Empate!");
      }

      // Reinicia o jogo após 5 rodadas
      setDadoJogador1(0);
      setDadoJogador2(0);
      setPlacarJogador1(0);
      setPlacarJogador2(0);
      setRodadas(0);
    }
  }, [rodadas, placarJogador1, placarJogador2]);

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
      setRodadas(rodadas + 1); // Incrementa o número de rodadas
    }
  };

  const handleClickJogarNovamente = () => {
    // Reinicia o jogo e zera os scores
    setDadoJogador1(0);
    setDadoJogador2(0);
    setPlacarJogador1(0);
    setPlacarJogador2(0);
    setRodadas(0);
  };

  return (
    <>
      <div className={Styles.main}>
        <div className="flex  gap-5">
          <div>
            <h1 className={Styles.title}>Jogador 1</h1>
            <Dado valor={dadoJogador1} />
            <button className={Styles.button} onClick={() => handleClickJogar(1)} disabled={jogadorAtivo !== 1}>
              Jogar Dado
            </button>
          </div>
          <div>
            <h1 className={Styles.title}>Jogador 2</h1>
            <Dado valor={dadoJogador2} />
            <button className={Styles.button} onClick={() => handleClickJogar(2)} disabled={jogadorAtivo !== 2}>
              Jogar Dado
            </button>
          </div>
        </div>
        <div className=" border-dashed  border-gray-700 border-l-[4px] h-[456px] px-5  w-[16rem] ">
          <p className={Styles.title}>Resultado</p>
          <br />
          <h3 className="text-3xl font-semibold">Rodadas</h3>
          <br />
          <p className={Styles.text}>Jogadas: {rodadas}</p>
          <h3 className="text-3xl font-semibold">Placar</h3>
          <br />
          <p className={Styles.text}>Jogador 1: {placarJogador1}</p>
          <p className={Styles.text}>Jogador 2: {placarJogador2}</p>
          <button className={Styles.button} onClick={handleClickJogarNovamente} >
            Jogar Novamente
          </button>
        </div>
      </div>
    </>
  );
};

export default GamePage;
