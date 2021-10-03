import { Car } from 'helpers/interfaces/Car';
import { useCallback } from 'react';
import { getCar, getCars, getCarsByRegistration, saveCar, deleteCar } from 'service/carService';

export const useCars = () => {
  const getAllCars = useCallback(async () => {
    try {
      const result = await getCars();
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getAllCarsByRegistrationNumbers = useCallback(async () => {
    try {
      const result = await getCarsByRegistration();
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getCarById = useCallback(async (carId: number) => {
    try {
      const result = await getCar(carId);
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
    getCarById,
    addCar,
    removeCar,
  };
};
