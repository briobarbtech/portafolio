function get_resources(){
    return fetch(`https://briobarbtech.github.io/brian-barquesi-portafolio/redes.json`).then((response)=>{
        console.log(response)
    })
}


export const client_services = {
    get_resources,
}