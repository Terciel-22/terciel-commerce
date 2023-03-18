import { useEffect, useState } from "react";
import PageLoadingAnimation from "./PageLoadingAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axiosClient from "../../axios-client";
import { useOutletContext } from "react-router-dom";

export default function Cart() {

    const [loading, setLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsQuantity, getCartItemsQuantity] = useOutletContext();
    const [subTotalPrice, _setSubTotalPrice] = useState(0);
    const EXAMPLE_SHIPPING_FEE = cartItemsQuantity !== 0 ? 200 : 0;

    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: "smooth" });
        setLoading(true);
        getCartItems();
    },[])
    
    const deleteCartItem = (id) => {
        axiosClient.delete(`/cart-items/${id}`)
            .then(()=>{
                getCartItems();
                getCartItemsQuantity();
            })
    }

    const setSubTotalPrice = (cartItems) => {
        let totalPricePerItem = 0, subTotal = 0;

        cartItems.map((cartItem)=>{
            totalPricePerItem = cartItem.quantity * cartItem.product.price;
            subTotal += totalPricePerItem 
        })
        _setSubTotalPrice(subTotal);
        setLoading(false);
    }

    const getCartItems = () => {
        axiosClient.get(`/cart-items-with-token/${localStorage.getItem("CART_TOKEN")}`)
            .then(({data})=>{
                setCartItems(data.data);
                setSubTotalPrice(data.data);
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
                            <td className="text-capitalize"><a className="text-decoration-none" href={`/product/${cartItem.product.id}`}>{cartItem.product.title}</a></td>
                            <td>${cartItem.product.price}</td>
                            <td>{cartItem.quantity}</td>
                            <td>$ {cartItem.quantity * cartItem.product.price}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </section>

            <section id="cart-bottom" className="container mb-5">
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
                                <h6>Subtotal Price</h6>
                                <p>$ {subTotalPrice}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6>Shipping Fee</h6>
                                <p>$ {EXAMPLE_SHIPPING_FEE}</p>
                            </div>
                            <hr className="second-hr"/>
                            <div className="d-flex justify-content-between">
                                <h6>Total</h6>
                                <p>$ {subTotalPrice + EXAMPLE_SHIPPING_FEE}</p>
                            </div>
                            
                            <button className="ms-auto">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </section>
        </>)}</>
    )
}
