const btnsim = document.getElementById('abrir');
const btnabriro = document.getElementById('abriro');

btnsim.addEventListener('click', function(){
    alert('Estamos Enfrentando Problema no Servidor!, Tente novamente com (OBVIAMENTE SIM!)')
});

btnabriro.addEventListener('click', function(){
    window.location.href = 'carta.html'
})

