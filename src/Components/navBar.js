import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { fetchResult } from "../Redux/productSlice";

function Navbar() {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart); // name , value

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            dispatch(fetchResult(searchTerm)); // Dispatch search action
        }
    };
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Logo />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span><i className="fa fa-bars" aria-hidden="true"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul
                        className="navbar-nav me-auto my-2 my-lg-0  navbar-nav-scroll"
                        style={{ "--bs-scroll-height": "fit-content" }}
                    >
                        <li className="nav-item pt-2">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item pt-2">
                            <Link className="nav-link" to="/Products">
                                Shop Now
                            </Link>
                        </li>
                        <li className="nav-item">
                            <div className="cart-icon">
                                <p className="text-danger">{cart.length}</p>
                                <Link to="/Cart" className="nav-link text-dark">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </li>
                    </ul>
                    <form className="search-box d-flex" role="search" onSubmit={handleSearch}>
                        <input 
                            className="form-control" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                            id="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
