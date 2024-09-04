import { useState } from "react";
import GalleryModal from "./GalleryModal";

import image1 from "../../images/image-product-1.jpg"
import image2 from "../../images/image-product-2.jpg"
import image3 from "../../images/image-product-3.jpg"
import image4 from "../../images/image-product-4.jpg"
import nextIcon from "../../images/icon-next.svg";
import prevIcon from "../../images/icon-previous.svg";

export default function ProductImages() {
  const [imageIndex, setImageIndex] = useState(0);
  const [galleryVisible, setGalleryVisible] = useState(false);

  const imgArray: string[] = [image1, image2, image3, image4];
  const activeImg: string = "absolute top-0 bg-n-white bg-opacity-75 h-full w-full border-2 border-p-orange rounded-lg";
  const navIcon: string = "xl:hidden flex justify-center items-center absolute top-[200px] w-10 h-10 bg-n-white rounded-full";

  function handleOpen() {
    setGalleryVisible(true);
  }

  function handleClose() {
    setGalleryVisible(false);
  }

  function handleClick(index: number) {
    setImageIndex(index);
  }

  function handlePrev() {
    if (imageIndex !== 0) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(3);
    }
  }

  function handleNext() {
    if (imageIndex !== 3) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  }

  return (
    <>
      {galleryVisible && <GalleryModal onDone={handleClose} />}
      <div className="min-w-[450px] mx-12">
        <div>
          <button aria-label="View previous image" type="button" className={`${navIcon} left-4`} onClick={handlePrev}>
            <img src={prevIcon} alt="Previous image icon" className="h-4 object-contain" />
          </button>
          <img
            aria-label="Open gallery modal"
            src={imgArray[imageIndex]}
            alt="Product image 1"
            className="hidden xl:block h-[300px] w-full xl:h-[450px] object-cover xl:object-contain rounded-lg xl:cursor-pointer"
            onClick={handleOpen}
          />
          <img
            src={imgArray[imageIndex]}
            alt="Product image 1"
            className="xl:hidden h-[300px] w-full xl:h-[450px] object-cover xl:object-contain rounded-lg xl:cursor-pointer"
          />
          <button aria-label="View next image" type="button" className={`${navIcon} right-4`} onClick={handleNext}>
            <img src={nextIcon} alt="Next image icon" className="h-4 object-contain" />
          </button>
        </div>
        <div className="hidden xl:flex justify-between mt-8">
          <button
            aria-label="Product image 1"
            type="button"
            className="relative"
            onClick={() => handleClick(0)}
          >
            <img src={image1} alt="Product image 1" className="h-[88px] object-contain rounded-lg hover:opacity-50"/>
            {imageIndex == 0 && <div className={activeImg}/>}
          </button>
          <button
            aria-label="Product image 2"
            type="button"
            className="relative"
            onClick={() => handleClick(1)}
          >
            <img src={image2} alt="Product image 2" className="h-[88px] object-contain rounded-lg hover:opacity-50" />
            {imageIndex == 1 && <div className={activeImg}/>}
          </button>
          <button
            aria-label="Product image 3"
            type="button"
            className="relative"
            onClick={() => handleClick(2)}
          >
            <img src={image3} alt="Product image 3" className="h-[88px] object-contain rounded-lg hover:opacity-50" />
            {imageIndex == 2 && <div className={activeImg}/>}
          </button>
          <button
            aria-label="Product image 4"
            type="button"
            className="relative"
            onClick={() => handleClick(3)}
          >
            <img src={image4} alt="Product image 4" className="h-[88px] object-contain rounded-lg hover:opacity-50" />
            {imageIndex == 3 && <div className={activeImg}/>}
          </button>
        </div>
      </div>
    </>
  )
}