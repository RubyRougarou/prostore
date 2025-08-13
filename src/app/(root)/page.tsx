import ProductsList from "@/components/shared/products/products-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { convertToPlainObject } from "@/lib/utils";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

export default async function Home() {
  const latestData = await getLatestProducts();

  return (
    <>
      <ProductsList
        data={convertToPlainObject(latestData)}
        title={"Newest Arrivals"}
        limit={LATEST_PRODUCTS_LIMIT}
      />
    </>
  );
}
