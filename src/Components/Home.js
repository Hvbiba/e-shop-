import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../Redux/productSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'; 
import Content from "./HomeContent";

function Home() {
    const dispatch = useDispatch(); // to call action use dispatch
    // state.name.value => change start value with useSelector
    const products = useSelector((state) => state.products.products); 
    // by default it all to display all products from api then will change by click
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'furniture', 'groceries', 'beauty'];


    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        console.log('Products:', products); 
    }, [products]);

    // Filter products based on the selected category
    //defalut all => all products || filter function 
    const filteredProducts = selectedCategory === 'All' 
        ? products 
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className="container">
            <Content />
            <div className="categories">
                <div className="btn-group">
                    <button type="button" className="btn btn-success">Categories</button>
                    <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu">
                        {categories.map((category, index) => (
                            <li key={index}>
                                <a 
                                    className="dropdown-item" 
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {
                filteredProducts.length === 0 ? (
                    <FontAwesomeIcon icon={faSpinner} spin size="2x" id="loadingIcon" />
                ) : (
                    <div className="container my-3" id="home-products">
                        {filteredProducts.map((product) => (
                            <div className="card bg-light" key={product.id}>
                                <img src={product.images[0]} alt={product.title} />
                                <h5>{product.title}</h5>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
}

export default Home;
