import ProductListingItem from "@/components/listings/product-listing-item";
import NavBar from "@/components/navbar";

export default function Jobs() {
  const mockData = [
    { id: 1, title: "Middle Frontend", imageUrl: "/product.svg" },
    { id: 2, title: "Senior Software Engineer", imageUrl: "/product.svg" },
    { id: 3, title: "Test", imageUrl: "/product.svg" },
    // add more products as necessary
];
  return (
    <>
    <NavBar />
  
    <main className="flex w-full min-h-screen flex-col items-center gap-10 px-8 py-12 bg-secondary-color">
      {mockData.map(item => (
          <ProductListingItem key={item.id} itemId={item.id} title={item.title} imageUrl={item.imageUrl} />
      ))}
    </main>
  </>
  );
}
