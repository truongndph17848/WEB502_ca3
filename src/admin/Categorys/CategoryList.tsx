import React from 'react'
import { NavLink } from 'react-router-dom';
import { CategoryType } from '../../types/category';

type Props = {
  categorys: CategoryType[];
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
             <td> { category.category}</td>
             <td>
                  <button> Remove</button>
                </td>
                <td>
                  <button > EDIT </button>
                  </td>
           </tr>
         })}
    </tbody>
  </table>
  )
}

export default CategoryList