import { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';
import Product from './Product';

export default function FeaturedProducts() {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axiosClient.get("/featured-products")
          .then(({data})=>{
            setProducts(data.data);
          })
    },[]);
    
    return (
        <>
            {products.map( ({product},index) => 
                <Product product={product} key={index}/>
            )}
        </>
    )
}
