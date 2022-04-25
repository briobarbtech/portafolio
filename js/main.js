import { client_services } from "./service/client-service.js";

const sectorDeContactos = document.getElementById('redes-sociales')     // Traemos a una variable el elemento del DOM identificado por el id redes-sociales
const sectorDeSkills = document.getElementById('sector-skills') 
const sectorDeHobbies = document.getElementById('sector-hobbies')
const sectorDeFormacion = document.getElementById('sector-formacion')
function crearElemento(parametro){                              // Creamos una función que crea el elemento tal cual queremos esté en el DOM    
    return `<img class=${parametro.class} src=${parametro.img}
    alt=""><p href="#">${parametro.nombre}</p>`
}


async function crearElementosContactos(resource) {
    const data = await client_services.get_resources()
    data[resource].forEach(contacto => {                                             // Por cada elemente en el Array de redes
        let li = document.createElement('li')                               // va a crear un elemento de tipo li
        li.innerHTML = crearElemento(contacto)                      // va a agregar el resuitado de la función crearEllemento
        sectorDeContactos.appendChild(li)                                   // y finalmente lo agrega como hijo del sector de contactos en el DOM 
    });
}

async function crearElementosSkills(resource) {
    const data = await client_services.get_resources()
    data[resource].forEach(skill =>{
        let li = document.createElement('li')
        li.classList.add('lista-skills')
        li.innerHTML = crearElemento(skill)
        sectorDeSkills.appendChild(li)
    });
}

async function crearElementosHobbies(resource) {
    const data = await client_services.get_resources()
    data[resource].forEach(skill =>{
        let li = document.createElement('li')
        li.classList.add('lista-hobbies')
        li.innerHTML = crearElemento(skill)
        sectorDeHobbies.appendChild(li)
    });
}


function elementoFormacion(parametro){                              // Creamos una función que crea el elemento tal cual queremos esté en el DOM    
    return `
    <p class="subtitulo">${parametro.nombre}</p>
    <p class="subtitulo-2">${parametro.institucion}</p>
    <p>${parametro.duracion}</p>
    <img class=${parametro.class} src=${parametro.img}alt=""><p href="#">
    `
}

async function crearElementoFormacion(resource) {
    const data = await client_services.get_resources()
    data[resource].forEach(skill =>{
        let li = document.createElement('li')
        li.classList.add('lista-formacion')
        li.innerHTML = elementoFormacion(skill)
        sectorDeFormacion.appendChild(li)
    });
}

crearElementosContactos("redes")
crearElementosSkills("skills")
crearElementosHobbies('hobbies')
crearElementoFormacion('formacion')