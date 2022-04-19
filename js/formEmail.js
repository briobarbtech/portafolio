var botonEmail = document.querySelector('.buton-email');
var modal = document.querySelector('#modal');
var botonCerrar = document.querySelector('.cerrarBoton');


botonEmail.addEventListener('click',function(e){
    e.preventDefault();
    modal.classList.toggle('modal--show')
})

botonCerrar.addEventListener('click', function(e){
    e.preventDefault();
    modal.classList.remove('modal--show')
})