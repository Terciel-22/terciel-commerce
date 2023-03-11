import Rating from './Rating';

export default function Product({product}) {

    const displayThisProduct = (id) => {
        window.location.href = `/product/${id}`;
    }

    return (
        <div className="product text-center col-lg-3 col-md-4 col-12">
            <img src={product.image} alt={product.title} className="img-fluid mb-3" />
            <Rating rating={product.rating} />
            <h5 className="p-name">{product.title}</h5>
            <h4 className="p-price">${product.price}</h4>
            <button className="buy-btn" onClick={()=>{displayThisProduct(product.id)}}>BUY NOW</button>
        </div>
    )
}
