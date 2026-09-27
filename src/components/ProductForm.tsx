"use client";

import { useActionState, useOptimistic, useRef } from "react";
import { useFormStatus } from "react-dom";
import {
  createProductAction,
  ProductFormState,
} from "@/app/actions-lab/actions";
import { Badge } from "./Badge";

export interface ProductItem {
  id: number;
  title: string;
  price: number;
  category: string;
  isOptimistic?: boolean;
}

interface ProductFormProps {
  initialProducts: ProductItem[];
}

const initialState: ProductFormState = {
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-500/10 cursor-pointer"
    >
      {pending ? (
        <>
          <span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
          <span>Executing Server Action...</span>
        </>
      ) : (
        <>
          <span>⚡</span>
          <span>Create Product (Server Action)</span>
        </>
      )}
    </button>
  );
}

export function ProductForm({ initialProducts }: ProductFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  // React 19 useActionState hook managing form action response & pending state
  const [state, formAction] = useActionState(
    createProductAction,
    initialState
  );

  // React 19 useOptimistic hook managing optimistic product list additions
  const [optimisticProducts, addOptimisticProduct] = useOptimistic(
    initialProducts,
    (currentProducts, newProduct: ProductItem) => [newProduct, ...currentProducts]
  );

  const handleFormSubmit = async (formData: FormData) => {
    const title = formData.get("title")?.toString().trim() || "";
    const price = Number(formData.get("price") || 0);
    const category = formData.get("category")?.toString() || "Electronics";

    if (title.length >= 3 && price > 0) {
      // Optimistically prepend new item to UI list immediately
      addOptimisticProduct({
        id: Date.now(),
        title,
        price,
        category,
        isOptimistic: true,
      });
    }

    // Dispatch Server Action
    formAction(formData);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Server Action Form */}
      <form
        ref={formRef}
        action={handleFormSubmit}
        className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 space-y-4"
      >
        <div className="border-b border-slate-800 pb-3">
          <h3 className="text-lg font-semibold text-slate-100 flex items-center gap-2">
            <span>📝</span> Product Mutation Form
          </h3>
          <p className="text-slate-400 text-xs mt-0.5">
            Submits directly to a Server Action function without API boilerplate.
          </p>
        </div>

        {/* State Feedback Alerts */}
        {state.message && (
          <div
            className={`p-3.5 rounded-lg border text-xs font-mono animate-fade-in ${
              state.success
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                : "bg-rose-500/10 border-rose-500/30 text-rose-300"
            }`}
          >
            <div className="font-bold mb-0.5">
              {state.success ? "✅ Success" : "❌ Error"}
            </div>
            <div>{state.message}</div>
          </div>
        )}

        {/* Form Inputs */}
        <div className="space-y-1">
          <label className="text-xs font-mono text-slate-300">
            Product Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Wireless Noise-Canceling Headphones"
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500"
          />
          {state.errors?.title && (
            <div className="text-xs text-rose-400 font-mono mt-0.5">
              {state.errors.title}
            </div>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-xs font-mono text-slate-300">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            step="0.01"
            placeholder="e.g. 199.99"
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500"
          />
          {state.errors?.price && (
            <div className="text-xs text-rose-400 font-mono mt-0.5">
              {state.errors.price}
            </div>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-xs font-mono text-slate-300">Category</label>
          <select
            name="category"
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500"
          >
            <option value="Electronics">Electronics</option>
            <option value="Audio">Audio</option>
            <option value="Accessories">Accessories</option>
            <option value="Smart Home">Smart Home</option>
          </select>
        </div>

        {/* Test Server Error Checkbox */}
        <div className="pt-2 flex items-center gap-2">
          <input
            type="checkbox"
            id="triggerError"
            name="triggerError"
            value="true"
            className="rounded border-slate-800 bg-slate-950 text-blue-600 focus:ring-0"
          />
          <label
            htmlFor="triggerError"
            className="text-xs text-slate-400 cursor-pointer"
          >
            Simulate 500 Server Error (test error state)
          </label>
        </div>

        {/* Submit Button Component using useFormStatus */}
        <SubmitButton />
      </form>

      {/* Product List displaying Optimistic Updates */}
      <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-100 flex items-center gap-2">
            <span>📦</span> Live Product List
          </h3>
          <Badge variant="purple">useOptimistic</Badge>
        </div>

        <div className="space-y-3">
          {optimisticProducts.map((p) => (
            <div
              key={p.id}
              className={`p-3.5 rounded-lg border transition-all ${
                p.isOptimistic
                  ? "bg-amber-500/10 border-amber-500/30 text-amber-300 animate-pulse"
                  : "bg-slate-950/80 border-slate-800 text-slate-200"
              } flex items-center justify-between`}
            >
              <div>
                <div className="font-bold text-sm flex items-center gap-2">
                  <span>{p.title}</span>
                  {p.isOptimistic && (
                    <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                      Optimistic (Saving...)
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  {p.category}
                </div>
              </div>
              <div className="font-mono font-bold text-blue-400">
                ${p.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
