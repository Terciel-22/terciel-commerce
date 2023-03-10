import Product from './Product'

export default function ProductList({products}) {
    return (
        <>
            {products.map( (product,index) => 
                <Product product={product} key={index}/>
            )}
        </>
    )
}
