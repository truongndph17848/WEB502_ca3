import { CategoryType } from "../types/category";
import instance from "./instance";


export const listCate = () => {
    const url = '/category';
    return instance.get(url);
}
export const removeCate = (id: number) => {
    const url = `/category/${id}`;
    return instance.delete(url);
}
export const addCate = (category:CategoryType) => {
    const url = `/category`;
    return instance.post(url, category);
}
export const updateCate = (category: CategoryType) => {
    const url = `/category/${category.id}`;
    return instance.put(url, category);
}
export const readCate = (id: number) => {
    const url = `/category/${id}`;
    return instance.get(url);
}