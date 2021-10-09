import { Client } from 'helpers/interfaces/Client';
import http from './httpService';

const apiEndpoint = 'http://localhost:8080/clients';

export function findClients() {
  return http.get(apiEndpoint);
}

export function findClientsByNationalId() {
  return http.get(apiEndpoint + '/nationals');
}

export function findClient(clientId: number) {
  return http.get(apiEndpoint + '/' + clientId);
}

export function deleteClient(clientId: number) {
  return http.delete(apiEndpoint + '/' + clientId);
}

export function saveClient(client: Client) {
  return http.post(apiEndpoint, client);
}
