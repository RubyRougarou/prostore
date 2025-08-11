import Image from "next/image";
import { Button } from "@/components/ui/button";
import sampleData from "../../../db/sample-data";
import ProductsList from "@/components/shared/products/products-list";

export default function Home() {
  return (
    <>
      <ProductsList
        data={sampleData.products}
        title={"Newest Arrivals"}
        limit={4}
      />
    </>
  );
}
