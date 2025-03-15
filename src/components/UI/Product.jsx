


export default function Product() {
  return (
    <>
    <div className="max-w-xs rounded overflow-hidden border border-gray-200 p-3 mb-7">
  <img className="w-full" src="https://www.czone.com.pk/Images/Thumbnails/5-czone.com.pk-1540-17343-191124093449.jpg" alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-center text-xl mb-2 text-[#085eb9]">HP Victus 15 FA1657NR Gaming Laptop | Inte...</div>
    <p className="text-gray-500 text-base">
    (15.6") diagonal, FHD (1920 x 1080), 144 Hz, ...
    </p>
    <ul className="list-disc text-gray-500 mt-3">
        <li className="mt-1">Intel® Core™ i7-13620H Processor</li>
        <li className="mt-1">16GB DDR4 3200 Memory - 512 GB PCIe® NVMe™ TLC M.2 SSD</li>
        <li className="mt-1">NVIDIA GeForce RTX 4060 8GB GDDR6</li>
        <li className="mt-1">15.6" FHD 144Hz 9ms IPS Display</li>
    </ul>
  </div>

  <div className="price border-t w-[90%] mx-auto mt-5 border-gray-200">
    <p className="text-center mt-2 text-2xl font-bold text-gray-700 ">Rs.289,900</p>
    <a className=" block text-center border uppercase mt-2 p-2 rounded font-bold text-white bg-[#00385e]" href="/">
    <img src="/chain.svg"  alt="chain" className="h-8 inline mr-1.5" />
    View Detail</a>
  </div>

</div>
    </>
  );
}
