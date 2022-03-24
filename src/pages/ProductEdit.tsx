import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../api/product';

type Props = {}


type TypeInputs = {
    name: String,
    price: number    
}



const ProductEdit = (props: Props) => {

    const {register, handleSubmit, formState: {errors} , reset } = useForm<TypeInputs>();
    const Navigate = useNavigate();
    const { id } = useParams();

    useEffect(()=>{
        const getProduct = async () =>{
            const { data } = await read(id);
        }
        getProduct();
    }, [])




    const onsubmit : SubmitHandler<TypeInputs> = data =>{
        console.log(data);
        // bắn data ra ngoài app.js
        // redirect sang trang product
    }


  return (
    <form onSubmit={handleSubmit(onsubmit)}>
        <input type="text" placeholder='name' {...register('name', {required:true})} />
        <input type="number" placeholder='price' {...register('price')} />
        <button> Update </button>
    </form>
  )
}

export default ProductEdit