import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type CategoryProps = {
    onAddCategory: (category: typeInputs) => void
}

type typeInputs = {
    id?: number,
    name: string
}

const CategoryAdd = (props: CategoryProps) => {
    const { register, handleSubmit , formState: {errors} } = useForm<typeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<typeInputs> = data => {
        props.onAddCategory(data);
        navigate("/admin/categorys");
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Tên Danh Mục' {...register('name')} />
        <button> Add </button>
    </form>
  )
}

export default CategoryAdd