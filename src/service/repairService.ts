import http from './httpService'

const apiEndpoint = 'http://localhost:8080/repairs';


export function getReapirs(){
    return http.get(apiEndpoint);
}

export function endRepair(repairId: number){
    return http.post(apiEndpoint+ '/'+repairId+'end')
}

export function assignPrice(repairId: number, price: number){
    return http.post(apiEndpoint+'/'+repairId + '?price='+price);
}

export function getRepair(repairId: number){
    return http.get(apiEndpoint+ '/'+repairId)
}

export function saveRepair(repair: Repair){
    return http.post(apiEndpoint, repair)
}

interface Repair {
    id?: number;
    start: string;
    end: string;
    price: number;
    nationalId: string;
    firstName: string;
    lastName: string;
    registrationNumber: string;
    category: string;
    email: string;
    
}