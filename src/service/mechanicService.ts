import http from './httpService'

const apiEndpoint = 'http://localhost:8080/mechanics';


export function getMechanics(){
    return http.get(apiEndpoint);
}


export function getMechanic(mechanicId: number){
    return http.get(apiEndpoint+ '/'+mechanicId)
}

export function deleteMechanic(mechanicId: number){
    return http.delete(apiEndpoint+ '/'+mechanicId)
}

export function saveMechanic(mechanic: Mechanic){
    return http.post(apiEndpoint, mechanic)
}

interface Mechanic {
    id?: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    salary: number;
}