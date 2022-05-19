import "./styles.css";

let jogo = {
  iniciarNovoJogo() {
    jogo = {
      ...jogo,
      turno: 0,
      jogadorAtual: "X",
      campo: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      jogoFinalizado: false
    };
  },
  imprimir() {
    console.log(`
    ${jogo.campo[6]}|${jogo.campo[7]}|${jogo.campo[8]}
    -----
    ${jogo.campo[3]}|${jogo.campo[4]}|${jogo.campo[5]}
    -----
    ${jogo.campo[0]}|${jogo.campo[1]}|${jogo.campo[2]}
    
    `)
  },    
    trocarJogador(){jogo.jogadorAtual=jogo.jogadorAtual === 'x' ? '0' : 'x';},
      fazerJogada(posicao){ if(posicao>0 && posicao<10 && typeof jogo.campo[posicao-1]){ 
        === number; jogo.compo[posicao-1]= jogo.jogadorAtual;
        jogo.turno++;
        return true;
      }
      return false; 
    }
    verificarGanhador(){

    }
  }
jogo.iniciarNovoJogo();
jogo.imprimir();
