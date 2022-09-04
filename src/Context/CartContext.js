import React, { createContext, useState, useEffect } from 'react'

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const getQtyProducts = () => {
        let qty = 0;
        products.forEach(product => qty += product.qty);
        return qty;
    }



    const addProduct = (product) => {
        if (isInCart(product.id)) {
            const found = products.find(p => p.id === product.id);
            const index = products.indexOf(found);
            const aux = [...products];
            aux[index].qty += product.qty;
            setProducts(aux);
        } else {
            setProducts([...products, product]);
        };
        getQtyProducts();
    }

    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
        getQtyProducts();
    };

    const isInCart = (id) => {
        return products.some(products => products.id === id);
    };


    const clear = () => {
        setProducts([]);
        getQtyProducts();
    }

    return (
        <Provider value={{ products, addProduct, deleteProduct, clear, isInCart, getQtyProducts}}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider