
export default function Navbar() {
  return (
    <nav className="bg-[#0c4978] sticky top-0">
        <div className="hidden  h-9 bg-[#064f88] lg:flex items-center">
            <div className="container mx-auto flex justify-between">
                <div className="section-1 text-white">
                    <ul className="flex">
                        <li className="mr-5 hover:text-yellow-300 cursor-pointer">About Conputer Zone</li>
                        <li className="mr-5 hover:text-yellow-300 cursor-pointer">Feedbacks & Suggestions</li>
                        <li className="mr-5 hover:text-yellow-300 cursor-pointer">Contact Us</li>
                        <li className="mr-5 hover:text-yellow-300 cursor-pointer">FAQs</li>
                        <li className="mr-5 hover:text-yellow-300 cursor-pointer">Policies</li>
                    </ul>
                </div>
                <div className="section-2 text-white">
                    <ul className="flex ">
                        <li className="mr-5 hover:text-yellow-300 cursor-pointer">My Account</li>
                        <li className="mr-5 hover:text-yellow-300 cursor-pointer">Log In</li>
                        <li className="mr-5 hover:text-yellow-300 cursor-pointer">Create Account</li>
                    </ul>
                </div>
            </div>
        </div>

        

        <div className=" flex justify-between items-center p-3 flex-wrap container mx-auto">
            <div className="logo">
                <img src="https://www.czone.com.pk/images/logo/computerzone-logo-1540160816084000.png" alt="" />
            </div>
            <div className="flex justify-between items-center">
                <div className="cart mr-4 lg:flex">
                    <div className=" search mt-2 lg:flex items-center mr-3 hidden">
                    <input type="search" name="" id="" placeholder="search entire store here..." className=" bg-white  h-12 p-2 w-80 placeholder:italic placeholder:font-semibold placeholder:text-gray-400" />
                    <select name=""  id="" className="bg-[#f9f9f9] h-12 text-[#0c4978] font-bold w-80 border-l border-gray-300 p-2">
                        <option value="Categories" defaultValue={"Categories"}>Categories</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Casing">Casing</option>
                        <option value="Mouse">Mouse</option>
                        <option value="Keyboard">Keyboard</option>
                        <option value="Printer">Printer</option>
                    </select>
                    <img src="/search.svg" className="h-12 w-10 p-3 bg-yellow-300 cursor-pointer " alt="" />
                </div>
                    <button className="bg-white px-2 py-2.5  border text-[#0c4978] cursor-pointer">
                        <img className="h-6 w-6 mr-1 inline" src="/cart.svg" alt="cart" />
                        CART
                    </button>
                </div>
                <div className="menu lg:hidden">
                    <button href="/" className="bg-white px-1 py-1 border text-[#0c4978] cursor-pointer">
                        <img className="h-9 w-8 inline" src="/hamburger.svg" alt="hamburger" />
                    </button>
                </div>
            </div>
            <div className="lg:hidden search mt-2 w-full flex items-center">
                <input type="search" name="" id="" placeholder="search entire store here..." className=" bg-white  h-10 p-2 w-full" />
               <img src="/search.svg" className="h-10 w-10 p-3 bg-yellow-300 cursor-pointer " alt="" />
            </div>
        </div>



        <div className="bg-[#022e4c] h-15 lg:flex items-center text-white hidden">
            <div className="container mx-auto h-full flex justify-between">
                <div>
                <button href="/" className="hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full">HOME</button>
                <button href="/" className="hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full">PRODUCTS</button>
                <button href="/" className="hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full">LAPTOPS</button>
                <button href="/" className="hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full">GPU</button>
                <button href="/" className="hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full">MONITERS</button>
                <button href="/" className="hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full">PRINTERS</button>
                <button href="/" className="hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full">HDD</button>
                <button href="/" className="hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full">SDD</button>
                <button href="/" className="hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full">NETWORK</button>
                <button href="/" className="hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full">RAM</button>
                <button href="/" className="hover:bg-[#06649e] border-gray-900 font-semibold border-r xl:px-7 lg:px-4 duration-300 h-full">PSU</button>
                </div>
                <div className="flex items-center">
                    <img  className="h-7" src="/facebook.svg" alt="facebook" />
                </div>
            </div>

        </div>
    </nav>
  )
}
