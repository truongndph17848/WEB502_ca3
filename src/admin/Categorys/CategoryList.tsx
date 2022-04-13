import React from 'react'
import { NavLink } from 'react-router-dom';
import { CategoryType } from '../../types/category';

type Props = {
  categorys: CategoryType[];
  onRemoveCate: (id: number) => void
}

const CategoryList = (props: Props) => {
  return (
    <table border="1">
    <thead>
     <tr>
     <th>STT</th>
      <th> Danh Muc </th>
      <th colSpan={2}>Action
      <button> <NavLink to="add"> Add Category</NavLink> </button>
      </th>
     </tr>
    </thead>

    <tbody >
    {props.categorys?.map((category, index) => {
           return <tr>
             <td key={index}> {index + 1} </td>
             <td> { category.name}</td>
             <td>
                  <button onClick={()=>{props.onRemoveCate(category._id!)}}> Remove</button>
                </td>
                <td>
                  <button > <NavLink to={`/admin/categorys/${category._id}/edit`}>Edit</NavLink> </button>
                  </td>
           </tr>
         })}
    </tbody>
  </table>
  )
}

export default CategoryList