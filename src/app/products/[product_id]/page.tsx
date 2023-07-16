"use client";
import NavBar from "@/components/navbar";
import productStore from "@/store/productStore";
import { Product } from "@/types";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function ProductDetailsPage(props: any) {
  const [products, setProducts] = useAtom(productStore.productsAtom);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    // Find product with given id
    const foundProduct = products.find(
      (item: Product) => item.id === Number(props.params.product_id)
    );
    setProduct(foundProduct);
  }, [products, props.params.product_id]); // Re-run effect if products or product_id changes

  return (
    <>
      <NavBar />

      <main className="flex w-full min-h-screen flex-col items-center gap-5 px-8 py-12 bg-secondary-color">
        {product ? (
          <div className="md:w-2/3 max-w-5xl bg-white rounded-3xl p-7 flex gap-2 justify-between">
            <div className="flex flex-col w-1/2 gap-6 justify-center items-center">
              <img
                src={product.logo}
                alt={product.title}
                className="w-48 h-48 rounded-full"
              />
              {/* {Jsproduct} */}
              {product.founders &&
                product.founders.map((founder, index) => (
                  <div
                    key={index}
                    className="w-full border shadow-2xl rounded-xl p-3 text-center"
                  >
                    <h3>{founder.name as string}</h3>
                  </div>
                ))}
            </div>

            <div className="flex flex-col w-1/2 gap-5 justify-between">
              <div className="w-full border shadow-2xl rounded-xl p-3">
                <h1>{product.title}</h1>
              </div>
              <div className="w-full border shadow-2xl rounded-xl p-3 min-h-[26vh]">
                <h1>{product.description}</h1>
              </div>

              <button className="w-full outline-none bg-primary-color text-black p-3 rounded-xl">
                Поделиться
              </button>
            </div>
          </div>
        ) : (
          <p>No product found</p>
        )}

        <div className="w-full p-3 bg-white md:w-2/3 rounded-xl text-center shadow-xl">
          Оставьте свою реакцию
        </div>


        <div className="p-3 w-full md:w-2/3 rounded-xl text-center shadow-xl flex justify-between">
          <Image 
            src="/smiling-face-with-heart-eyes (1) 1.svg" 
            className="w-24"
            width="48"
            height="23"
            alt="f"
          />
          <Image 
            src="/pouting-face 1.svg" 
            className="w-24"
            width="48"
            height="23"
            alt="f"
          />
          <Image 
            src="/hushed-face 1.svg" 
            className="w-24"
            width="48"
            height="23"
            alt="f"
          />
          <Image 
            src="/loudly-crying-face 1.svg" 
            className="w-24"
            width="48"
            height="23"
            alt="f"
          />
          <Image 
            src="/fire 1.svg" 
            className="w-24"
            width="48"
            height="23"
            alt="f"
          />
        </div>

      </main>
    </>
  );
}
