import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext({
  quantity: 0,
  updateQuantity: (qty: number) => {},
  clearQuantity: () => {},
});

export function CartContextProvider({children}: {children:any}) {
  const [quantity, setQuantity] = useState(0);

  function updateQuantity(qty: number) {
    setQuantity(quantity + qty);
  }

  function clearQuantity() {
    setQuantity(0);
  }

  const cartCtx = {
    quantity: quantity,
    updateQuantity,
    clearQuantity,
  };

  return <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
}

export default CartContext;