import { useEffect, useState } from "react";
import axiosClient from '../../axios-client';
import ProductList from "./ProductList";
import SectionLoadingAnimation from "./SectionLoadingAnimation";

export default function Categories() {
    
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        setLoading(true);
        axiosClient.get("/categories")
          .then(({data})=>{
            setCategories(data.data);
            setLoading(false);
          })
    },[]);

    return (
        <>{loading ? (
            <SectionLoadingAnimation />
        ):(
            <>
            {categories.map( (category,index) => 
                <section className="my-5" key={index}>
                    <div className="container text-center mt-5 py-5 ">
                        <h3>{category.title}</h3>
                        <hr className="mx-auto"/>
                        <p>{category.description}</p>
                    </div>
                    <div className="row mx-auto container-fluid">
                        <ProductList products={category.products} />
                    </div>
                </section>
            )}
            </>
        )}
            
        </>
    )
}
