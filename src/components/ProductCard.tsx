import Link from "next/link";
import { Product } from "@/types/product";
import { Badge } from "./Badge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700 transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col justify-between group">
      <div className="space-y-4">
        {/* Product Thumbnail */}
        <div className="relative w-full h-48 rounded-lg overflow-hidden bg-slate-950/80 border border-slate-800/80 flex items-center justify-center p-2">
          {/* Standard img tag for optimal raw image rendering from external mock domain */}
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Category & Rating */}
        <div className="flex items-center justify-between gap-2">
          <Badge variant="blue">{product.category}</Badge>
          <div className="flex items-center gap-1 text-xs font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
            <span>⭐</span>
            <span>{product.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-base font-bold text-slate-100 group-hover:text-blue-400 transition-colors line-clamp-1">
            {product.title}
          </h3>
          <p className="text-slate-400 text-xs line-clamp-2 mt-1 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      {/* Price & Action */}
      <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
        <div className="text-lg font-bold text-slate-100 font-mono">
          ${product.price.toFixed(2)}
        </div>
        <Link
          href={`/products/${product.id}`}
          className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
        >
          View Details &rarr;
        </Link>
      </div>
    </div>
  );
}
