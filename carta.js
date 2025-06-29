const start = document.getElementById('start');
const input1 = document.getElementById('filho');
const input2 = document.getElementById('filha')
const digite = document.getElementById('digite')
const verify = document.getElementById('verify')
const quiz = document.querySelector('.quiz')
const cores = document.querySelector('.cores')
const corFundo = document.getElementById('background');
const corLetra = document.getElementById('letra');
const fonte = document.getElementById('fonte');
const carta = document.querySelector('main')
const fonteCarta = document.querySelector('.carta');
const fotos = document.querySelector('.fotos')

const input1v = input1.value;
const input2v = input2.value;

function mostraQuiz() {
input1.style.display = '';
input2.style.display = '';
digite.style.display = '';
verify.disabled = false;
}

function verifica() {
    if (input1.value == 'Davi' && input2.value == 'Emily' || input1.value == 'davi' && input2.value == 'emily') {
      quiz.style.display = 'none';
      cores.style.display = '';
      document.querySelector('main').style.display = '';
    } else {
        alert('Reposta Incorreta')
    }
}

function fonteVazia() {
    fonte.addEventListener('input', function(){
        if (fonte.value == '' || fonte.value == 0) {
fonteCarta.style.fontSize = 20 + 'px';
}
})
}

function baixarPDF() {
  const elemento = document.querySelector('main'); // ou qualquer outro seletor
  const bodyimg = document.body.style.background

  const opt = {
    margin:       10,
    filename:     'mensagem.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(elemento).save();
}

corFundo.addEventListener('input', function(){
carta.style.background = corFundo.value
})

corLetra.addEventListener('input', function(){
carta.style.color = corLetra.value
})

fonte.addEventListener('input', function(){
fonteCarta.style.fontSize = fonte.value + 'px';
})

function imagensJu() {
const imagens = ['imagens/1.jpg', 'imagens/2.jpeg', 'imagens/3.jpeg', 'imagens/4.jpeg', 'imagens/5.jpeg', 'imagens/6.jpeg', 'imagens/8.jpeg'];
let index = 0;
const banner = document.getElementById('imgs');

setInterval(() => {
  index = (index + 1) % imagens.length; // volta pra 0 quando chega no fim
  banner.src = imagens[index];
}, 3000); // 4000 milissegundos = 4 segundos
}

const imagensTroca = imagensJu();

fotos.innerHTML = `
<div class='fotos'>
 <h2>Você é muito Especial Para Mim Gata❤️</h2>
<img src='${imagensTroca}' id='imgs'>
</div>
`

fonteVazia();