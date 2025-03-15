
export default function Footer() {
  return (
    <footer>
        <div className="bg-[#002c4e] py-8">
            <div className="container mx-auto flex flex-wrap items-center xl:justify-around">
                <div className="w-full xl:w-auto  flex justify-center mb-3"> 
                <img  className="h-7" src="/facebook.svg" alt="facebook" /> 
                </div>
                <div className="w-full xl:w-auto flex justify-center items-center mb-4 xl:border-l-4 py-3 pl-5 border-[#1476b2]">
                    <img src="/newsletter.svg" alt="newsletter" className="h-10 w-10 mr-3"  />
                    <p className="text-white uppercase text-2xl">sign up for <span className="font-bold">newsletter </span></p>
                </div>
                <div className="w-full xl:w-auto flex justify-center items-center mb-3">
                    <input type="email" placeholder="Email Address" className="bg-white h-10 w-70 p-3" />
                    <button className="uppercase bg-[#ffee00] h-10 text-[#003b64] font-bold px-5">subscribe&#8594;</button>
                </div>
                
            </div>
        </div>

        <div className="bg-[#064f88] text-white">
            <div className="container mx-auto px-4 py-8 xl:flex">
            <div className="mr-15 my-6 max-w-xs">
            <img src="https://www.czone.com.pk/images/logo/computerzone-logo-1540100622044937.png" alt="czone logo" className="xl:h-12" />
            <p>Welcome to Computer Zone. Online Computer store in Pakistan. Buy Dell, Lenovo, HP, Acer laptops at the best prices in Pakistan.</p>
            </div>
            <div className="mr-15">
            <h1 className="font-bold text-3xl uppercase my-5">products</h1>
            <ul className="text-lg">
                <li className="hover:text-yellow-300 cursor-pointer">Laptops</li>
                <li className="hover:text-yellow-300 cursor-pointer">Printers</li>
                <li className="hover:text-yellow-300 cursor-pointer">Hard Drives</li>
                <li className="hover:text-yellow-300 cursor-pointer">Network Products</li>
                <li className="hover:text-yellow-300 cursor-pointer">Moniters</li>
            </ul>
            </div>
            <div className="mr-15">
            <h1 className="font-bold text-3xl uppercase my-5">account</h1>
            <ul className="text-lg">
                <li className="hover:text-yellow-300 cursor-pointer">Sign Up</li>
                <li className="hover:text-yellow-300 cursor-pointer">My Account</li>
                <li className="hover:text-yellow-300 cursor-pointer">Shopping Cart</li>
                <li className="hover:text-yellow-300 cursor-pointer">Order History</li>
            </ul>
            </div>
            <div className="mr-15">
            <h1 className="font-bold text-3xl uppercase my-5">corporate</h1>
            <ul className="text-lg">
                <li className="hover:text-yellow-300 cursor-pointer">About Us</li>
                <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
                <li className="hover:text-yellow-300 cursor-pointer">FAQs</li>
                <li className="hover:text-yellow-300 cursor-pointer">Policies</li>
                <li className="hover:text-yellow-300 cursor-pointer">Picture Gallery</li>
            </ul>
            </div>
            <div className="mr-15">
            <h1 className="font-bold text-3xl uppercase my-5">contact</h1>
            <ul className="text-lg">
                <li className="mb-3 hover:text-yellow-300 cursor-pointer"><img src="/location.svg" alt="location" className="h-8 inline" />FL 4/20, Main Rashid Minhas Road, Gulshan-e-Iqbal Block-5, Karachi, Pakistan.</li>
                <li className="mb-3 hover:text-yellow-300 cursor-pointer"><img src="/phone.svg" alt="phone" className="h-8 inline" />+922134817355 | +922134155030 | +922134960583 | +923366842938 WhatsApp Message Only</li>
                <li className="mb-3 hover:text-yellow-300 cursor-pointer"><img src="/mail.svg" alt="mail" className="h-8 inline" />info@czone.com</li>
            </ul>
            </div>
            </div>
        </div>
        <div className="bg-[#0e5d9a] text-white text-center py-5">
             <div className="container mx-auto xl:flex justify-around">
                <div className="mb-3">
                    <p>Copyright © Computer Zone 2025. All rights reserved.</p>
                </div>
                <div className="mb-3 flex justify-center">
                        <img src="https://www.czone.com.pk/assets/images/site/payment/master_card.png" className="mr-3 h-8" alt="" />
                        <img src="https://www.czone.com.pk/assets/images/site/payment/visa_card.png" className="mr-3 h-8" alt="" />
                        <img src="https://www.czone.com.pk/assets/images/site/payment/paypal.png" className="mr-3 h-8" alt="" />
                        <img src="https://www.czone.com.pk/assets/images/site/payment/american_express_card.png" className="mr-3 h-8" alt="" />
                        <img src="https://www.czone.com.pk/assets/images/site/payment/discover_network_card.png" className="mr-3 h-8" alt="" />
                        <img src="https://www.czone.com.pk/assets/images/site/payment/google_wallet.png" className="mr-3 h-8" alt="" />
                  
                </div>
                <div className="mb-3">
                    <p>Powered by Webx Ecommerce ®</p>
                </div>
             </div>


        </div>
    </footer>
    
  )
}
