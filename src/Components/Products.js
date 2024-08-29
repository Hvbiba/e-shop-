import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../Redux/productSlice";
import { addProductToCart } from "../Redux/cartSlice";  
import { Link } from "react-router-dom";

function Products() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const filteredData = useSelector((state) => state.products.filteredData);
   
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const productList = filteredData.length === 0 ? products : filteredData;

    const handleAddToCart = (product) => {
        dispatch(addProductToCart(product));
    };

    return (
        <>
            <h4 className="text-center p-2">
                Exclusive Collections Just for You - 
                <span className="text-success">Shop Now!</span>
            </h4>
            <div className="container my-3" id="all-products">
                {productList.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.images[0]} className="card-img-top bg-light" alt={product.title} />
                        <div className="card-body">
                            <h6 className="text-center">{product.title}</h6>
                            <h6 className="text-danger"><b>{product.price}$</b></h6>
                            <p>{product.description.slice(0, 50)}....</p>
                            <div className="d-flex">
                                <button 
                                    type="button" 
                                    className="btn btn-dark w-75 me-2"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    Add To Cart
                                </button>
                                <Link to={`/Products/${product.id}`} className="btn btn-success">
                                    Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Products;
