import { createContext, useEffect, useState } from "react";
import { item_list } from "../assets/assets";

export const StoreContext = createContext(null);

 export const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});


  // add to cart function, if there is no cart item: 1, else: +1
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
  };

  // remove cart function, decrease the value by 1
  const removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }


  useEffect(()=>{
    console.log(cartItems);

  },[cartItems])


  const contextValue = {
    item_list, 
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

// export default StoreContextProvider;
