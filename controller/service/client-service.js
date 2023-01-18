function get_resources(urlRemote){
    return fetch(urlRemote).then((response)=>{
        return response.json()
    })
}

export const client_services = {
    get_resources,
}