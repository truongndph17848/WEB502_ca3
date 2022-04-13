import { ProductTye } from "../types/product";
import instance from "./instance";
import { isAuthenticate } from "../utils/localStorage";
const { token, user } = isAuthenticate();

// const user = isAuthenticate();
// console.log(user);



export const list = () => {
    const url = '/products';
    return instance.get(url);
}
export const remove = (_id: number) => {
    const url = `/product/${_id}`;
    return instance.delete(url);
}
export const add = (product: ProductTye) => {
    const url = `/products/${user._id}`;
    return instance.post(url, product, {
        headers: {
            //  "Authorization": `Bearer ${user?.token}`
            "Authorization": `Bearer ${token}`
        }
    });
}



export const update = (product: ProductTye) => {
    const url = `/product/${product._id}`;
    return instance.put(url, product);
}
export const read = (id: number) => {
    const url = `/product/${id}`;
    return instance.get(url);
}


export const SearchProductByName = (keyword: string) => {
    const url = `/search?q=${keyword}`;
    return instance.post(url);
};