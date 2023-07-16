"use client";
import { ProductAPI } from "@/api-queries/productAPI";
import NavBar from "@/components/navbar";
import { Product } from "@/types";
import { useState } from "react";
import { BsUpload } from 'react-icons/bs';


export default function ProductDetailsPage(props: any) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    logo: null,
    founders: "",
    promoVideo: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const [selectedFile, setSelectedFile] =  useState<File | null>(null);
  const [previewSrc, setPreviewSrc] = useState<string | ArrayBuffer | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result);
      };
      reader.readAsDataURL(file);
      setProduct({ ...product, [event.target.name]: event.target.files[0] });
    } else {
      setSelectedFile(null);
    }
  }
  };

  const createNewProductObject = (product: any)=>{
      return {
        id : product.id || null,
        title: product.title || null,
        founders: [product.founders] || null,
        developers: [product.developers] || null,
        logo: product.logo || null,
        description: product.description || null,
        existing_problems:product.existing_problems || null,
        problem_solving: product.problem_solving || null,
        product_expectations: product.product_expectations || null,
        tags: product.tags || null,
        promo_video: product.promo_video || null,
        website: product.website || null,
      }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(product);
    const newProduct:  Product =  createNewProductObject(product);
    const productAPI = new ProductAPI();
    productAPI.add(newProduct)
  };

  return (
    <>
      <NavBar />
      <main className="flex w-full min-h-screen flex-col items-center gap-10 px-8 py-12 bg-secondary-color">
        <div className="w-full max-w-4xl md:w-4/5 lg:w-2/3 justify-center p-7 rounded-2xl bg-white">
          <form className="w-full flex flex-row gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 justify-between">
                <label
                  htmlFor="logo"
                  className="flex items-center px-4 py-2 bg-white text-slate-500 border border-slate-500 rounded-lg tracking-wide uppercase cursor-pointer hover:bg-blue-700 hover:text-white"
                >
                  <BsUpload className="w-6 h-6" />
                  <span className="ml-2 text-base leading-normal">
                    Select a logo
                  </span>
                  <input
                    type="file"
                    id="logo"
                    name="logo"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                {previewSrc && (
                  <div className="mt-4 flex justify-center">
                    <img
                      src={previewSrc as string}
                      alt="Preview"
                      className="h-48 w-48 rounded-full"
                    />
                  </div>
                )}
              
              <div>
                <input
                  className="border p-2 w-full rounded-xl shadow-xl"
                  name="founders"
                  placeholder="Founder Name"
                  onChange={handleChange}
                />
                <input
                  className="border p-2 mt-8 w-full rounded-xl shadow-xl"
                  type="text"
                  placeholder="promoVideo"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <input
                className="border p-2 w-full rounded-xl shadow-xl"
                name="name"
                placeholder="Product Name"
                onChange={handleChange}
              />
              <input
                className="border p-2 mt-2 w-full rounded-xl shadow-xl min-h-[30vh]"
                name="description"
                placeholder="Product Description"
                onChange={handleChange}
              />
              <button
                className="border p-2 mt-2 w-full rounded-xl shadow-xl"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
