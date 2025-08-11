import React, { createContext, useEffect, useState } from "react";

// Create the Context
export const CartContext = createContext();

// Create a Provider component -(this is used as a wrapper in App.jsx)
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        // Load from localStorage on first render
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        // Save to localStorage whenever cart changes
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Add course to cart
    const addToCart = (course) => {
        const alreadyInCart = cart.some((item) => item.id === course.id);

        if (!alreadyInCart) {
            setCart((prevCart) => [...prevCart, course]);
        }
    };

    // Remove course from cart
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((course) => course.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};


// This is a REACT CONTEXT pattern where:
// CartProvider is just a wrapper component that stores your cart state and shares it with all other components in your app.
// ie, In App.jsx use as:
// <CartProvider>
//   <HomePage />
//   <CartPage />
// </CartProvider>
//
// CartContext.Provider =>
//          Creates a “data store” and makes its value available to all components inside it.
// value={{ cart, addToCart, removeFromCart, clearCart }} =>
//          This is the data and functions you’re sharing.
// {children} =>
//          This is the special prop that represents whatever components you wrap inside <CartProvider> ... </CartProvider>.
//
// If in App.jsx:
// <CartProvider>
//   <HomePage />
//   <CartPage />
// </CartProvider>
//
// Then:
// children = <HomePage /> <CartPage />
// They will be placed inside:
// <CartContext.Provider value={{ ... }}>
//   <HomePage />
//   <CartPage />
// </CartContext.Provider>
// So now HomePage and CartPage (and anything inside them) can use useContext(CartContext) to get cart, addToCart, etc., without passing props manually.