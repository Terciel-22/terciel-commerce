import { useEffect, useState } from "react";
import axiosClient from '../../axios-client';
import ProductList from "./ProductList";

export default function Categories() {
    
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        axiosClient.get("/categories")
          .then(({data})=>{
            setCategories(data.data);
          })
    },[]);

    return (
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
    )
}
