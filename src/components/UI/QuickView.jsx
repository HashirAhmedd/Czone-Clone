import ReactImageMagnify from "react-image-magnify";

export default function QuickView() {
  return (
    <div className="container mx-auto flex justify-center ">
      <div className="absolute top-30 z-60 bg-white w-[50%] flex border-gray-300 rounded">
        <div className="image h-full w-[30%]">
          <img
            className="w-[80%] mx-auto "
            src="https://www.czone.com.pk/Images/Thumbnails/5-czone.com.pk-1540-17343-191124093449.jpg"
            alt="Sunset in the mountains"
          />

        </div>
        <div className="description h-full w-[70%]"></div>
      </div>
    </div>
  );
}
