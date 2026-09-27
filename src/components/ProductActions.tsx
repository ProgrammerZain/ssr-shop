"use client";

import { useState, useTransition, useOptimistic } from "react";
import { Product } from "@/types/product";

interface ProductActionsProps {
  product: Product;
}

export function ProductActions({ product }: ProductActionsProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const [isPending, startTransition] = useTransition();

  // React 19 useOptimistic for Cart State
  const [cartState, setOptimisticCart] = useOptimistic(
    { count: 0, isAdded: false, message: "" },
    (current, newQty: number) => ({
      count: current.count + newQty,
      isAdded: true,
      message: `Added ${newQty} item(s) to cart!`,
    })
  );

  // React 19 useOptimistic for Wishlist Toggle
  const [isWishlisted, setOptimisticWishlist] = useOptimistic(
    false,
    (_current, newState: boolean) => newState
  );

  // Handle Add to Cart action with transition & optimistic update
  const handleAddToCart = () => {
    startTransition(async () => {
      // 1. Instantly trigger optimistic update
      setOptimisticCart(quantity);

      // 2. Simulate server action / network mutation delay (600ms)
      await new Promise((resolve) => setTimeout(resolve, 600));
    });
  };

  // Handle Wishlist toggle action
  const handleToggleWishlist = () => {
    startTransition(async () => {
      // 1. Instantly trigger optimistic update
      setOptimisticWishlist(!isWishlisted);

      // 2. Simulate server action / network mutation delay (400ms)
      await new Promise((resolve) => setTimeout(resolve, 400));
    });
  };

  return (
    <div className="space-y-4 pt-4 border-t border-slate-800">
      {/* Optimistic Feedback Banner */}
      {cartState.isAdded && (
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center justify-between animate-fade-in">
          <span>✅ {cartState.message}</span>
          <span className="font-bold bg-emerald-500/20 px-2 py-0.5 rounded">
            Total Cart Items: {cartState.count}
          </span>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4">
        {/* Quantity Selector */}
        <div className="flex items-center rounded-lg border border-slate-800 bg-slate-950 p-1">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            disabled={quantity <= 1 || isPending}
            className="w-8 h-8 rounded text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-transparent transition-colors font-bold text-sm flex items-center justify-center"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="w-10 text-center font-mono text-sm text-slate-100 font-semibold">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            disabled={
              isPending || (product.stock > 0 && quantity >= product.stock)
            }
            className="w-8 h-8 rounded text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-transparent transition-colors font-bold text-sm flex items-center justify-center"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button with useOptimistic & useTransition */}
        <button
          onClick={handleAddToCart}
          disabled={isPending || product.stock <= 0}
          className="flex-1 min-w-[160px] py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-blue-500/10"
        >
          {isPending ? (
            <>
              <span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
              <span>Updating Cart...</span>
            </>
          ) : (
            <>
              <span>🛒</span>
              <span>Add {quantity} to Cart</span>
            </>
          )}
        </button>

        {/* Wishlist Button with useOptimistic */}
        <button
          onClick={handleToggleWishlist}
          disabled={isPending}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={`p-2.5 rounded-lg border transition-all duration-200 flex items-center justify-center gap-2 text-sm ${
            isWishlisted
              ? "bg-rose-500/10 border-rose-500/40 text-rose-400 font-semibold"
              : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900"
          }`}
        >
          <span>{isWishlisted ? "❤️" : "🤍"}</span>
          <span className="hidden sm:inline">
            {isWishlisted ? "Wishlisted" : "Wishlist"}
          </span>
        </button>
      </div>

      {/* React 19 Feature Explanation Pill */}
      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
        <span>
          React 19 <code className="text-amber-400">useOptimistic</code> +{" "}
          <code className="text-purple-400">useTransition</code>
        </span>
        <span>Interactive Client Island</span>
      </div>
    </div>
  );
}
