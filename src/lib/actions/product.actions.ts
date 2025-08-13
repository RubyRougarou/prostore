"use server";

import { PrismaClient } from "../../generated/prisma";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

// Get latest products
export async function getLatestProducts() {
  const prisma = new PrismaClient();
  const data = prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return data;
}
