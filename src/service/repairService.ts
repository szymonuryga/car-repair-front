import { Repair } from 'helpers/interfaces/Repair';
import http from './httpService';

const apiEndpoint = 'http://localhost:8080/repairs';

export function findRepairs() {
  return http.get(apiEndpoint);
}

export function findTheMostFrequentlyRepairedCar() {
  return http.get(apiEndpoint + '/car');
}

export function findFavouriteClient() {
  return http.get(apiEndpoint + '/client');
}

export function findTheMostFrequentlyUsedCategory() {
  return http.get(apiEndpoint + '/category');
}

export function findTheBestMechanic() {
  return http.get(apiEndpoint + '/mechanic');
}

export function endRepair(repairId: number) {
  return http.post(apiEndpoint + '/' + repairId + '/end');
}

export function assignPrice(repairId: number, price: number) {
  return http.post(apiEndpoint + '/' + repairId + '?price=' + price);
}

export function findRepair(repairId: number) {
  return http.get(apiEndpoint + '/' + repairId);
}

export function saveRepair(repair: Repair) {
  return http.post(apiEndpoint, repair);
}
