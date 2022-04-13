import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from './logo.svg'



import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
import { add, list, read, remove, SearchProductByName, update } from './api/product';
import { addCate, listCate, removeCate, updateCate } from './api/category';
import { signin, signup } from './api/auth';
import axios from 'axios';
import type { ProductTye } from './types/product';
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Dashboard from './admin/Dashboard';
import ProductManager from './admin/Products/ProductManager';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductAdd from './admin/Products/ProductAdd';
import ProductEdit from './admin/Products/ProductEdit';
import PrivateRouter from './components/PrivateRouter';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
// import Details from './pages/Details';
import Contact from './pages/Contact';
import Cart from './pages/CartPage';
import Productgird from './pages/Productgird';
import Productlist from './pages/Productlist';
import CategoryList from './admin/Categorys/CategoryList';
import CategoryAdd from './admin/Categorys/CategoryAdd';
import { CategoryType } from './types/category';
import { User } from './types/User';
import Search from './pages/Search';
import { addToCart, decreaseItemInCart, increaseItemInCart, removeItemInCart } from './utils/cart';
import CategoryEdit from './admin/Categorys/CategoryEdit';

import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import CartPage from './pages/CartPage';

function App() {
  const [products, setProducts] = useState<ProductTye[]>([]);
  const [categorys, setCategorys] = useState<CategoryType[]>([]);
  const [users, setusers] = useState<User[]>([]);

  const [cart, setCart] = useState<ProductTye[]>([]);

  const [searchProduct, setsearchProduct] = useState<ProductTye[]>([]);

  useEffect(() => {
    const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
    };
    getProducts();
  }, [])
  const removeItem = (id: number) => {
      // call api
      remove(id);
      // reRender
      setProducts(products.filter(item => item._id !== id));
  }

  const onHandleAdd = async (product: ProductTye) => {
    // console.log('product', product);
    // axios.post('http://localhost:3001/products', product);
    const { data } = await add(product);
    setProducts([...products, data]);
  }

  const onHandleUpdate = async (product: ProductTye) => {
    const { data } = await update(product);
    setProducts(products.map(item => item.id == data.id ? data : item));
  }




  useEffect(() => {
    const getCategorys = async () => {
        const { data } = await listCate();
        setCategorys(data);
    };
    getCategorys();
  }, [])
  const onHandleAddCategory = async (category: CategoryType) => {
    // console.log('category', category);
    const { data } = await addCate(category);
    setCategorys([...categorys, data]);
  }


  const onSignup = async (user: User) => {
    // console.log('User', user);
    const { data } = await signup(user);
    setusers([...users, data]);
  }

const onRemoveCate = (id: number) => {
        // call api
        removeCate(id);
        // reRender
        setProducts(products.filter(item => item._id !== id)); 
}




const onHandleAddToCart = async (id: number) => {
  const { data } = await read(id)
  addToCart({ ...data, quantity: 1 }, function () {
    toastr.success(`Thêm ${data.name} vào giỏ hàng thành công!`)
    setCart(JSON.parse(localStorage.getItem('cart') as string))
  })
}
const onHandleIncreaseItemInCart = (id: number) => {
  increaseItemInCart(id, () => {
    setCart(JSON.parse(localStorage.getItem('cart') as string))
  })
}
const onHandleDecreaseItemInCart = (id: number) => {
  decreaseItemInCart(id, () => {
    setCart(JSON.parse(localStorage.getItem('cart') as string))
  })
}

const onHandleRemoveCart = (id: number) => {
  removeItemInCart(id, () => {
    setCart(JSON.parse(localStorage.getItem('cart') as string))
  })
}


const onhandleSearch = async (keyword: string) => {
  const { data } = await SearchProductByName(keyword)
  setsearchProduct(data)

}



  return (
    <div className="App">

{/* <header>
          <ul>
            <li>
              <NavLink to="/">Home Page</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product Page</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
          
</header> */}

        <main>
          
          <Routes>


            <Route path="/" element={<WebsiteLayout onSearch={onhandleSearch} />}>

              <Route index element={<Home products={products} onAddToCart={onHandleAddToCart} />} />
              <Route path="cart" element={<CartPage onRemoveCart={onHandleRemoveCart} onDecreaseItemInCart={onHandleDecreaseItemInCart} onIncreaseItemInCart={onHandleIncreaseItemInCart} />} />
              
              <Route path="Contact"  element={<Contact />} />

              
              <Route path="/search" element={<Search products={searchProduct} />} />
              {/* <Route path="Details/:id" element={<Details products={products}  />} /> */}
              

              <Route path="/signup" element={<Signup onSignup={onSignup}/>}/>
              <Route path="/signin" element={<Signin />}/>

              <Route path="Productlist">
                  <Route index  element={<Productlist />} />
                  <Route path=":id" element={<ProductDetail />} />
              </Route>
              <Route path="Productgird" element={< Productgird />} />
              <Route path="about" element={<h1>About page</h1>} />

            </Route>
            



            <Route path="admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="dashboard"/>} />
                <Route path="dashboard" element={<Dashboard />} />

                <Route path="products">
                    {/* <Route index element={<PrivateRouter><ProductManager products={products} onRemove={removeItem}/></PrivateRouter>} /> */}
                    <Route index element={<ProductManager products={products} onRemove={removeItem}/>} />
                    <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>}/>
                    <Route path="add" element={<ProductAdd name="Truong" onAdd={onHandleAdd}/>} />
                </Route>

                <Route path="categorys">
                    <Route index element= {<CategoryList  categorys={categorys} onRemoveCate={onRemoveCate}/>} />
                    <Route path="add" element={<CategoryAdd onAddCategory={onHandleAddCategory}/> } />
                    <Route path=":id/edit" element={<CategoryEdit /> } />
                </Route>

            </Route>


            
          </Routes>
        </main>
    </div>
  )
}

export default App
