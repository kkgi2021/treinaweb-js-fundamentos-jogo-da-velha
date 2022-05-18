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
    `);
  }
};
jogo.iniciarNovoJogo();
jogo.imprimir();
