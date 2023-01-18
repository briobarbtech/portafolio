import { client_services } from "./service/client-service.js";

const sectorDeContactos = document.getElementById('redes-sociales')     // Traemos a una variable el elemento del DOM identificado por el id redes-sociales
const sectorDeSkills = document.getElementById('sector-skills') 
const sectorDeHobbies = document.getElementById('sector-hobbies')
const sectorDeFormacion = document.getElementById('sector-formacion')
const sectorDeProyectos = document.getElementById('sector-proyectos')
function crearElemento(parametro){                              // Creamos una función que crea el elemento tal cual queremos esté en el DOM    
    return `<img class=${parametro.class} src=${parametro.img}
    alt=""><p href="#">${parametro.nombre}</p>`
}
function crearEnlace(parametro){
    return `<a href=${parametro.link} target="_blank">
        <img class=${parametro.class} src=${parametro.img}
        alt=""><p href="#">${parametro.nombre}</p>
    </a>`
}


function crearElementoFormacion(parametro){                              // Creamos una función que crea el elemento tal cual queremos esté en el DOM    
    return `
    <img class="${parametro.class}" src=${parametro.img} alt="">
    <div class="itemFormacion">
        <p class="subtitulo">${parametro.nombre}</p>
        <div class="instituto">
            <p class="instituto-nombre">${parametro.institucion}</p>
            <p class="duracion">${parametro.duracion}</p>
        </div>
        <p class="description">${parametro.description}</p>
    </div>
    `
}

function crearElementoProyecto(parametro){
    return `
    <img class="img-proyecto" src=${parametro.image}>
    <div class="item-proyecto">
        <p class="subtitulo">${parametro.nombre}</p>    
        <p class="subtitulo-2">${parametro.description}</p>
    </div>
    `
}

async function createElement(resource, className, parent, functionElement) {
    const data = await client_services.get_resources(Endpoint.urlLocal);
    data[resource].forEach(proyecto => {
        let li = document.createElement('li');
        li.classList.add(className);
        li.innerHTML = functionElement(proyecto)
        parent.appendChild(li)
    })
}

createElement("redes", 'lista-redes', sectorDeContactos,crearEnlace)
createElement("skills", 'lista-skills', sectorDeSkills, crearElemento)
createElement('hobbies', 'lista-hobbies', sectorDeHobbies, crearElemento)
createElement('formacion','lista-formacion',sectorDeFormacion, crearElementoFormacion)
createElement('proyectos','lista-proyectos',sectorDeProyectos,crearElementoProyecto)





const toggleButton = document.querySelector('.toggle-button');
const nav = document.querySelector('.nav')
toggleButton.addEventListener('click',()=>{
    nav.classList.toggle('toggle_visible')
})

const navButtons = document.querySelectorAll('[data-button-nav]')

/* console.log('window.innerWidth: ', window.innerWidth); */
navButtons.forEach(element => {
    element.addEventListener('click', ()=>{
        let nav = document.querySelector('.nav');
        if (window.innerWidth < 768){
            nav.classList.toggle('toggle_visible')
        }
    })
});