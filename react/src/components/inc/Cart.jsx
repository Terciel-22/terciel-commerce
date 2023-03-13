import { useEffect, useState } from "react";
import PageLoadingAnimation from "./PageLoadingAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axiosClient from "../../axios-client";

export default function Cart() {

    const [loading, setLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: "smooth" });
        setLoading(true);
        getCartItems();
    },[])
    
    const deleteCartItem = (id) => {
        axiosClient.delete(`/cart-items/${id}`)
            .then(()=>{
                getCartItems();
            })
    }

    const getCartItems = () => {
        axiosClient.get(`/cart-items-with-token/${localStorage.getItem("CART_TOKEN")}`)
            .then(({data})=>{
                setCartItems(data.data);
                setLoading(false);
            })
    }

    return (
        <>{loading ? (<>
            <PageLoadingAnimation />
        </>):(<>
            <section id="cart-home" className="pt-5 mt-5 container">
                <h2 className="font-weight-bold pt-5">Shopping Cart</h2>
                <hr />
            </section>
            
            
            <section id="cart-container" className="container my-5">
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                    {cartItems.map((cartItem,index)=>
                        <tr key={index}>
                            <td><button onClick={()=>{deleteCartItem(cartItem.id)}}><FontAwesomeIcon icon={faTrashCan} className="icon"/></button></td>
                            <td><img src={cartItem.product.image} alt={cartItem.product.title} /></td>
                            <td>{cartItem.product.title}</td>
                            <td>${cartItem.product.price}</td>
                            <td><input type="number" onChange={()=>{}} value={cartItem.quantity} min={0} className="w-25 pl-1" /></td>
                            <td>$ quantity * price</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </section>

            <section id="cart-bottom" className="container">
                <div className="row">
                    <div className="coupon col-lg-6 col-md-6 col-12 mb-4">
                        <div>
                            <h5>COUPON</h5>
                            <p>Enter your coupon code if you have one.</p>
                            <input type="text" placeholder="Coupon Code" className="me-1" />
                            <button>APPLY COUPON</button>
                        </div>
                    </div>
                    <div className="total col-lg-6 col-md-6 col-12">
                        <div>
                            <h5>CART TOTAL</h5>
                            <div className="d-flex justify-content-between">
                                <h6>Total Price</h6>
                                <p>$ totalPrice</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6>Shipping Fee</h6>
                                <p>$ shippingFee</p>
                            </div>
                            <hr className="second-hr"/>
                            <div className="d-flex justify-content-between">
                                <h6>Total</h6>
                                <p>$ total</p>
                            </div>
                            
                            <button className="ms-auto">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </section>
        </>)}</>
    )
}
