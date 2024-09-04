import { useState } from 'react';
import { createPortal } from 'react-dom';

import closeIcon from "../../images/icon-close.svg";
import image1 from "../../images/image-product-1.jpg"
import image2 from "../../images/image-product-2.jpg"
import image3 from "../../images/image-product-3.jpg"
import image4 from "../../images/image-product-4.jpg"
import nextIcon from "../../images/icon-next.svg";
import prevIcon from "../../images/icon-previous.svg";

export default function GalleryModal({onDone}: {onDone:any}) {
  const [imageIndex, setImageIndex] = useState(0);
  const imgArray: string[] = [image1, image2, image3, image4];
  const activeImg: string = "absolute top-0 bg-n-white bg-opacity-75 h-full w-full border-2 border-p-orange rounded-lg";
  const navIcon: string = "flex justify-center items-center absolute top-[270px] w-10 h-10 bg-n-white rounded-full";

  function handleCloseModal() {
    onDone();
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

  return createPortal(
    <>
      <dialog
        className="fixed top-0 left-0 w-full h-full bg-n-v-dark-blue bg-opacity-75 z-30"
        onClose={onDone}
        open
      >
        <div className="relative flex flex-col h-full top-[136px] items-center z-20">
          <div className="relative flex flex-col w-[520px]">
            <img src={closeIcon} alt="Close menu icon" className="h-[18px] self-end object-contain cursor-pointer mb-3" onClick={handleCloseModal} />
            <div>
              <button type="button" className={`${navIcon} -left-5`} onClick={handlePrev}>
                <img src={prevIcon} alt="Previous image icon" className="h-4 object-contain" />
              </button>
              <img
                src={imgArray[imageIndex]}
                alt="Product image 1"
                className="h-[520px] object-contain rounded-lg"
              />
              <button type="button" className={`${navIcon} -right-5`} onClick={handleNext}>
                <img src={nextIcon} alt="Previous image icon" className="h-4 object-contain" />
              </button>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <button type="button" className="relative" onClick={() => handleClick(0)}>
                <img src={image1} alt="Product image 1" className="h-[88px] object-contain rounded-lg hover:opacity-50"/>
                {imageIndex == 0 && <div className={activeImg}/>}
              </button>
              <button type="button" className="relative" onClick={() => handleClick(1)}>
                <img src={image2} alt="Product image 1" className="h-[88px] object-contain rounded-lg hover:opacity-50" />
                {imageIndex == 1 && <div className={activeImg}/>}
              </button>
              <button type="button" className="relative" onClick={() => handleClick(2)}>
                <img src={image3} alt="Product image 1" className="h-[88px] object-contain rounded-lg hover:opacity-50" />
                {imageIndex == 2 && <div className={activeImg}/>}
              </button>
              <button type="button" className="relative" onClick={() => handleClick(3)}>
                <img src={image4} alt="Product image 1" className="h-[88px] object-contain rounded-lg hover:opacity-50" />
                {imageIndex == 3 && <div className={activeImg}/>}
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById('gallery-modal')!
  );
}