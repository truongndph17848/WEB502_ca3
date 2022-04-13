import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';

// import { SearchProductByName } from '../api/products';
import { ProductTye } from '../types/product';


type Props = {
    products: ProductTye[],

}

const Search = (props: Props) => {

    return (
        <article className=" mx-auto w-[1200px] ">



            <div className="conten my-[20px]">
                <h1 className="font-bold text-[20px] py-[20px]">Search - </h1>
                <div className="product grid grid-cols-4 gap-5 ">
                    {props.products.map((product, index) => {
                        console.log(product)
                        return (

            <div className="col-md-3 col-sm-6">
              <div className="products">
                {/* <div className="offer">- %20</div> */}
                <div className="thumbnail">
                  <a href="#"><img src="https://oldsailor.com.vn/vnt_upload/product/02_2021/z2305655225005_5519e1d7eb0a946a5b1fa8327bf006b3_1.jpg"  /></a>
                </div>

                <h4 className="price"> ${product.price}</h4>
                <div className="button_group">
                  
                {/* <NavLink to=""><button onClick={() => props.onAddToCart(product._id)}>Add to cart</button></NavLink> */}
                {/* <button>Add to cart</button> */}
                  <button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                      <button></button>
                  <div className="productname"> {product.price}</div>
                <h5 className="productname"> {product.name}</h5>
              </div>
            </div>

                            // <form action="">
                            //     <div className=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  " key={index}>

                            //         <div className="py-[10px] px-[10px] leading-8">
                            //             <NavLink to={`/products/${product._id}`} className="no-underline">
                            //                 <h4 className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">{product.name}</h4>
                            //             </NavLink>
                            //             <p className="text-[15px] text-[red]">{product.price}</p>
                            //             <p>130,000,000 lượt xem</p>
                            //         </div>
                            //         <div className="conten-item ">
                            //             <button>Add to cart</button>
                            //         </div>
                            //     </div>
                            // </form>


                        )
                    })}




                </div>
            </div>




        </article >


    )
}

export default Search