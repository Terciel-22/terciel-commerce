import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';
import ProductList from '../../components/inc/ProductList'
import Pagination from "react-js-pagination";
import PageLoadingAnimation from '../../components/inc/PageLoadingAnimation';

export default function Shop() {

    const [loading, setLoading] = useState(false);

    const [pagination, setPagination] = useState({
        activePage:1,
        itemsCountPerPage:0,
        totalItemsCount:0,
    });
    const handlePageChange = (pageNumber) => {
        setPagination({
            ...pagination,
            activePage:pageNumber
        })
    }
    const PAGE_RANGE_DISPLAYED = 5;

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setLoading(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        axiosClient.get("/products?page="+pagination.activePage)
          .then((result)=>{
            setProducts(result.data.data);
            setPagination({
                ...pagination,
                itemsCountPerPage:result.data.meta.per_page,
                totalItemsCount:result.data.meta.total,
            });
            setLoading(false);
          })
    },[pagination.activePage]);

    return (<>
            {loading ? (
                <PageLoadingAnimation />
            ):(
                <section id="shop" className="my-5 py-5">
                    <div className="container mt-5 py-5">
                        <h2 className="font-weight-bold">Our Shop</h2>
                        <hr />
                        <p>Here you can check out our new products with fair price on terciel.</p>
                    </div>
                    <div className="row mx-auto container">
                        <ProductList products={products} />

                        {/* PAGINATION */}
                        <nav aria-label="..." className="d-flex justify-content-center">
                            <Pagination
                                activePage={pagination.activePage}
                                itemsCountPerPage={pagination.itemsCountPerPage}
                                totalItemsCount={pagination.totalItemsCount}
                                pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
                                onChange={handlePageChange}
                                innerClass="pagination mt-5"
                                itemClass="page-item"
                                linkClass="page-link shadow-none"
                            />
                        </nav>
                    </div>
                </section>
            )}
        </>)
}
