const sectorDeContactos = document.getElementById('redes-sociales')     // Traemos a una variable el elemento del DOM identificado por el id redes-sociales
function crearElementoContacto(parametro){                              // Creamos una función que crea el elemento tal cual queremos esté en el DOM    
    return `<img class="img-social" src=${parametro.img}
    alt=""><a href=""></a>${parametro.nombre}`
}

const redes = [                                                         // Creamos la lista con los datos de cada elemento a crear 
    {
        "nombre":"GitHub",
        "img":"../assets/img/icons/github.svg"
    },
    {
        "nombre":"LinkedIn",
        "img":"../assets/img/icons/linkedin.svg"
    },
    {
        "nombre":"Instagram",
        "img": "../assets/img/icons/instagram.svg"
    },
    {
        "nombre":"Curriculum",
        "img": "../assets/img/icons/curriculum-vitae.svg"
    }
]

redes.forEach(contacto => {                                             // Por cada elemente en el Array de redes
    let li = document.createElement('li')                               // va a crear un elemento de tipo li
    li.innerHTML = crearElementoContacto(contacto)                      // va a agregar el resuitado de la función crearEllemento
    sectorDeContactos.appendChild(li)                                   // y finalmente lo agrega como hijo del sector de contactos en el DOM 
});
