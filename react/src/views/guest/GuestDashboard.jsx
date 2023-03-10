import React from 'react'
import { useNavigate } from 'react-router-dom'
import FeaturedProducts from '../../components/inc/FeaturedProducts';

export default function GuestDashboard() {

  
  const navigate = useNavigate();
  const shopNowBtn = () => {
    navigate("/login");
  }

  return (
    <>
      <section id="home">
        <div className="container">
          <h5>NEW ARRIVALS</h5>
          <h1><span>Best Price</span>This Year</h1>
          <p>Shoomatic offers very comfortable time <br /> on walking and exercises.</p>
          <button onClick={shopNowBtn}>Shop Now</button>
        </div>
      </section>

      <section id="brand" className="container">
        <div className="row m-0 py-5">
          <img className="img-fluid col-lg-2 col-md-4 col-6" src="https://raw.githubusercontent.com/tech2etc/Build-Ecommerce-Website-With-HTML-CSS-JavaScript/main/img/brand/1.png" alt="Right Check"/>
          <img className="img-fluid col-lg-2 col-md-4 col-6" src="https://raw.githubusercontent.com/tech2etc/Build-Ecommerce-Website-With-HTML-CSS-JavaScript/main/img/brand/2.png" alt="Cinderela"/>
          <img className="img-fluid col-lg-2 col-md-4 col-6" src="https://raw.githubusercontent.com/tech2etc/Build-Ecommerce-Website-With-HTML-CSS-JavaScript/main/img/brand/3.png" alt="SLS Business"/>
          <img className="img-fluid col-lg-2 col-md-4 col-6" src="https://raw.githubusercontent.com/tech2etc/Build-Ecommerce-Website-With-HTML-CSS-JavaScript/main/img/brand/4.png" alt="Comedy"/>
          <img className="img-fluid col-lg-2 col-md-4 col-6" src="https://raw.githubusercontent.com/tech2etc/Build-Ecommerce-Website-With-HTML-CSS-JavaScript/main/img/brand/5.png" alt="Right Check"/>
          <img className="img-fluid col-lg-2 col-md-4 col-6" src="https://raw.githubusercontent.com/tech2etc/Build-Ecommerce-Website-With-HTML-CSS-JavaScript/main/img/brand/6.png" alt="Skill Star"/>
        </div>
      </section>

      <section id="new" className="w-100">
        <div className="row p-0 m-0">
            <div className="one col-lg-4 col-md-12 col-12 p-0">
                <img className="img-fluid" src="https://raw.githubusercontent.com/tech2etc/Build-Ecommerce-Website-With-HTML-CSS-JavaScript/main/img/new/1.jpg" alt="Shoes"/>
                <div className="details">
                    <h2>Extreme Rare Sneakers</h2>
                    <button className="text-upper-case" onClick={shopNowBtn}>Shop Now</button>
                </div>
            </div>
            <div className="one col-lg-4 col-md-12 col-12 p-0">
                <img className="img-fluid" src="https://raw.githubusercontent.com/tech2etc/Build-Ecommerce-Website-With-HTML-CSS-JavaScript/main/img/new/5.jpg" alt="Jewelry"/>
                <div className="details">
                    <h2>Awesome Blank Outfit</h2>
                    <button className="text-upper-case" onClick={shopNowBtn}>Shop Now</button>
                </div>
            </div>
            <div className="one col-lg-4 col-md-12 col-12 p-0">
                <img className="img-fluid" src="https://raw.githubusercontent.com/tech2etc/Build-Ecommerce-Website-With-HTML-CSS-JavaScript/main/img/new/3.jpg" alt="Wrist Watch"/>
                <div className="details">
                    <h2>Sport Wear Up To 50% Off</h2>
                    <button className="text-upper-case" onClick={shopNowBtn}>Shop Now</button>
                </div>
            </div>
        </div>
      </section>

      <section id="featured" className="my-5 pb-5">
        <div className="container text-center mt-5 py-5 ">
          <h3>Our Featured</h3>
          <hr className="mx-auto"/>
          <p>Here you can check out our new products with fair price on terciel.</p>
        </div>
        <div className="row mx-auto container">
          <FeaturedProducts />
        </div>
      </section>

      <section id="banner">
        <div className="container my-5 py-5">
            <h4>NEW YEAR'S SALE</h4>
            <h1>2023 Collection<br/>UP TO 20% OFF</h1>
            <button className="text-uppercase">Shop Now</button>
        </div>
      </section>

      
    </>
  )
}
