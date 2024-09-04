import { useContext } from 'react';
import CartContext from '../store/CartContext';

import image1 from "../../images/image-product-1-thumbnail.jpg";
import trashIcon from "../../images/icon-delete.svg";

export default function Cart() {
  const cartCtx = useContext(CartContext);

  let cartTotal: number = cartCtx.quantity * 125;

  function handleEmptyCart() {
    cartCtx.clearQuantity();
  }

  return (
    <div className="absolute top-20 right-2 xl:top-24 xl:right-24 w-[360px] h-[256px] font-kumbhSans bg-n-white shadow-2xl rounded-lg z-40">
      <h2 className="font-bold text-n-v-dark-blue p-6">Cart</h2>
      <div className="border-b-[1px]"/>
      {cartCtx.quantity == 0 ?
        <p className="font-bold text-center text-n-dark-grey-blue my-16">Your cart is empty.</p>
      :
        <div className="px-6">
          <div className="flex justify-between py-6">
            <img src={image1} alt="Product thumbnail image" className="h-12 object-contain rounded-md" />
            <div>
              <h3 className="text-n-dark-grey-blue">Fall Limited Edition Sneakers</h3>
              <p className="inline-block text-n-dark-grey-blue">$125.00 x <span>{cartCtx.quantity}</span></p>
              <p className="inline-block font-bold text-n-v-dark-blue ml-1">${cartTotal}.00</p>
            </div>
            <button aria-label="Delete cart item" type="button" onClick={handleEmptyCart}>
              <img src={trashIcon} alt="Delete Icon" className="object-contain" />
            </button>
          </div>
          <button type="button" className="w-full font-bold bg-p-orange py-4 hover:bg-opacity-70 rounded-lg">Checkout</button>
        </div>
      }
    </div>
  )
}