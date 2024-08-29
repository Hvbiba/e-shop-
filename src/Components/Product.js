import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Display() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const key = 'https://dummyjson.com/products';
        fetch(`${key}/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                setProduct(data);
                console.log(data)
            })
            .catch((error) => {
                console.error("Error fetching product:", error);
            });
    }, [id]);

    return (
        <div className="container my-5" id="display-product">
            {product?.images && product.images.length > 0 ? (
                <img src={product.images[0]} alt={product.title} className="bg-light" />
            ) : (
                <img src="/path/to/default-image.jpg" alt="Default" className="w-25 bg-light" />
            )}
            <div className="container my-2 p-3">
                <h3>{product?.title}</h3>
                <h5>Code: <span className="text-secondary">{product?.sku}</span></h5>
                <h5>Category: {product?.category}</h5>
                <h5>Brand: {product?.brand}</h5>
                <h5>Price: <span className="text-danger">{product?.price}$</span></h5>
                <h5>Offer: {product?.discountPercentage}%<span className="text-danger"> Off</span></h5>
                <h5>Rate: {product?.rating}</h5>
                <div className="d-flex">
                        <h5 className="m-2 ms-0">Tags: </h5>
                        <button type="button" class="btn btn-success m-1">{product?.tags[0]}</button>
                        <button type="button" class="btn btn-success m-1">{product?.tags[1]}</button>
                </div>
            </div>
        </div>
    );
}

export default Display;
