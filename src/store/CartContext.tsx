import { useState } from "react";
import { createContext } from "react";

interface CartContextType {
  quantity: number;
  updateQuantity: (qty: number) => void;
  clearQuantity: () => void;
}

const CartContext = createContext<CartContextType>({
  quantity: 0,
  updateQuantity: () => {},
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