"use server";

import { prisma } from "../../../db/prisma";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

// Get latest products
export async function getLatestProducts() {
  const data = prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return data;
}

// Get a single product by its slug(an attribute in database)
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}
