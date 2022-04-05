import React from 'react'
import { ProductTye } from '../types/product';

type Props = {
  products: ProductTye[];
}



const Home = (props: Props) => {  
  return (
    
<div>
<div className="hom-slider">
    <div className="container">
      <div id="sequence">
        <div className="sequence-prev"><i className="fa fa-angle-left" /></div>
        <div className="sequence-next"><i className="fa fa-angle-right" /></div>
        <ul className="sequence-canvas">
          <li className="animate-in">
            <div className="flat-caption caption1 formLeft delay300 text-center"><span className="suphead">Paris show 2014</span></div>
            <div className="flat-caption caption2 formLeft delay400 text-center">
              <h1>Collection For Winter</h1>
            </div>
            <div className="flat-caption caption3 formLeft delay500 text-center">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className="flat-button caption4 formLeft delay600 text-center"><a className="more" href="#">More Details</a></div>
            <div className="flat-image formBottom delay200" data-duration={5} data-bottom="true"><img src="images/slider-image-01.png"  /></div>
          </li>
          <li>
            <div className="flat-caption caption2 formLeft delay400">
              <h1>Collection For Winter</h1>
            </div>
            <div className="flat-caption caption3 formLeft delay500">
              <h2>Etiam velit purus, luctus vitae velit sedauctor<br />egestas diam, Etiam velit purus.</h2>
            </div>
            <div className="flat-button caption5 formLeft delay600"><a className="more" href="#">More Details</a></div>
            <div className="flat-image formBottom delay200" data-bottom="true"><img src="https://toplist.vn/images/800px/yam-mini-store-660034.jpg"  /></div>
          </li>
          <li>
            <div className="flat-caption caption2 formLeft delay400 text-center">
              <h1>New Fashion of 2013</h1>
            </div>
            <div className="flat-caption caption3 formLeft delay500 text-center">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className="flat-button caption4 formLeft delay600 text-center"><a className="more" href="#">More Details</a></div>
            <div className="flat-image formBottom delay200" data-bottom="true"><img src="https://toplist.vn/images/800px/adore-dress-659971.jpg"  /></div>
          </li>
        </ul>
      </div>
    </div>
    <div className="promotion-banner">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-4">
            <div className="promo-box"><img src="images/promotion-01.png"  /></div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4">
            <div className="promo-box"><img src="images/promotion-02.png"  /></div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4">
            <div className="promo-box"><img src="images/promotion-03.png"  /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="clearfix" />
  <div className="container_fullwidth">
    <div className="container">
      <div className="hot-products">
        <h3 className="title"><strong>Hot</strong> Products</h3>
        <div className="control"><a id="prev_hot" className="prev" href="#">&lt;</a><a id="next_hot" className="next" href="#">&gt;</a></div>
        <ul id="hot">

            <div className="row">

              {/* Hiển Thị Danh Sách Sản Phẩm */}


              {props.products?.map(product => {
              return <div className="col-md-3 col-sm-6">
              <div className="products">
                <div className="offer">- %20</div>
                <div className="thumbnail">
                  <a href="Details"><img src="https://oldsailor.com.vn/vnt_upload/product/02_2021/z2305655225005_5519e1d7eb0a946a5b1fa8327bf006b3_1.jpg"  /></a>
                </div>
                <div className="productname"> {product.name}</div>
                <h5 className="productname"> {product.name}</h5>
                <h4 className="price"> ${product.price}</h4>
                <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
              </div>
            </div>
               
            })}

{/* Hiển Thị Danh Sách Sản Phẩm */}

            </div>

          {/* <li>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="products">
                  <div className="offer">- %20</div>
                  <div className="thumbnail">
                    <a href="Details"><img src="https://oldsailor.com.vn/vnt_upload/product/03_2022/40f87bd91f5cd002894d7.jpg" alt="Product Name" /></a>
                  </div>
                  <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                  <h4 className="price">$451.00</h4>
                  <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="products">
                  <div className="thumbnail">
                    <a href="Details"><img src="https://oldsailor.com.vn/vnt_upload/product/03_2022/342f180c7c89b3d7ea988.jpg" alt="Product Name" /></a>
                  </div>
                  <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                  <h4 className="price">$451.00</h4>
                  <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="products">
                  <div className="offer">New</div>
                  <div className="thumbnail">
                    <a href="Details"><img src="https://oldsailor.com.vn/vnt_upload/product/03_2022/51d4bff3db7614284d676.jpg" alt="Product Name" /></a>
                  </div>
                  <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                  <h4 className="price">$451.00</h4>
                  <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="products">
                  <div className="thumbnail">
                    <a href="Details"><img src="https://oldsailor.com.vn/vnt_upload/product/03_2022/ae71cd03694ea710fe5f4.jpg" alt="Product Name" /></a>
                  </div>
                  <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                  <h4 className="price">$451.00</h4>
                  <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                </div>
              </div>
            </div>
          </li> */}
        </ul>
      </div>
      <div className="clearfix" />
      <div className="featured-products">
        <h3 className="title"><strong>Featured </strong> Products</h3>
        <div className="control"><a id="prev_featured" className="prev" href="#">&lt;</a><a id="next_featured" className="next" href="#">&gt;</a></div>
        <ul id="featured">
          <li>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="products">
                  <div className="thumbnail">
                    <a href="Details"><img src="https://oldsailor.com.vn/vnt_upload/product/03_2022/ca661b142042ee1cb75313.jpg" alt="Product Name" /></a>
                  </div>
                  <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                  <h4 className="price">$451.00</h4>
                  <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="products">
                  <div className="thumbnail">
                    <a href="Details"><img src="https://oldsailor.com.vn/vnt_upload/product/03_2022/e028cd24cc8f03d15a9e1.jpg" alt="Product Name" /></a>
                  </div>
                  <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                  <h4 className="price">$451.00</h4>
                  <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="products">
                  <div className="offer">New</div>
                  <div className="thumbnail">
                    <a href="Details"><img src="https://oldsailor.com.vn/vnt_upload/product/03_2022/607e947c95d75a8903c64.jpg" alt="Product Name" /></a>
                  </div>
                  <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                  <h4 className="price">$451.00</h4>
                  <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="products">
                  <div className="thumbnail">
                    <a href="Details"><img src="https://oldsailor.com.vn/vnt_upload/product/03_2022/095fe134da62143c4d739.jpg" alt="Product Name" /></a>
                  </div>
                  <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                  <h4 className="price">$451.00</h4>
                  <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="products">
                  <div className="thumbnail">
                    <a href="Details"><img src="images/products/small/products-01.png" alt="Product Name" /></a>
                  </div>
                  <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                  <h4 className="price">$451.00</h4>
                  <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="products">
                  <div className="thumbnail">
                    <a href="Details"><img src="images/products/small/products-02.png" alt="Product Name" /></a>
                  </div>
                  <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                  <h4 className="price">$451.00</h4>
                  <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="products">
                  <div className="thumbnail">
                    <a href="Details"><img src="images/products/small/products-03.png" alt="Product Name" /></a>
                  </div>
                  <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                  <h4 className="price">$451.00</h4>
                  <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="products">
                  <div className="thumbnail">
                    <a href="Details"><img src="images/products/small/products-04.png" alt="Product Name" /></a>
                  </div>
                  <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                  <h4 className="price">$451.00</h4>
                  <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="clearfix" />
      <div className="our-brand">
        <h3 className="title"><strong>Our </strong> Brands</h3>
        <div className="control"><a id="prev_brand" className="prev" href="#">&lt;</a><a id="next_brand" className="next" href="#">&gt;</a></div>
        <ul id="braldLogo">
          <li>
            <ul className="brand_item">
              <li>
                <a href="#">
                  <div className="brand-logo"><img src="images/envato.png" /></div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="brand-logo"><img src="images/themeforest.png"  /></div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="brand-logo"><img src="images/photodune.png"  /></div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="brand-logo"><img src="images/activeden.png"  /></div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="brand-logo"><img src="images/envato.png"  /></div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul className="brand_item">
              <li>
                <a href="#">
                  <div className="brand-logo"><img src="images/envato.png"  /></div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="brand-logo"><img src="images/themeforest.png"  /></div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="brand-logo"><img src="images/photodune.png"  /></div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="brand-logo"><img src="images/activeden.png"  /></div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="brand-logo"><img src="images/envato.png"  /></div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div> 
</div>

  )
}

export default Home