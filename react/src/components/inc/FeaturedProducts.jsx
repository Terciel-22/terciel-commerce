import { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';
import ProductList from './ProductList';
import SectionLoadingAnimation from './SectionLoadingAnimation';

export default function FeaturedProducts() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setLoading(true);
        axiosClient.get("/featured-products")
          .then(({data})=>{
            setProducts(data.data);
            setLoading(false);
          })
    },[]);
    
    return (
        <>{loading ? (
            <SectionLoadingAnimation />
        ):(
            <ProductList products={products} />
        )}
        </>
    )
}
