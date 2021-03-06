import { Category } from 'helpers/interfaces/Category';
import http from './httpService';

const apiEndpoint = 'http://localhost:8080/category';

export function findCategories() {
  return http.get(apiEndpoint);
}

export function findCategoriesName() {
  return http.get(apiEndpoint + '/names');
}

export function findCategory(categoryId: number) {
  return http.get(apiEndpoint + '/' + categoryId);
}

export function deleteCategory(categoryId: number) {
  return http.delete(apiEndpoint + '/' + categoryId);
}

export function saveCategory(category: Category) {
  return http.post(apiEndpoint, category);
}
