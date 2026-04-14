const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api/v1";

type QueryValue = string | number | boolean | null | undefined;

type ApiFetchOptions = Omit<RequestInit, "body"> & {
  auth?: boolean;
  query?: Record<string, QueryValue>;
  timeoutMs?: number;
  responseType?: "json" | "text" | "blob";
  body?: BodyInit | object | null;
};

function buildUrl(path: string, query?: Record<string, QueryValue>) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = new URL(`${API_BASE_URL}${normalizedPath}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  return url.toString();
}

function extractErrorMessage(payload: unknown, status: number) {
  if (typeof payload === "string" && payload.trim()) {
    return payload;
  }

  if (payload && typeof payload === "object") {
    const data = payload as Record<string, unknown>;

    if (typeof data.message === "string") return data.message;

    if (
      data.error &&
      typeof data.error === "object" &&
      typeof (data.error as Record<string, unknown>).message === "string"
    ) {
      return (data.error as Record<string, string>).message;
    }

    if (
      data.data &&
      typeof data.data === "object" &&
      typeof (data.data as Record<string, unknown>).message === "string"
    ) {
      return (data.data as Record<string, string>).message;
    }
  }

  return `Request failed: ${status}`;
}

export async function apiFetch<T>(
  path: string,
  options: ApiFetchOptions = {},
): Promise<T> {
  const {
    auth = true,
    query,
    timeoutMs = 15000,
    responseType = "json",
    body,
    headers: inputHeaders,
    ...rest
  } = options;

  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  const headers = new Headers(inputHeaders);

  const isFormData =
    typeof FormData !== "undefined" && body instanceof FormData;
  const isJsonBody =
    body &&
    typeof body === "object" &&
    !isFormData &&
    !(body instanceof Blob) &&
    !(body instanceof ArrayBuffer) &&
    !(body instanceof URLSearchParams);

  if (!headers.has("Content-Type") && isJsonBody) {
    headers.set("Content-Type", "application/json");
  }

  if (auth && token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(buildUrl(path, query), {
      ...rest,
      headers,
      credentials: "include",
      signal: controller.signal,
      body: isJsonBody
        ? JSON.stringify(body)
        : (body as BodyInit | null | undefined),
    });

    if (response.status === 204) {
      return null as T;
    }

    const contentType = response.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");

    let payload: unknown;

    if (responseType === "blob") {
      payload = await response.blob();
    } else if (responseType === "text") {
      payload = await response.text();
    } else {
      payload = isJson ? await response.json() : await response.text();
    }

    if (!response.ok) {
      if (response.status === 401 && typeof window !== "undefined") {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
      }

      throw new Error(extractErrorMessage(payload, response.status));
    }

    return payload as T;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("Request timed out. Please try again.");
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }
}
