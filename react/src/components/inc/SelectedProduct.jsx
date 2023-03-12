import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../../axios-client';
import PageLoadingAnimation from './PageLoadingAnimation';
import ProductList from './ProductList';
import Rating from './Rating';
import SectionLoadingAnimation from './SectionLoadingAnimation';

export default function SelectedProduct() {

    const [loading, setLoading] = useState(false);

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [mainImage, _setMainImage] = useState();
    const [quantity, setQuantity] = useState(0);

    const navigate = useNavigate();

    if(id)
    {
        useEffect(()=>{
            setLoading(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
            axiosClient.get(`/product/${id}`)
            .then(({data})=>{
                setProduct(data);
                setLoading(false);
                _setMainImage(data.image);
            })
            .catch(()=>{
                navigate("/product-not-found");
            })
        },[])
    }

    const handleChange = (e) => {
        setQuantity(e.target.value);
    }

    const removeSameItem = (arr, value) => arr.filter(function( obj ) {
        return obj.id !== value.id;
    });

    const setMainImage = (image) => {
        _setMainImage(image);
    }

    return (
        <>
            {loading ? (
                <PageLoadingAnimation />
            ):(
                <>
                    <section id="sproduct" className="container my-5 pt-5">
                        <div className="row mt-5">
                            <div className="col-lg-5 col-md-12 col-12">
                                <img className="img-fluid pb-1 w-100" src={mainImage} alt={product.title} />
                                
                                <div className="small-img-group pb-1">
                                {product.other_images ? (<>
                                {product.other_images.map((result,index) => 
                                    <div className="small-img-col" key={index}>
                                        <img src={result.image} className="small-img" alt={product.title} onClick={()=>{setMainImage(result.image)}} />
                                    </div>
                                )}
                                </>):(
                                    <SectionLoadingAnimation />
                                )}
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 col-12">
                                <h6 className="text-uppercase">{product.category_title} / {product.brand}</h6>
                                <h3 className="py-4 uppercase text-capitalize">{product.title}</h3>
                                <h2>${product.price}</h2>
                                <h6 className="text-secondary">{product.stock} pieces on stock.</h6>
                                {product.rating && <Rating rating={product.rating} />}
                                <input type="number" value={quantity} min={0} max={product.stock} onChange={handleChange}/>
                                <button className="buy-btn">Add to cart</button>
                                <h4 className="mt-5 mb-4">Product Details</h4>
                                <span>{product.description}</span>
                            </div>
                        </div>
                    </section>
                    <section className="py-5 my-5">
                        <div className="container mt-5">
                            <h2 className="font-weight-bold">Related Products</h2>
                            <hr />
                            <p>Check this items on the same category.</p>
                        </div>
                        <div className="row mx-auto container">
                            {product.category_products ? (
                            <>
                                <ProductList products={removeSameItem(product.category_products, product)} />
                            </>
                            ):(
                            <>
                                <SectionLoadingAnimation />
                            </>
                            )}
                        </div>
                    </section>
                </>
            )}
        </>
    )
}
