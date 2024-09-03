import { useState } from "react";

import image1 from "../../images/image-product-1.jpg"
import image2 from "../../images/image-product-2.jpg"
import image3 from "../../images/image-product-3.jpg"
import image4 from "../../images/image-product-4.jpg"
import nextIcon from "../../images/icon-next.svg";
import prevIcon from "../../images/icon-previous.svg";

export default function ProductImages() {
  const [mainImg, setMainImg] = useState(image1);

  const activeImg: string = "absolute top-0 bg-n-white bg-opacity-75 h-full w-full border-2 border-p-orange rounded-lg";
  const navIcon: string = "xl:hidden flex justify-center items-center absolute top-[200px] w-10 h-10 bg-n-white rounded-full";

  function handleClick(image: string) {
    setMainImg(image);
  }

  return (
    <div className="min-w-[450px] mx-12">
      <img src={mainImg} alt="Product image 1" className="h-[300px] w-full xl:h-[450px] object-cover xl:object-contain rounded-lg" />
      <button type="button" className={`${navIcon} left-4`}>
        <img src={prevIcon} alt="Previous image icon" className="h-4 object-contain" />
      </button>
      <button type="button" className={`${navIcon} right-4`}>
        <img src={nextIcon} alt="Previous image icon" className="h-4 object-contain" />
      </button>
      <div className="hidden xl:flex justify-between mt-8">
        <button type="button" className="relative" onClick={() => handleClick(image1)}>
          <img src={image1} alt="Product image 1" className="h-[88px] object-contain rounded-lg hover:opacity-50"/>
          {mainImg == image1 && <div className={activeImg}/>}
        </button>
        <button type="button" className="relative" onClick={() => handleClick(image2)}>
          <img src={image2} alt="Product image 1" className="h-[88px] object-contain rounded-lg hover:opacity-50" />
          {mainImg == image2 && <div className={activeImg}/>}
        </button>
        <button type="button" className="relative" onClick={() => handleClick(image3)}>
          <img src={image3} alt="Product image 1" className="h-[88px] object-contain rounded-lg hover:opacity-50" />
          {mainImg == image3 && <div className={activeImg}/>}
        </button>
        <button type="button" className="relative" onClick={() => handleClick(image4)}>
          <img src={image4} alt="Product image 1" className="h-[88px] object-contain rounded-lg hover:opacity-50" />
          {mainImg == image4 && <div className={activeImg}/>}
        </button>
      </div>
    </div>
  )
}