import { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';
import Product from './Product';
import ProductList from './ProductList';

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
            <ProductList products={products} />
        </>
    )
}
