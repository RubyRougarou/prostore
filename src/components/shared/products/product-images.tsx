"use client";

import { useState } from "react";
import Image from "next/image";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className={"space-y-4"}>
      <Image
        src={images[current]}
        alt={"product image"}
        width={1000}
        height={1000}
        className={"min-h-[300px] object-cover object-center rounded-xl"}
        priority={true}
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`border border-gray-500 mr-2 hover:cursor-pointer hover:border-ruby ${index === current && "border-4 border-ruby"}`}
          >
            <Image
              src={image}
              alt={"product images"}
              width={190}
              height={190}
              className={""}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
