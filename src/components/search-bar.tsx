"use client";
import React, { useState, useEffect } from "react";
import productStore from "@/store/productStore";
import { useAtom } from "jotai";
import { Product } from "@/types";
const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [products, setProducts] = useAtom(productStore.productsAtom);
  const [sProducts, setSProducts] = useAtom(productStore.serachProductsAtom);
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    setSProducts(
      products.filter((product) => {
        if(searchValue === '')return true;
        if (product.title){
          return product.title.toLowerCase().includes(searchValue.toLowerCase());
        }
      })
    );
  }, [searchValue]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="items-center flex justify-center w-full max-w-3xl rounded-4xl">
      <div className="relative w-full ">
        {!isFocused && (
          <div className="absolute top-3 left-3 items-center">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        )}
        <div className="absolute top-3 right-5 items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 54 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.00027 1C77.7393 1 44.1868 1 52.9696 1M1.00027 1L1.00001 14.8678C1 15.1014 1.08178 15.3276 1.23114 15.5072L17.1386 34.6351C17.2879 34.8147 17.3697 35.0409 17.3697 35.2745V59.227C17.3697 60.0058 18.2206 60.4857 18.887 60.0828L36.5034 49.4341C36.803 49.253 36.9861 48.9284 36.9861 48.5783V35.2679C36.9861 35.0383 37.0651 34.8158 37.2098 34.6376L52.7459 15.5047C52.8906 15.3265 52.9696 15.1039 52.9696 14.8744V1M1.00027 1H52.9696"
              stroke="black"
            />
          </svg>
        </div>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearch}
          className={`block p-2 w-full text-gray-900 bg-gray-50 rounded-3xl border border-gray-300 ${
            isFocused ? "pl-3" : "pl-10"
          }`}
          placeholder="Search Here..."
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default SearchBar;
