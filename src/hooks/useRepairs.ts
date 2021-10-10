import { Repair } from 'helpers/interfaces/Repair';
import { useCallback } from 'react';
import {
  findRepair,
  findRepairs,
  saveRepair,
  assignPrice,
  endRepair,
  findTheMostFrequentlyRepairedCar,
  findFavouriteClient,
  findTheMostFrequentlyUsedCategory,
  findTheBestMechanic,
} from 'service/repairService';

export const useRepairs = () => {
  const getAllRepairs = useCallback(async () => {
    try {
      const result = await findRepairs();
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getTheMostFrequentlyRepairedCar = useCallback(async () => {
    try {
      const result = await findTheMostFrequentlyRepairedCar();
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getFavouriteClient = useCallback(async () => {
    try {
      const result = await findFavouriteClient();
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getTheMostFrequentlyUsedCategory = useCallback(async () => {
    try {
      const result = await findTheMostFrequentlyUsedCategory();
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getTheBestMechanic = useCallback(async () => {
    try {
      const result = await findTheBestMechanic();
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getRepairById = useCallback(async (repairId: number) => {
    try {
      const result = await findRepair(repairId);
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const addRepair = async (repair: Repair) => {
    try {
      await saveRepair(repair);
    } catch (e) {
      console.log(e);
    }
  };

  const assignPriceToRepair = async (repairId: number, price: number) => {
    try {
      await assignPrice(repairId, price);
    } catch (e) {
      console.log(e);
    }
  };

  const endOfRepair = async (repairId: number) => {
    try {
      await endRepair(repairId);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getAllRepairs,
    getRepairById,
    addRepair,
    assignPriceToRepair,
    endOfRepair,
    getTheMostFrequentlyRepairedCar,
    getFavouriteClient,
    getTheMostFrequentlyUsedCategory,
    getTheBestMechanic,
  };
};
