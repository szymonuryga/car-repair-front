import http from './httpService'

const apiEndpoint = 'http://localhost:8080/clients';


export function getClients(){
    return http.get(apiEndpoint);
}


export function getClient(clientId: number){
    return http.get(apiEndpoint+ '/'+clientId)
}

export function deleteClient(clientId: number){
    return http.delete(apiEndpoint+ '/'+clientId)
}

export function saveClient(client: Client){
    return http.post(apiEndpoint, client)
}

interface Client {
    id?: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    nationalId: string;
}