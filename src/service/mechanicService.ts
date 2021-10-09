import http from './httpService';
import { Mechanic } from 'helpers/interfaces/Mechanic';

const apiEndpoint = 'http://localhost:8080/mechanics';

export function findMechanics() {
  return http.get(apiEndpoint);
}

export function findMechanicsByEmails() {
  return http.get(apiEndpoint + '/emails');
}

export function findMechanic(mechanicId: number) {
  return http.get(apiEndpoint + '/' + mechanicId);
}

export function deleteMechanic(mechanicId: number) {
  return http.delete(apiEndpoint + '/' + mechanicId);
}

export function saveMechanic(mechanic: Mechanic) {
  return http.post(apiEndpoint, mechanic);
}
