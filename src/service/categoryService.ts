import http from './httpService'

const apiEndpoint = 'http://localhost:8080/category';


export function getCategories(){
    return http.get(apiEndpoint);
}

export function getCategoriesName(){
    return http.get(apiEndpoint+'/names')
}

export function getCategory(categoryId: number){
    return http.get(apiEndpoint+ '/'+categoryId)
}

export function deleteCategory(categoryId: number){
    return http.delete(apiEndpoint+ '/'+categoryId)
}

export function saveCategory(category: Category){
    return http.post(apiEndpoint, category)
}

interface Category {
    id?: number;
    name: string;
    description: string;
}