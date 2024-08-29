import React from "react";
import Logo from "./Logo";
import Media from "./Media";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-light p-3 d-flex">
            <div className="container">
                <div>
                    <Logo />
                    <Media />
                </div>
                <section>
                    <Link to="/" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Home</Link>
                    <Link to="/Products" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Products</Link>
                    <Link to="/Cart" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Cart</Link>
                    <Link to="#" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">About Us</Link>
                    <Link to="#" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Contact Us</Link>
                </section>
                <section>
                    <Link to="/" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Home</Link>
                    <Link to="/Products" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Products</Link>
                    <Link to="/Cart" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Cart</Link>
                    <Link to="#" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">About Us</Link>
                    <Link to="#" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Contact Us</Link>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
