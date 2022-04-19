var titulo = document.getElementById('Titulo-formacion');
var descripcion = document.getElementById('descripcion-titulo');
var imageAtras = document.querySelector('#slider-button1');
var imageAdelante = document.querySelector('#slider-button2');

var imagenes = [];
imagenes[0] = 'assets/img/cursos/imagen-1.png';
imagenes[1] = 'assets/img/cursos/imagen-2.png';
imagenes[2] = 'assets/img/cursos/imagen-3.png';
imagenes[3] = 'assets/img/cursos/imagen-4.png';

var titulos = ["Tecnico superior en Desarrollo de software","Técnico superior en Computación y redes", "Desarrollo de videojuegos nivel Inicial","Estudiante en Alura"];
var descripciones = [
    "Actualmente estudio la Tecnicatura en Desarrollo de software en el IES 9-010 \"Rosario Vera Peñaloza\"",
    "En el IES 9-010 \"Rosario Vera Peñaloza\" estudié también la Tecnicatura en computación y redes,  obteniendo mi titulo en Marzo del 2020",
    "Durante las vacaciones de verano de ese año (2020) tambien logré cursar con éxito un curso de Desarrollo de videojuegos nivel incial en la UTN - Facultad Regional Resistencia.",
    "En el año 2022 inicie el trayecto como estudiante de Alura, enfrentándome a muchos desafios que me han ayudado a aprender mucho sobre programación, desarrollo de software, y tambien desarrollo personal."];
var indiceImagenes = 0;
var tiempo = 9000;

descripcion.innerHTML = descripciones[indiceImagenes];
titulo.innerHTML = titulos[indiceImagenes];
document.slider.src = imagenes[indiceImagenes];

function resetClases(){
    descripcion.classList.remove('show');
    titulo.classList.remove('show');
    document.slider.classList.remove('show');
}
function setearElementos(){
    descripcion.innerHTML = descripciones[indiceImagenes];
    //descripcion.classList.add('show')
    titulo.innerHTML = titulos[indiceImagenes];
    //titulo.classList.add('show')
    document.slider.src = imagenes[indiceImagenes];
    //document.slider.classList.add('show')
}
function sumarIndice(){
    if(indiceImagenes < 3){
        indiceImagenes++;
    }
    else{
        indiceImagenes = 0;
    }
    setearElementos();
      
}
function restarIndice(){
    if(indiceImagenes > 0){
        indiceImagenes--;
    }
    else{
        indiceImagenes = 3;
    }
    setearElementos();

}

setInterval(sumarIndice,tiempo)
imageAtras.addEventListener('click',sumarIndice);
imageAdelante.addEventListener('click',restarIndice);

