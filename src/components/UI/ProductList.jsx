import Product from "./Product";

export default function ProductList() {
  return ( <>
    <div className="container mx-auto h-15 flex items-center p-3 mt-5 mb-7 bg-[#e7e7e7] text-[#49494a]">
        <p className="font-bold text-2xl uppercase">
        Featured Products
        </p>
    </div>

    <div className="container mx-auto">
      <div className="flex flex-wrap justify-around">
      {
       [...Array(16)].map( (_,index)=>{
            return <Product key={index} />;
       } )
      }
      </div>
    </div>

  </>

  )
}
