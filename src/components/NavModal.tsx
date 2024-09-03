import { createPortal } from 'react-dom';

import closeIcon from "../../images/icon-close.svg";

export default function NavModal({onDone}: {onDone:any}) {
  const navStyle: string = "font-bold text-lg text-n-v-dark-blue text-start pl-6 cursor-pointer"

  function handleCloseModal() {
    onDone();
  }

  return createPortal(
    <>
      <dialog
        className="fixed top-0 left-0 w-full h-full font-kumbhSans bg-n-v-dark-blue bg-opacity-75 z-30"
        onClose={onDone}
        open
      >
        <div className="relative flex flex-col bg-n-white w-[70%] h-full z-20">
          <div className="relative flex justify-between p-6 mb-12 z-20 font-kumbhSans">
            <img src={closeIcon} alt="Close menu icon" className="h-[18px] self-center object-contain cursor-pointer" onClick={handleCloseModal} />
          </div>
          <div className="flex flex-col gap-5">
            <button type="button" className={navStyle}>Collections</button>
            <button type="button" className={navStyle}>Men</button>
            <button type="button" className={navStyle}>Women</button>
            <button type="button" className={navStyle}>About</button>
            <button type="button" className={navStyle}>Contact</button>
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById('nav-modal')!
  );
}