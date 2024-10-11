import React from "react";

const ProductsView = () => {
  const products = [
    {
      name: "Ceremony Cake",
      image: "./ImageUsed/IMG-20240126-WA0011.jpg",
      price: "### frws",
    },
    {
      name: "Milk Mult-grain Bread",
      image: "./ImageUsed/IMG-20240304-WA0020.jpg",
      price: "###frws",
    },
    {
      name: "Cake Doughnuts",
      image: "./ImageUsed/IMG-20240305-WA0012.jpg",
      price: "###frws",
    },
    {
      name: "Milk Bread",
      image: "./ImageUsed/IMG-20240304-WA0018.jpg",
      price: "###frws",
    },
    {
      name: "Corn Cake",
      image: "./ImageUsed/IMG-20240305-WA0101.jpg",
      price: "###frws",
    },
    {
      name: "Universal Cake",
      image: "./ImageUsed/IMG-20240128-WA0004.jpg",
      price: "###frws",
    },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 justify-between px-5">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden  hover:shadow-2xl transition-shadow duration-300 w-full "
          >
            <img
              className="w-full h-[150px] object-cover object-center"
              src={product.image}
              alt={product.name}
            />
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-800">
                {product.name}
              </p>
              <div className="flex items-center justify-between mt-2 gap-1">
                <span className="text-black font-bold whitespace-nowrap">
                  {product.price}
                </span>
                <button className="bg-orange-800 text-white flex items-center px-3  rounded-full hover:bg-orange-700 transition  duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M18.007 4.033a2 2 0 0 0-1.987-1.997l-4.89-.032a2 2 0 0 0-1.426.584L3.022 9.252a2 2 0 0 0-.002 2.83l4.949 4.95a2 2 0 0 0 2.828 0l6.631-6.632a2 2 0 0 0 .586-1.417zM14 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2"
                    ></path>
                  </svg>
                  <span className="ml-2">Add</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsView;
