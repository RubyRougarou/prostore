import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import ProductPrice from "@/components/shared/products/product-price";
import { Product } from "../../../../types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className={"w-full max-w-sm shadow-ruby dark:shadow-lg pt-0"}>
      <CardHeader className={`p-0 `}>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority={true}
            className={"rounded-xl w-full"}
          />
        </Link>
      </CardHeader>
      <CardContent className={`px-4 grid gap-3`}>
        <div className="text-sm">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
        <div className="flex-between gap-3">
          <p>{product.rating} Stars</p>
          {product.stock > 0 ? (
            <ProductPrice
              value={Number(product.price)}
              className={"text-ruby"}
            />
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
