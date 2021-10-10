import { Car } from 'helpers/interfaces/Car';
import { useCallback } from 'react';
import { findCar, findCars, findTheMostFrequentlyRepairedBrand, findCarsByRegistration, saveCar, deleteCar } from 'service/carService';

export const useCars = () => {
  const getAllCars = useCallback(async () => {
    try {
      const result = await findCars();
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getTheMostFrequentlyRepairedBrand = useCallback(async () => {
    try {
      const result = await findTheMostFrequentlyRepairedBrand();
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getAllCarsByRegistrationNumbers = useCallback(async () => {
    try {
      const result = await findCarsByRegistration();
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getCarById = useCallback(async (carId: number) => {
    try {
      const result = await findCar(carId);
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const addCar = async (car: Car) => {
    try {
      await saveCar(car);
    } catch (e) {
      console.log(e);
    }
  };

  const removeCar = async (carId: number) => {
    try {
      await deleteCar(carId);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getAllCars,
    getAllCarsByRegistrationNumbers,
    getTheMostFrequentlyRepairedBrand,
    getCarById,
    addCar,
    removeCar,
  };
};
