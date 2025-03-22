import { useRef, useEffect } from "react";

export default function Navbar() {
  const productContainerRef = useRef(null);
  const accountContainerRef = useRef(null);
  const productButtonRef = useRef(null);
  const accountButtonRef = useRef(null);
  const menuButtonRef = useRef(null);
  const menuContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        productButtonRef.current &&
        !productButtonRef.current.contains(e.target)
      ) {
        productContainerRef.current.classList.add("hidden");
      }
      if (
        accountButtonRef.current &&
        !accountButtonRef.current.contains(e.target)
      ) {
        accountContainerRef.current.classList.add("hidden");
      }
      if (
        menuButtonRef.current &&
        !menuButtonRef.current.contains(e.target) &&
        !menuContainerRef.current.contains(e.target)
      ) {
        menuContainerRef.current.classList.add("not-lg:hidden");
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleProductClick = () => {
    if (productContainerRef.current) {
      const sm_products_list = document.getElementById("sm-products-list");
      sm_products_list.classList.toggle("not-lg:hidden");
      productContainerRef.current.classList.toggle("hidden");
    }
  };

  const handleAccountClick = () => {
    if (accountContainerRef.current)
      accountContainerRef.current.classList.toggle("hidden");
  };

  const handleMenuClick = () => {
    if (menuContainerRef.current) {
      menuContainerRef.current.classList.toggle("not-lg:hidden");
    }
  };

  return (
    <nav className="bg-[#0c4978] sticky top-0">
      <div className="hidden  min-h-9 bg-[#064f88] lg:flex items-center">
        <div className="container mx-auto flex justify-between">
          <div className="section-1 text-white">
            <ul className="flex">
              <li className="mr-5 hover:text-yellow-300 cursor-pointer">
                About Conputer Zone
              </li>
              <li className="mr-5 hover:text-yellow-300 cursor-pointer">
                Feedbacks & Suggestions
              </li>
              <li className="mr-5 hover:text-yellow-300 cursor-pointer">
                Contact Us
              </li>
              <li className="mr-5 hover:text-yellow-300 cursor-pointer">
                FAQs
              </li>
              <li className="mr-5 hover:text-yellow-300 cursor-pointer">
                Policies
              </li>
            </ul>
          </div>
          <div className="section-2 text-white">
            <ul className="flex ">
              <li
                ref={accountButtonRef}
                className="mr-5 hover:text-yellow-300 cursor-pointer"
                onClick={handleAccountClick}
              >
                My Account &#9660;
              </li>
              <li className="mr-5 hover:text-yellow-300 cursor-pointer">
                Log In
              </li>
              <li className="mr-5 hover:text-yellow-300 cursor-pointer">
                Create Account
              </li>
            </ul>
            <div
              ref={accountContainerRef}
              id="account-options"
              className="hidden not-lg:hidden absolute bg-white text-gray-600 rounded mt-2"
            >
              <ul>
                <li className="mx-2 my-1 px-4 py-1 rounded-sm hover:bg-gray-100">
                  <a href="" className="">
                    Profile
                  </a>{" "}
                </li>
                <li className="mx-2 my-1 px-4 py-1 rounded-sm hover:bg-gray-100">
                  <a href="" className="">
                    Order History
                  </a>{" "}
                </li>
                <li className="mx-2 my-1 px-4 py-1 rounded-sm hover:bg-gray-100">
                  <a href="" className="">
                    Change Password
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-between items-center p-3 flex-wrap container mx-auto">
        <div className="logo">
          <img
            src="https://www.czone.com.pk/images/logo/computerzone-logo-1540160816084000.png"
            alt=""
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="cart mr-4 lg:flex">
            <div className=" search mt-2 lg:flex items-center mr-3 hidden">
              <input
                type="search"
                name=""
                id=""
                placeholder="search entire store here..."
                className=" bg-white  h-12 p-2 w-80 placeholder:italic  placeholder:text-gray-400"
              />
              <select
                name=""
                id=""
                className="bg-[#f9f9f9] h-12 text-[#0c4978] font-bold w-80 border-l border-gray-300 p-2"
              >
                <option value="Categories" defaultValue={"Categories"}>
                  Categories
                </option>
                <option value="Laptop">Laptop</option>
                <option value="Casing">Casing</option>
                <option value="Mouse">Mouse</option>
                <option value="Keyboard">Keyboard</option>
                <option value="Printer">Printer</option>
              </select>
              <img
                src="/search.svg"
                className="h-12 w-10 p-3 bg-yellow-300 cursor-pointer "
                alt=""
              />
            </div>
            <button className="bg-white px-2 py-2.5  border text-[#0c4978] cursor-pointer">
              <img className="h-6 w-6 mr-1 inline" src="/cart.svg" alt="cart" />
              CART
            </button>
          </div>
          <div className="menu lg:hidden">
            <button
              onClick={handleMenuClick}
              ref={menuButtonRef}
              href="/"
              className="bg-white px-1 py-1 border text-[#0c4978]  cursor-pointer"
            >
              <img
                className="h-9 w-8 inline"
                src="/hamburger.svg"
                alt="hamburger"
              />
            </button>
          </div>
        </div>
        <div className="lg:hidden search mt-2 w-full flex items-center">
          <input
            type="search"
            name=""
            id=""
            placeholder="search entire store here..."
            className=" bg-white  h-10 p-2 w-full"
          />
          <img
            src="/search.svg"
            className="h-10 w-10 p-3 bg-yellow-300 cursor-pointer "
            alt=""
          />
        </div>
      </div>

      <div
        ref={menuContainerRef}
        className="bg-[#022e4c] not-lg:h-60 lg:h-15  lg:flex not-lg:absolute not-lg:w-full items-center text-white not-lg:hidden"
      >
        <div className="container mx-auto h-full overflow-auto  lg:flex justify-between">
          <div className="">
            <button
              href="/"
              className="not-lg:my-2 hover:bg-[#06649e] not-lg:block not-lg:border-0 not-lg:w-full not-lg:text-left not-lg:px-2 border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full cursor-pointer"
            >
              HOME
            </button>
            <button
              href="/"
              ref={productButtonRef}
              onClick={handleProductClick}
              className="not-lg:my-2 not-lg:block not-lg:border-0 not-lg:w-full not-lg:text-left not-lg:px-2 hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full cursor-pointer"
            >
              PRODUCTS &#9660;
              <ul
                id="sm-products-list"
                className="not-lg:block hidden text-sm mx-4 text-gray-300"
              >
                <li className="">Laptops</li>
                <li className="">Laptops | Used</li>
                <li className="">Laptop Accessories</li>
                <li className="">Cameras | Drones</li>
                <li className="">Cartridges & Toners</li>
                <li className="">Casing</li>
                <li className="">Cooling Solutions</li>
                <li className="">Desktop Computers</li>
                <li className="">Gaming Consoles</li>
                <li className="">Gaming Furniture</li>
                <li className="">Gaming Products</li>
                <li className="">Graphic Cards</li>
                <li className="">Graphic Tablets</li>
                <li className="">Hard Drives</li>
                <li className="">Headsets | Headphones | Mic</li>
                <li className="">Keyboard</li>
                <li className="">LCD/LED Monitors</li>
                <li className="">Memory Cards</li>
                <li className="">Memory Module / RAM</li>
                <li className="">Motherboards</li>
                <li className="">Mouse</li>
                <li className="">Network Products</li>
                <li className="">Peripherals / Misc</li>
                <li className="">Point Of Sale POS</li>
                <li className="">Power Supply</li>
                <li className="">Presenters</li>
                <li className="">Printers</li>
                <li className="">Processors</li>
                <li className="">Projectors</li>
                <li className="">Scanner</li>
                <li className="">Smart Watches</li>
                <li className="">Softwares</li>
                <li className="">Solid-State Drives (SSD)</li>
                <li className="">Speakers</li>
                <li className="">Stabilizer</li>
                <li className="">Tablet PC</li>
                <li className="">Tablet Accessories</li>
                <li className="">TV Devices | Streaming Media Players</li>
                <li className="">UPS</li>
                <li className="">USB Flash Drives</li>
                <li className="">Used Products</li>
              </ul>
            </button>
            <button
              href="/"
              className="not-lg:my-2 not-lg:block not-lg:border-0 not-lg:w-full not-lg:text-left not-lg:px-2 hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full cursor-pointer"
            >
              LAPTOPS
            </button>
            <button
              href="/"
              className="not-lg:my-2 not-lg:block not-lg:border-0 not-lg:w-full not-lg:text-left not-lg:px-2 hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full cursor-pointer"
            >
              GPU
            </button>
            <button
              href="/"
              className="not-lg:my-2 not-lg:block not-lg:border-0 not-lg:w-full not-lg:text-left not-lg:px-2 hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full cursor-pointer"
            >
              MONITERS
            </button>
            <button
              href="/"
              className="not-lg:my-2 not-lg:block not-lg:border-0 not-lg:w-full not-lg:text-left not-lg:px-2 hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full cursor-pointer"
            >
              PRINTERS
            </button>
            <button
              href="/"
              className="not-lg:my-2 not-lg:block not-lg:border-0 not-lg:w-full not-lg:text-left not-lg:px-2 hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full cursor-pointer"
            >
              HDD
            </button>
            <button
              href="/"
              className="not-lg:my-2 not-lg:block not-lg:border-0 not-lg:w-full not-lg:text-left not-lg:px-2 hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full cursor-pointer"
            >
              SDD
            </button>
            <button
              href="/"
              className="not-lg:my-2 not-lg:block not-lg:border-0 not-lg:w-full not-lg:text-left not-lg:px-2 hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full cursor-pointer"
            >
              NETWORK
            </button>
            <button
              href="/"
              className="not-lg:my-2 not-lg:block not-lg:border-0 not-lg:w-full not-lg:text-left not-lg:px-2 hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full cursor-pointer"
            >
              RAM
            </button>
            <button
              href="/"
              className="not-lg:my-2 not-lg:block not-lg:border-0 not-lg:w-full not-lg:text-left not-lg:px-2 hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full cursor-pointer"
            >
              PSU
            </button>
          </div>
          <div className="flex items-center not-lg:hidden">
            <img className="h-7" src="/facebook.svg" alt="facebook" />
          </div>
        </div>
      </div>

      <div
        ref={productContainerRef}
        id="container"
        className=" hidden container not-lg:hidden bg-white absolute left-1/2 -translate-x-1/2 border border-gray-300 shadow-lg"
      >
        <div className="flex px-10 py-8 justify-between">
          <ul className="">
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Laptops
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Laptops | Used
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Laptop Accessories
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Cameras | Drones
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Cartridges & Toners
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Casing
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Cooling Solutions
            </li>
          </ul>
          <ul className="">
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Desktop Computers
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Gaming Consoles
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Gaming Furniture
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Gaming Products
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Graphic Cards
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Graphic Tablets
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Hard Drives
            </li>
          </ul>
          <ul className="">
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Headsets | Headphones | Mic
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Keyboard
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              LCD/LED Monitors
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Memory Cards
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Memory Module / RAM
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Motherboards
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Mouse
            </li>
          </ul>
          <ul className="">
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Network Products
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Peripherals / Misc
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Point Of Sale POS
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Power Supply
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Presenters
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Printers
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Processors
            </li>
          </ul>
          <ul className="">
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Projectors
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Scanner
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Smart Watches
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Softwares
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Solid-State Drives (SSD)
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Speakers
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Stabilizer
            </li>
          </ul>
          <ul className="">
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Tablet PC
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Tablet Accessories
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              TV Devices | Streaming Media Players
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              UPS
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              USB Flash Drives
            </li>
            <li className="mb-3 text-sm text-[#085eb9] cursor-pointer duration-300 hover:translate-x-1">
              Used Products
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
