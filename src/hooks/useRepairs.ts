import { Repair } from 'helpers/interfaces/Repair';
import { useCallback } from 'react';
import {
  findRepair,
  findRepairs,
  saveRepair,
  assignPrice,
  endRepair,
  findTheMostFrequentlyCar,
  findTheMostFrequentlyClient,
  findTheMostFrequentlyCategory,
  findTheMostFrequentlyMechanic,
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

  const getTheMostFrequentlyCar = useCallback(async () => {
    try {
      const result = await findTheMostFrequentlyCar();
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getTheMostFrequentlyClient = useCallback(async () => {
    try {
      const result = await findTheMostFrequentlyClient();
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getTheMostFrequentlyCategory = useCallback(async () => {
    try {
      const result = await findTheMostFrequentlyCategory();
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getTheMostFrequentlyMechanic = useCallback(async () => {
    try {
      const result = await findTheMostFrequentlyMechanic();
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
    getTheMostFrequentlyCar,
    getTheMostFrequentlyClient,
    getTheMostFrequentlyCategory,
    getTheMostFrequentlyMechanic,
  };
};
