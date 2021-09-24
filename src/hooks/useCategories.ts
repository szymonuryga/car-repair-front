import { Category } from 'helpers/interfaces/Category';
import { useCallback } from 'react';
import { getCategories, getCategoriesName, saveCategory, deleteCategory, getCategory } from 'service/categoryService';

export const useCategories = () => {
  const getAllCategories = useCallback(async () => {
    try {
      const result = await getCategories();
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getAllCategoriesName = useCallback(async () => {
    try {
      const result = await getCategoriesName();
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getCategoryById = useCallback(async (categoryId: number) => {
    try {
      const result = await getCategory(categoryId);
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const addCategory = async (category: Category) => {
    try {
      await saveCategory(category);
    } catch (e) {
      console.log(e);
    }
  };

  const removeCategory = async (categoryId: number) => {
    try {
      await deleteCategory(categoryId);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getAllCategories,
    getAllCategoriesName,
    getCategoryById,
    addCategory,
    removeCategory,
  };
};
