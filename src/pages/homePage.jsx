import React from "react";
import ProductsView from "../components/productsView";
import "/src/App.css";

function HomePage() {
  const bgImage = "./LogoImg/nibwo-butwari.jpg";

  // Array of menu items for section 2
  const menuItems = [
    { id: 1, text: "More Products", href: "#" },
    { id: 2, text: "Special Promo", href: "#" },
    { id: 3, text: "Client Suggestions", href: "#" },
  ];

  return (
    <>
      <section
        style={{ backgroundImage: `url(${bgImage})` }}
        className="background-section h-[400px] flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white  w-[300px] inline-block">
            WELCOME TO ISHINGIRO SHOP
          </h1>
          <div className="flex mt-5 w-full items-center bg-slate-200 rounded-full lg:w-[500px] px-3 py-2">
            <input
              className="bg-transparent flex-1 text-gray-600 text-lg outline-none border-none"
              type="text"
              placeholder="Search for your products"
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                stroke="gray"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.343-4.343A8 8 0 1 0 5.343 5.343 8 8 0 0 0 16.657 16.657L21 21z"
                />
              </svg>
            </span>
          </div>
        </div>
      </section>

      <section className="flex pt-4 gap-5 md:gap-0 md:flex-row flex-col ps-4">
        <div>
          <ul className="flex md:flex-col md:gap-4 gap-2 ">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`${
                  item.id === 1 && " bg-orange-800"
                }  hover:bg-orange-800 rounded-full md:px-4 md:py-2 hover:text-white transition-all duration-200 font-semibold md:text-md text-[12px] px-1 py-[3px]`}
              >
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex-1">
          <ProductsView />
        </div>
      </section>
    </>
  );
}

export default HomePage;
