import { Car } from 'helpers/interfaces/Car';
import http from './httpService';

const apiEndpoint = 'http://localhost:8080/cars';

export function findCars() {
  return http.get(apiEndpoint);
}

export function findTheMostFrequentlyRepairedBrand() {
  return http.get(apiEndpoint + '/brand');
}

export function findCarsByRegistration() {
  return http.get(apiEndpoint + '/registrations');
}

export function findCar(carId: number) {
  return http.get(apiEndpoint + '/' + carId);
}

export function deleteCar(carId: number) {
  return http.delete(apiEndpoint + '/' + carId);
}

export function saveCar(car: Car) {
  return http.post(apiEndpoint, car);
}
