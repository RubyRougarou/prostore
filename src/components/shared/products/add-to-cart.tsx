"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Plus, ShoppingCart } from "lucide-react";

import { CartItem } from "../../../../types";
import { addItemToCart } from "@/lib/actions/cart.actions";

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error(res.message, {
        description: "please try again",
      });
    } else {
      toast(
        <div className={"flex items-center justify-between gap-7"}>
          <div>
            <h2 className={"text-ruby text-lg flex items-center gap-2 pl-2"}>
              <ShoppingCart /> {res.message}
            </h2>
            <p className={"text-muted-foreground pl-1"}>
              {item.name} added to cart
            </p>
          </div>
          <Button
            variant={"ghost"}
            className={
              "text-ruby hover:text-white hover:bg-ruby dark:hover:bg-hoverRuby"
            }
            onClick={() => router.push("/cart")}
          >
            view cart
          </Button>
        </div>,
        {
          className: "!p-2 sm:!w-96 dark:!bg-zinc-900",
        },
      );

      // res.message, {
      //   description: `${item.name} added to cart`,
      //   icon: <ShoppingCart />,
      //   style: {
      //     fontSize: "18px",
      //     width: "27rem",
      //     backgroundColor: "oklch(92.9% 0.013 255.508)",
      //     color: "#9B111E",
      //     display: "flex",
      //     justifyContent: "start",
      //     gap: "2rem",
      //   },
      //   action: {
      //     label: "view cart",
      //     onClick: () => router.push("/cart"),
      //   },
      // }
    }
  };

  return (
    <Button
      className={"w-full bg-ruby text-white hover:bg-hoverRuby"}
      type={"button"}
      onClick={handleAddToCart}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
