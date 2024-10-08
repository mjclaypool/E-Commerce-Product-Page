import { useState, useContext } from "react";
import CartContext from '../store/CartContext';

import plusIcon from "../../images/icon-plus.svg";
import minusIcon from "../../images/icon-minus.svg";
import cartDarkIcon from "../../images/icon-cart-dark.svg";

export default function ProductDetails() {
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const iconStyle: string = "w-[36px] object-contain px-3 cursor-pointer hover:opacity-70";

  function handleDecrease() {
    if (quantity !== 0) {
      setQuantity(quantity - 1)
    }
  }

  function handleIncrease() {
    setQuantity(quantity + 1)
  }

  function handleAddToCart() {
    cartCtx.updateQuantity(quantity);
  }

  return (
    <div className="font-kumbhSans m-6 xl:ml-[72px] xl:mr-12 xl:my-0">
      <p className="font-semibold text-[13px] xl:text-sm text-n-dark-grey-blue tracking-widest mb-4">SNEAKER COMPANY</p>
      <h1 className="font-bold text-[28px] xl:text-[44px] leading-none text-n-v-dark-grey-blue mb-4 xl:mb-10">Fall Limited Edition Sneakers</h1>
      <p className="text-n-dark-grey-blue text-[15px] xl:text-base leading-relaxed mb-6">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
      <div className="flex justify-between items-center xl:flex-col xl:items-start mb-6 xl:mb-10">
        <div className="flex items-end gap-4 mb-2">
          <h2 className="font-bold text-2xl text-n-v-dark-grey-blue">$125.00</h2>
          <h3 className="font-semibold text-base text-n-white bg-n-v-dark-blue py-[1px] px-[10px] rounded-md">50%</h3>
        </div>
        <h3 className="font-semibold text-n-dark-grey-blue line-through">$250.00</h3>
      </div>
      <div className="flex flex-col xl:flex-row xl:flex-wrap gap-4 font-semibold text-n-v-dark-blue">
        <div className="flex justify-between bg-n-light-grey-blue rounded-lg">
          <img src={minusIcon} alt="Minus icon" className={iconStyle} onClick={handleDecrease} />
          <p className="text-center min-w-[80px] py-4">{quantity}</p>
          <img src={plusIcon} alt="Plus icon" className={iconStyle} onClick={handleIncrease} />
        </div>
        <button
          type="button"
          className="flex gap-4 justify-center items-center bg-p-orange hover:bg-opacity-70 py-4 xl:px-20 rounded-lg cursor-pointer max-h-[56px]"
          onClick={handleAddToCart}
        >
          <img src={cartDarkIcon} alt="Cart icon" className="h-4 object-contain" />
          Add to cart
        </button>
      </div>
    </div>
  )
}