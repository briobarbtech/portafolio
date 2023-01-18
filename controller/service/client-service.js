import { Endpoints } from "../../assets/endpoints.js"

function get_resources(){
    return fetch(Endpoints.urlRemote).then((response)=>{
        return response.json()
    })
}

export const client_services = {
    get_resources,
}