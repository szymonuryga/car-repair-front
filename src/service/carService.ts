import { Car } from 'helpers/interfaces/Car';
import http from './httpService';

const apiEndpoint = 'http://localhost:8080/cars';

export function getCars() {
  return http.get(apiEndpoint);
}

export function getCarsByRegistration() {
  return http.get(apiEndpoint + '/registrations');
}

export function getCar(carId: number) {
  return http.get(apiEndpoint + '/' + carId);
}

export function deleteCar(carId: number) {
  return http.delete(apiEndpoint + '/' + carId);
}

export function saveCar(car: Car) {
  return http.post(apiEndpoint, car);
}
