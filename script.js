const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(buttton => {
   buttton.addEventListener('click', function(){
const atual = document.querySelector('.ativo');
const proximoPasso = 'passo-' + this.greAttribute('data-proximo');

atual.classList.remove('ativo');
document.getElementById(proximoPasso).classList.add('ativo');
   })
})