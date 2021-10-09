import { useCallback } from 'react';
import { deleteMechanic, findMechanic, findMechanicsByEmails, findMechanics, saveMechanic } from 'service/mechanicService';
import { Mechanic } from 'helpers/interfaces/Mechanic';

export const useMechanics = () => {
  const getAllMechanics = useCallback(async () => {
    try {
      const result = await findMechanics();
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getAllMechanicsByEmails = useCallback(async () => {
    try {
      const result = await findMechanicsByEmails();
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getMechanicsById = useCallback(async (mechanicId: number) => {
    try {
      const result = await findMechanic(mechanicId);
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const addMechanic = async (mechanic: Mechanic) => {
    try {
      await saveMechanic(mechanic);
    } catch (e) {
      console.log(e);
    }
  };

  const removeMechanic = async (mechanicId: number) => {
    try {
      await deleteMechanic(mechanicId);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getAllMechanics,
    getAllMechanicsByEmails,
    getMechanicsById,
    addMechanic,
    removeMechanic,
  };
};
