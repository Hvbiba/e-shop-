import React from "react";
import { Link } from "react-router-dom";

function Logo(){
    return(
        <div className="container" id="logo-container">
            <Link to='/'>
                <img src="https://cdn.shopify.com/assets/images/logos/shopify_logo_black.png" alt="logo"></img>
            </Link>
        </div>
    );
}
export default Logo;