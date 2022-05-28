const urlRemote = `https://briobarbtech.github.io/brian-barquesi-portafolio/db.json`;
const urlLocal = '../../db.json'

function get_resources(){
    return fetch(urlRemote).then((response)=>{
        return response.json()
    })
}


export const client_services = {
    get_resources,
}