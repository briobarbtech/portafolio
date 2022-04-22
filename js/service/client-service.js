function get_resources(){
    return fetch(`https://briobarbtech.github.io/brian-barquesi-portafolio/db.json`).then((response)=>{
        return response.json()
    })
}


export const client_services = {
    get_resources,
}