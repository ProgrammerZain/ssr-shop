import { fetchApi, FetchOptions, ApiError } from "./api";
import { Product, ProductsResponse } from "@/types/product";

/**
 * Fetches product listings from the backend API.
 * Supports Next.js caching and revalidation options.
 *
 * @param options - Optional Next.js fetch options (cache, next.revalidate, etc.).
 * @returns Promise resolving to ProductsResponse.
 */
export async function getProducts(
  options: FetchOptions = {}
): Promise<ProductsResponse> {
  return fetchApi<ProductsResponse>("/products", options);
}

/**
 * Fetches a single product by its unique ID.
 * Returns null if the ID is invalid or if the API returns a 404 error.
 *
 * @param id - Product ID (numeric string or number).
 * @param options - Optional Next.js fetch options.
 * @returns Promise resolving to Product or null if not found.
 */
export async function getProduct(
  id: string | number,
  options: FetchOptions = {}
): Promise<Product | null> {
  const numericId = Number(id);
  if (isNaN(numericId) || numericId <= 0) {
    return null;
  }

  try {
    return await fetchApi<Product>(`/products/${numericId}`, options);
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      return null;
    }
    throw error;
  }
}

/**
 * Searches for products matching a search query string.
 * Returns all products if query is empty or whitespace.
 *
 * @param query - Text query string.
 * @param options - Optional Next.js fetch options.
 * @returns Promise resolving to ProductsResponse.
 */
export async function searchProducts(
  query: string,
  options: FetchOptions = {}
): Promise<ProductsResponse> {
  const trimmedQuery = query.trim();
  if (!trimmedQuery) {
    return getProducts(options);
  }

  const encodedQuery = encodeURIComponent(trimmedQuery);
  return fetchApi<ProductsResponse>(
    `/products/search?q=${encodedQuery}`,
    options
  );
}
