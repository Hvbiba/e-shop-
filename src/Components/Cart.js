import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProductFromCart } from "../Redux/cartSlice";

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);

    const handleDelete = (productId) => {
        dispatch(removeProductFromCart(productId));
    };

    // Calculate total price with reduce
    const totalPrice = cart.reduce((total, product) => total + (product.price * product.count), 0);
    // 0 as int sum=0;

    return (
        <div className="container my-3" id="cart-page">
            {cart.length === 0 ? (
                <h4>Your cart is empty</h4>
            ) : (
            <>
            <div className="container" id="order">
                <h4 className="text-success">Order Summary</h4>
                <h5>Total Price: <span className="text-danger">${totalPrice.toFixed(2)}</span></h5> 
            </div>
            <table className="table w-100">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Count</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => (
                        <tr key={product.id}>
                            <th scope="row">{product.id}</th>
                            <td><img src={product.images[0]} alt={product.title} style={{ width: '100px' }} /></td>
                            <td>{product.title}</td>
                            <td>${product.price}</td>
                            <td>{product.count}</td>
                            <td>
                                <h5 
                                    className="text-danger" 
                                    style={{ cursor: 'pointer' }} 
                                    onClick={() => handleDelete(product.id)}
                                >
                                    Delete
                                </h5>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
            )}
        </div>
    );
}

export default Cart;
