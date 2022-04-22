const sectorDeContactos = document.getElementById('redes-sociales')     // Traemos a una variable el elemento del DOM identificado por el id redes-sociales
const sectorDeSkills = document.getElementById('sector-skills') 
function crearElementoContacto(parametro){                              // Creamos una función que crea el elemento tal cual queremos esté en el DOM    
    return `<img class="img-social" src=${parametro.img}
    alt=""><a href=""></a>${parametro.nombre}`
}
function crearElementoSkills(parametro){                              // Creamos una función que crea el elemento tal cual queremos esté en el DOM    
    return `<img class="img-skills" src=${parametro.img}
    alt=""><a href="">${parametro.nombre}</a>`
}
const redes = [                                                         // Creamos la lista con los datos de cada elemento a crear 
    {
        "nombre":"GitHub",
        "img":"assets/img/icons/github.svg"
    },
    {
        "nombre":"LinkedIn",
        "img":"assets/img/icons/linkedin.svg"
    },
    {
        "nombre":"Instagram",
        "img": "assets/img/icons/instagram.svg"
    },
    {
        "nombre":"Curriculum",
        "img": "assets/img/icons/curriculum-vitae.svg"
    }
]
const skills = [
    {
        "nombre": "JavaScript",
        "img":"assets/img/skills/javascript-programming-language.svg",
    },
    {
        "nombre":"HTML",
        "img":"assets/img/skills/html.svg"
    },
    {
        "nombre":"CSS3",
        "img":"assets/img/skills/css.svg"
    },
    {
        "nombre":"Python",
        "img":"assets/img/skills/python-programming-language.svg"
    },
    {
        "nombre":"Git",
        "img":"assets/img/skills/git.svg"
    },
    {
        "nombre":"Flutter",
        "img":"assets/img/skills/flutter.svg"
    },
    {
        "nombre":"Conocimiento sobre redes",
        "img":"assets/img/skills/cloud-server.svg"
    },
    {
        "nombre":"Reparación de equipos informáticos",
        "img":"assets/img/skills/workstation.svg"
    },
]

redes.forEach(contacto => {                                             // Por cada elemente en el Array de redes
    let li = document.createElement('li')                               // va a crear un elemento de tipo li
    li.innerHTML = crearElementoContacto(contacto)                      // va a agregar el resuitado de la función crearEllemento
    sectorDeContactos.appendChild(li)                                   // y finalmente lo agrega como hijo del sector de contactos en el DOM 
});

skills.forEach(skill =>{
    let li = document.createElement('li')
    li.classList.add('lista-skills')
    li.innerHTML = crearElementoSkills(skill)
    sectorDeSkills.appendChild(li)
} )

