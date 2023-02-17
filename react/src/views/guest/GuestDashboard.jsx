import React from 'react'
import { useNavigate } from 'react-router-dom'

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
    </>
  )
}
