/**
 * Base API configuration for Next.js SSR Lab.
 * Configured to work with DummyJSON by default, easily swappable with
 * Django REST Framework or FastAPI backends in the future via API_BASE_URL.
 */

const API_BASE_URL = process.env.API_BASE_URL || "https://dummyjson.com";

export interface FetchOptions extends RequestInit {
  next?: NextFetchRequestConfig;
}

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

/**
 * Generic fetch helper for server-side API calls.
 */
export async function fetchApi<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const url = endpoint.startsWith("http")
    ? endpoint
    : `${API_BASE_URL}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new ApiError(`Resource not found at ${endpoint}`, 404);
      }
      throw new ApiError(
        `API request failed with status ${response.status}: ${response.statusText}`,
        response.status
      );
    }

    const data = (await response.json()) as T;
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(
      error instanceof Error ? error.message : "Unknown network communication error",
      500
    );
  }
}
