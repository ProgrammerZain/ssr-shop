"use server";

import { revalidatePath } from "next/cache";

export interface ProductFormState {
  success: boolean;
  message: string;
  errors?: {
    title?: string;
    price?: string;
  };
  newProduct?: {
    id: number;
    title: string;
    price: number;
    category: string;
  };
}

/**
 * Server Action for mutating product data directly on the Node.js server.
 * Handles validation, simulated server errors, and cache revalidation.
 */
export async function createProductAction(
  _prevState: ProductFormState,
  formData: FormData
): Promise<ProductFormState> {
  // Artificial server processing delay (1000ms) to observe pending state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const title = formData.get("title")?.toString().trim() || "";
  const priceStr = formData.get("price")?.toString().trim() || "";
  const category = formData.get("category")?.toString().trim() || "General";
  const triggerError = formData.get("triggerError") === "true";

  // 1. Validation checks
  const errors: ProductFormState["errors"] = {};

  if (!title || title.length < 3) {
    errors.title = "Title must be at least 3 characters long.";
  }

  const price = Number(priceStr);
  if (isNaN(price) || price <= 0) {
    errors.price = "Price must be a valid positive number.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Validation failed. Please fix the highlighted fields.",
      errors,
    };
  }

  // 2. Simulated Server Error test case
  if (triggerError) {
    return {
      success: false,
      message: "Simulated Internal Server Error (500). Action aborted.",
    };
  }

  // 3. Successful Mutation
  const newProduct = {
    id: Date.now(),
    title,
    price,
    category,
  };

  // Trigger cache revalidation for actions lab
  revalidatePath("/actions-lab");

  return {
    success: true,
    message: `Successfully created product "${title}" ($${price.toFixed(2)})!`,
    newProduct,
  };
}
