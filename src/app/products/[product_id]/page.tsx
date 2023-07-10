import { GetServerSidePropsContext, GetServerSideProps } from "next";


export default function ProductDetailsPage(props: any) {
  const mockData = [
    { id: 1, title: "FanVoice", imageUrl: "/product.svg" },
    { id: 2, title: "Dodohome", imageUrl: "/product.svg" },
    { id: 3, title: "Test", imageUrl: "/product.svg" },
  ].filter( (item) => item.id == props.params.product_id );

  return (
    <>
      
    </>
  );
}
