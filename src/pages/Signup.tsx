import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';
import { User } from '../types/User';


type props = {
  onSignup: (User: User) => void
};

type TypeInputs = {
    name: string,
    email: string,
    password: string
}

const Signup = (props: props) => {
    const { register, handleSubmit, formState: { errors }} = useForm<TypeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = data => {
        props.onSignup(data);
        // navigate("/signin");
    }
  return (

// <div className="container_fullwidth">
//   <div className="container">
//     <div className="row">
//       <div className="col-md-3">
//         <div className="product-tag leftbar">
//           <h3 className="title">
//             Products
//             <strong>
//               Tags
//             </strong>
//           </h3>
//           <ul>
//             <li>
//               <a href="#">
//                 Lincoln us
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 SDress for Girl
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 Corner
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 Window
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 PG
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 Oscar
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 Bath room
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 PSD
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div className="fbl-box leftbar">
//           <h3 className="title">
//             Facebook
//           </h3>
//           <span className="likebutton">
//             <a href="#">
//               <img src="images/fblike.png"  />
//             </a>
//           </span>
//           <p>
//             12k people like Flat Shop.
//           </p>
//           <ul>
//             <li>
//               <a href="#">
//               </a>
//             </li>
//             <li>
//               <a href="#">
//               </a>
//             </li>
//             <li>
//               <a href="#">
//               </a>
//             </li>
//             <li>
//               <a href="#">
//               </a>
//             </li>
//             <li>
//               <a href="#">
//               </a>
//             </li>
//             <li>
//               <a href="#">
//               </a>
//             </li>
//             <li>
//               <a href="#">
//               </a>
//             </li>
//             <li>
//               <a href="#">
//               </a>
//             </li>
//           </ul>
//           <div className="fbplug">
//             <a href="#">
//               <span>
//                 <img src="images/fbicon.png"  />
//               </span>
//               Facebook social plugin
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-9">
//         <div className="checkout-page">
//           <ol className="checkout-steps">
//             <li className="steps">
//               <div className="step-title">
//                 <a href="Signin">01. Login</a>
//               </div>
//             </li>
//             <li className="steps active">
//               <a href="Signup" className="step-title">
//                 02. Register
//               </a>
//               <div className="step-description">
//                 <form>
//                   <div className="row">
//                     <div className="col-md-6 col-sm-6">
//                       <div className="your-details">
//                         <h5>
//                           Your Persional Details
//                         </h5>
//                         <div className="form-row">
//                           <label className="lebel-abs">
//                             Full name
//                             <strong className="red">
//                               *
//                             </strong>
//                           </label>
//                           <input type="text" className="input namefild"  />
//                         </div>

//                         <div className="form-row">
//                           <label className="lebel-abs">
//                             Email 
//                             <strong className="red">
//                               *
//                             </strong>
//                           </label>
//                           <input type="text" className="input namefild"  />
//                         </div>

//                         <div className="pass-wrap">
//                           <div className="form-row">
//                             <label className="lebel-abs">
//                               Your Password 
//                               <strong className="red">
//                                 *
//                               </strong>
//                             </label>
//                             <input type="password" className="input namefild"  />
//                           </div>
//                           <div className="form-row">
//                             <label className="lebel-abs">
//                               Confird Your Password 
//                               <strong className="red">
//                                 *
//                               </strong>
//                             </label>
//                             <input type="password" className="input cpass"  />
//                           </div>
//                         </div>
                        
//                         {/* <p>
//                           <span className="input-radio">
//                             <input type="radio" name="user" />
//                           </span>
//                           <span className="text">
//                             I wish to subscribe to the Herbal Store newsletter.
//                           </span>
//                         </p> */}

//                       </div>
//                     </div>
//                     <div className="col-md-6 col-sm-6">
//                       <div className="your-details">
//                         <h5>
//                           Your Address
//                         </h5>
//                         <div className="form-row">
//                           <label className="lebel-abs">
//                             Address
//                             <strong className="red">
//                               *
//                             </strong>
//                           </label>
//                           <input type="text" className="input namefild"  />
//                         </div>

//                         <div className="form-row">
//                           <label className="lebel-abs">
//                             City 
//                             <strong className="red">
//                               *
//                             </strong>
//                           </label>
//                           <input type="text" className="input namefild"  />
//                         </div>
//                         <div className="form-row">
//                           <label className="lebel-abs">
//                             Post Code 
//                             <strong className="red">
//                               *
//                             </strong>
//                           </label>
//                           <input type="text" className="input namefild"  />
//                         </div>
//                         <div className="form-row">
//                           <label className="lebel-abs">
//                             Country 
//                             <strong className="red">
//                               *
//                             </strong>
//                           </label>
//                           <input type="text" className="input namefild"  />
//                         </div>

//                         <p className="privacy">
//                           <span className="input-radio">
//                             <input type="radio" name="user" />
//                           </span>
//                           <span className="text">
//                             I have read and agree to the 
//                             <a href="#" className="red">
//                               Privacy Policy
//                             </a>
//                           </span>
//                         </p>
//                         <button>
//                           Register
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </li>

//           </ol>
//         </div>
//       </div>
//     </div>

//   </div>
// </div>

    
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Tên' {...register('name')} />
        <input type="email" placeholder='Email' {...register('email')} />
        <input type="password" placeholder='Mật khẩu' {...register('password')} />
        <button>Đăng ký</button>
    </form>
  )
}

export default Signup