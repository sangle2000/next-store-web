import ProductList from "@/components/shared/product/product-list";
import { getLatestProduct } from "@/lib/actions/product.action";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const HomePage = async () => {
  const latestProducts = await getLatestProduct();

  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </>
  );
};

export default HomePage;
