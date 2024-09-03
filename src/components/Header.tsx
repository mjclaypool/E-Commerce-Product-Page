import logo from "../../images/logo.svg";
import avatar from "../../images/image-avatar.png";
import cartIcon from "../../images/icon-cart.svg";
import hamburgerIcon from "../../images/icon-menu.svg";

export default function Header() {
  return (
    <>
    <header className="flex items-center justify-between font-kumbhSans px-6 py-4 xl:px-40 xl:py-8">
      <div className="flex">
        <div className="flex gap-4 lg:gap-14">
          <img src={hamburgerIcon} alt="Hamburger menu icon" className="xl:hidden object-contain" />
          <img src={logo} alt="Sneakers logo" className="h-5 object-contain" />
        </div>
        <nav className="hidden xl:flex gap-[34px] text-[15px] text-n-dark-grey-blue px-14">
          <button type="button">Collections</button>
          <button type="button">Men</button>
          <button type="button">Women</button>
          <button type="button">About</button>
          <button type="button">Contact</button>
        </nav>
      </div>
      <div className="flex gap-6 lg:gap-14">
        <img src={cartIcon} alt="Cart icon" className="object-contain" />
        <img src={avatar} alt="Avatar image" className="h-6 lg:h-12 object-contain" />
      </div>
    </header>
    <div className="hidden xl:block border-b-[1px] mx-40"/>
    </>
  )
}