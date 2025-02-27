import Image from "next/image";
import { Product } from "../../lib/types";

interface CardProps {
  product: Product;
}

export default function Card({ product }: CardProps) {
  return (
    <div className="card border-0 shadow-md rounded-lg overflow-hidden max-w-xs mx-auto">
      <Image
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
        width={300}
        height={300}
        priority={false} // Optional: Set to `true` for images above the fold
      />
      <div
        className={`card-body  text-center rounded-t-xl p-4 ${
          product.category == `women's clothing`
            ? "bg-pink-100"
            : "bg-green-100"
        }`}
      >
        <p className="text-blue-600 font-bold text-xl">$ {product.price}</p>
        <h5 className="card-title text-lg font-semibold">{product.title}</h5>

        <p className="text-xs text-gray-600">{product.description}</p>
      </div>
    </div>
  );
}
