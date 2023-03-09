import { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';
import Rating from './Rating';

export default function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axiosClient.get("/show-products")
          .then(({data})=>{
            setProducts(data.data);
          })
    },[]);
    
    return (
        <>
            {products.map( (product,index) => 
                <div className="product text-center col-lg-3 col-md-4 col-12" key={index}>
                    <img src={product.image} alt={product.title} className="img-fluid mb-3" />
                    <Rating rating={product.rating} />
                    <h5 className="p-name">{product.title}</h5>
                    <h4 className="p-price">${product.price}</h4>
                    <button className="buy-btn">BUY NOW</button>
                </div>
            )}
        </>
    )
}
