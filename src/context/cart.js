import React, { createContext, useState, useContext, useEffect} from 'react';

const CartContext = createContext();

export default function CartProvider({children}) {
    const [cart, setCard] = useState([])
    const [totalValue, setTotalValue] = useState()

    useEffect(() => {
        console.log(cart)
    }, [cart])

    function add (adc) {
        const newCart = cart
        newCart.push(adc)
        setCart([...newCart])
    }
    const store = {
        add,
        cart,
        totalValue
    }

    return (
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
    )

}

 export function useCart() {

     const context = useContext (CartContext)

     const {
         cart,
         add,
         totalValue
     } = context 

     return {
         cart,
         add,
         totalValue
     }
 }

