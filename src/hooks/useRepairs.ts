import { Repair } from 'helpers/interfaces/Repair';
import { useCallback } from 'react';
import { getRepair, getRepairs, saveRepair, assignPrice, endRepair } from 'service/repairService';

export const useRepairs = () => {
  const getAllRepairs = useCallback(async () => {
    try {
      const result = await getRepairs();
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getRepairById = useCallback(async (repairId: number) => {
    try {
      const result = await getRepair(repairId);
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
  };
};
