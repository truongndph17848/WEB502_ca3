import { ProductTye } from '../../types/product'
import { NavLink } from 'react-router-dom';

type ProductManagerProps = {
  products: ProductTye[];
  onRemove: (id: number) => void
}



const ProductManager = (props: ProductManagerProps) => {

  return (
    
     <table border="1">
       <thead>
        <tr>
        <th>STT</th>
         <th>Name</th>
         <th>Price</th>
         <th>Category</th>
         <th colSpan={2}>Action
         <button> <NavLink to="add"> Add Product</NavLink> </button>
         </th>
        </tr>
       </thead>

       <tbody >
       {props.products?.map((product, index) => {
              return <tr>
                <td key={index}> {index + 1} </td>
                <td> { product.name}</td>
                <td> { product.price}</td>
                <td></td>
                <td>
                  <button onClick={()=>{props.onRemove(product.id!)}}> Remove</button>
                </td>
                <td>
                  <button > <NavLink to={`/admin/products/${product.id}/edit`}>Edit</NavLink> </button>
                  </td>
              </tr>
            })}
       </tbody>
     </table>
  )
}

export default ProductManager