// Botão de alterar o texto após 3 segundos
const botaoAlterar = document.getElementById('botao-alterar');
const texto = document.getElementById('texto');

botaoAlterar.addEventListener('click', () => {
    setTimeout(() => {
        texto.textContent = 'O texto foi alterado após 3 segundos!';
    }, 3000);
});

// Botão para iniciar o contador que atualiza a cada segundo
let contador = 0;
let intervaloAtivo = false;
const botaoContador = document.getElementById('botao-contador');
const contadorTexto = document.getElementById('contador');
let intervalId;

botaoContador.addEventListener('click', () => {
    if (!intervaloAtivo) {
        intervalId = setInterval(() => {
            contador++;
            contadorTexto.textContent = `Contador: ${contador}`;
        }, 1000);
        intervaloAtivo = true;
    }
});

// Botão para voltar no histórico do navegador
const botaoVoltar = document.getElementById('botao-voltar');
botaoVoltar.addEventListener('click', () => {
    window.history.back();
});

// Botão para avançar no histórico do navegador
const botaoAvancar = document.getElementById('botao-avancar');
botaoAvancar.addEventListener('click', () => {
    window.history.forward();
});
