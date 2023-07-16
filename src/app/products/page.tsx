"use client";
import NavBar from "@/components/navbar";
import SearchBar from "@/components/search-bar";
import ProductListingItem from "@/components/listings/product-listing-item";
import { ProductAPI } from "@/api-queries/productAPI";
import { useEffect, useState } from "react";
import { Product } from "@/types";
import { useAtom } from "jotai";
import productStore from "@/store/productStore";

const ProductsPage = () => {
  const [products, setProducts] = useAtom(productStore.productsAtom)
  const [sProducts, setSProducts] = useAtom(productStore.serachProductsAtom);
  useEffect(() => {

    const fetchProducts = async () => {
      const fetchedProducts = await new ProductAPI().getAll();
      console.log('Fetched products:', fetchedProducts);
      setProducts(fetchedProducts);
      setSProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <NavBar />

      <main className="flex w-full min-h-screen flex-col items-center gap-10 px-8 py-12 bg-secondary-color">
        <SearchBar />
        {Array.isArray(sProducts) &&  sProducts.map((item: Product) => (
          <ProductListingItem
            key={item.id as number}
            itemId={item.id as number}
            title={item.title as string}
            imageUrl={item.logo as string}
          />
        ))}
      </main>
    </>
  );
};

export default ProductsPage;

