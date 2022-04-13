import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { readCate } from '../../api/category';
import { CategoryType } from '../../types/category';


type CategoryEditProps = {
  onUpdateCate: (category: CategoryType) => void
}
type FormInputs = {
  name: string,
}
const CategoryEdit = (props: CategoryEditProps) => {
  const { register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>();
  const navigate = useNavigate();
  const { id } = useParams();



  useEffect(() => {
      const getCategorys = async () => {
          const { data } = await readCate(id);
          reset(data);
      }
      getCategorys();
  }, [])

  const onSubmitCate: SubmitHandler<FormInputs> = data => {
      // console.log(data)
      props.onUpdateCate(data);
      navigate("/admin/categorys")
      // bắn data ra ngoài app.js
      // redirect sang trang product
  } 
return (
    <form action="" onSubmit={handleSubmit(onSubmitCate)}>
      <input type="text"  {...register("name", {required: true})}/>
      <button> Update</button>
    </form>
)
}

export default CategoryEdit