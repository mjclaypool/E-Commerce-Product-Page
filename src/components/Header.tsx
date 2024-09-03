import logo from "../../images/logo.svg";
import avatar from "../../images/image-avatar.png";
import cartIcon from "../../images/icon-cart.svg";
import cartDarkIcon from "../../images/icon-cart-dark.svg";
import hamburgerIcon from "../../images/icon-menu.svg";

export default function Header() {
  const navUnderline: string = "absolute -bottom-[50px] group-hover:bg-p-orange h-[4px] w-full";
  const navLinks: string[] = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <>
      <header className="flex items-center justify-between font-kumbhSans px-6 py-5 xl:px-40 xl:py-8">
        <div className="flex">
          <div className="flex gap-4 xl:gap-14">
            <img src={hamburgerIcon} alt="Hamburger menu icon" className="xl:hidden object-contain" />
            <img src={logo} alt="Sneakers logo" className="h-5 object-contain" />
          </div>
          <nav className="hidden xl:flex gap-[34px] text-[15px] text-n-dark-grey-blue px-14">
            {navLinks.map(link => (
              <div key={link} className="relative flex group">
                <button type="button" className="hover:text-n-v-dark-blue" >{link}</button>
                <div className={navUnderline} />
              </div>
            ))}
          </nav>
        </div>
        <div className="flex gap-6 xl:gap-12">
          <button className="group">
            <img src={cartIcon} alt="Cart icon" className="group-hover:hidden object-contain cursor-pointer" />
            <img src={cartDarkIcon} alt="Cart icon" className="hidden group-hover:block object-contain cursor-pointer" />
          </button>
          <button>
            <img src={avatar} alt="Avatar image" className="h-7 xl:h-14 object-contain rounded-full border-2 border-transparent hover:border-p-orange cursor-pointer" />
          </button>
        </div>
      </header>
      <div className="hidden xl:block border-b-[1px] mx-40"/>
    </>
  )
}