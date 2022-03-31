import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../api/auth';

type TypeInputs = {
    email: string,
    password: string
}

const Signin = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<TypeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = async data => {
        const {data : user} = await signin(data);
        console.log(user);
        // localstorage
    }
  return (

<div className="container_fullwidth">
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <div className="special-deal leftbar" style={{marginTop: 0}}>
          <h4 className="title">
            Special 
            <strong>
              Deals
            </strong>
          </h4>
          <div className="special-item">
            <div className="product-image">
              <a href="Details">
                <img src="images/products/thum/products-01.png" />
              </a>
            </div>
            <div className="product-info">
              <p>
                <a href="Details">
                  Licoln Corner Unit
                </a>
              </p>
              <h5 className="price">
                $300.00
              </h5>
            </div>
          </div>
          <div className="special-item">
            <div className="product-image">
              <a href="Details">
                <img src="images/products/thum/products-02.png" />
              </a>
            </div>
            <div className="product-info">
              <p>
                <a href="Details">
                  Licoln Corner Unit
                </a>
              </p>
              <h5 className="price">
                $300.00
              </h5>
            </div>
          </div>
          <div className="special-item">
            <div className="product-image">
              <a href="Details">
                <img src="images/products/thum/products-03.png" />
              </a>
            </div>
            <div className="product-info">
              <p>
                <a href="Details">
                  Licoln Corner Unit
                </a>
              </p>
              <h5 className="price">
                $300.00
              </h5>
            </div>
          </div>
        </div>
        <div className="product-tag leftbar">
          <h3 className="title">
            Products 
            <strong>
              Tags
            </strong>
          </h3>
          <ul>
            <li>
              <a href="#">
                Lincoln us
              </a>
            </li>
            <li>
              <a href="#">
                SDress for Girl
              </a>
            </li>
            <li>
              <a href="#">
                Corner
              </a>
            </li>
            <li>
              <a href="#">
                Window
              </a>
            </li>
            <li>
              <a href="#">
                PG
              </a>
            </li>
            <li>
              <a href="#">
                Oscar
              </a>
            </li>
            <li>
              <a href="#">
                Bath room
              </a>
            </li>
            <li>
              <a href="#">
                PSD
              </a>
            </li>
          </ul>
        </div>

        <div className="fbl-box leftbar">
          <h3 className="title">
            Facebook
          </h3>
          <span className="likebutton">
            <a href="#">
              <img src="images/fblike.png"  />
            </a>
          </span>
          <p>
            12k people like Flat Shop.
          </p>
          <ul>
            <li>
              <a href="#">
              </a>
            </li>
            <li>
              <a href="#">
              </a>
            </li>
            <li>
              <a href="#">
              </a>
            </li>
            <li>
              <a href="#">
              </a>
            </li>
            <li>
              <a href="#">
              </a>
            </li>
            <li>
              <a href="#">
              </a>
            </li>
            <li>
              <a href="#">
              </a>
            </li>
            <li>
              <a href="#">
              </a>
            </li>
          </ul>
          <div className="fbplug">
            <a href="#">
              <span>
                <img src="images/fbicon.png"  />
              </span>
              Facebook social plugin
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-9">
        <div className="checkout-page">
          <ol className="checkout-steps">
            <li className="steps active">
              <a href="checkout.html" className="step-title">
                01. checkout opition
              </a>
              <div className="step-description">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="new-customer">
                      <h5>
                        New Customer
                      </h5>
                      <label>
                        <span className="input-radio">
                          <input type="radio" name="user" />
                        </span>
                        <span className="text">
                          I wish to subscribe to the Herbal Store newsletter.
                        </span>
                      </label>
                      <label>
                        <span className="input-radio">
                          <input type="radio" name="user" />
                        </span>
                        <span className="text">
                          My delivery and billing addresses are the same.
                        </span>
                      </label>
                      <p className="requir">
                        By creating an account you will be able to shop faste be up to date on an order's status, and keep track of the orders you have previously made.
                      </p>
                      <button>
                        Continue
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="run-customer">
                      <h5>
                        Rerunning Customer
                      </h5>
                      <form>
                        <div className="form-row">
                          <label className="lebel-abs">
                            Email 
                            <strong className="red">
                              *
                            </strong>
                          </label>
                          <input type="text" className="input namefild"  />
                        </div>
                        <div className="form-row">
                          <label className="lebel-abs">
                            Password 
                            <strong className="red">
                              *
                            </strong>
                          </label>
                          <input type="text" className="input namefild"  />
                        </div>
                        <p className="forgoten">
                          <a href="#">
                            Forgoten your password?
                          </a>
                        </p>
                        <button>
                          Login
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="steps">
              <a href="Signup" className="step-title">
                02. billing information
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>

  </div>
</div>





    // <form onSubmit={handleSubmit(onSubmit)}>
    //     <input type="email" placeholder='Email' {...register('email')} />
    //     <input type="password" placeholder='Mật khẩu' {...register('password')} />
    //     <button>Đăng nhập</button>
    // </form>
  )
}

export default Signin