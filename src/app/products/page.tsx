import NavBar from "@/components/navbar";
import SearchBar from "@/components/search-bar";
import ProductListingItem from "@/components/listings/product-listing-item";
import { ProductAPI } from "@/api-queries/productAPI";

const ProductsPage = async () => {
  const products = await new ProductAPI().getAll();
  console.dir(products);
  return (
    <>
      <NavBar />

      <main className="flex w-full min-h-screen flex-col items-center gap-10 px-8 py-12 bg-secondary-color">
        <SearchBar />
        {products.map((item) => (
          <ProductListingItem
            key={item.id}
            itemId={item.id}
            title={item.title}
            imageUrl={item.logo}
          />
        ))}
      </main>
    </>
  );
};

export default ProductsPage;
