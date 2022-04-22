import { client_services } from "./service/client-service.js";

const sectorDeContactos = document.getElementById('redes-sociales')     // Traemos a una variable el elemento del DOM identificado por el id redes-sociales
const sectorDeSkills = document.getElementById('sector-skills') 
function crearElemento(parametro){                              // Creamos una función que crea el elemento tal cual queremos esté en el DOM    
    return `<img class=${parametro.class} src=${parametro.img}
    alt=""><a href="">${parametro.nombre}</a>`
}

/* const redes = [                                                         // Creamos la lista con los datos de cada elemento a crear 
    {
        "nombre":"GitHub",
        "img":"assets/img/icons/github.svg",
        "class":"img-social"
    },
    {
        "nombre":"LinkedIn",
        "img":"assets/img/icons/linkedin.svg",
        "class":"img-social"
    },
    {
        "nombre":"Instagram",
        "img": "assets/img/icons/instagram.svg",
        "class":"img-social"
    },
    {
        "nombre":"Curriculum",
        "img": "assets/img/icons/curriculum-vitae.svg",
        "class":"img-social"
    }
]
const skills = [
    {
        "nombre": "JavaScript",
        "img":"assets/img/skills/javascript-programming-language.svg",
        "class":"img-skills"
    },
    {
        "nombre":"HTML",
        "img":"assets/img/skills/html.svg",
        "class":"img-skills"
    },
    {
        "nombre":"CSS3",
        "img":"assets/img/skills/css.svg",
        "class":"img-skills"
    },
    {
        "nombre":"Python",
        "img":"assets/img/skills/python-programming-language.svg",
        "class":"img-skills"
    },
    {
        "nombre":"Git",
        "img":"assets/img/skills/git.svg",
        "class":"img-skills"
    },
    {
        "nombre":"Flutter",
        "img":"assets/img/skills/flutter.svg",
        "class":"img-skills"
    },
    {
        "nombre":"Conocimiento sobre redes",
        "img":"assets/img/skills/cloud-server.svg",
        "class":"img-skills"
    },
    {
        "nombre":"Reparación de equipos informáticos",
        "img":"assets/img/skills/workstation.svg",
        "class":"img-skills"
    },
]
 */

/* async function crearElementosContactos(resource) {
    const data = await client_services.get_resources(resource)
    data.forEach(contacto => {                                             // Por cada elemente en el Array de redes
        let li = document.createElement('li')                               // va a crear un elemento de tipo li
        li.innerHTML = crearElemento(contacto)                      // va a agregar el resuitado de la función crearEllemento
        sectorDeContactos.appendChild(li)                                   // y finalmente lo agrega como hijo del sector de contactos en el DOM 
    });
}

async function crearElementosSkills(resource) {
    const data = await client_services.get_resources(resource)
    data.forEach(skill =>{
        let li = document.createElement('li')
        li.classList.add('lista-skills')
        li.innerHTML = crearElemento(skill)
        sectorDeSkills.appendChild(li)
    });
}

crearElementosContactos("redes")
crearElementosSkills("skills")
 */

const data = client_services.get_resources()
console.log(data['skills'])