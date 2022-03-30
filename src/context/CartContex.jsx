import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item) => {
        setCart([...cart, item])
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.skuId !== id))
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.skuId === id)
    }

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            clear,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}