export type CurrentUser = {
  id: string;
  fullName: string;
  email: string;
};

const USER_STORAGE_KEY = "user";
const ACCESS_TOKEN_STORAGE_KEY = "accessToken";
const REFRESH_TOKEN_STORAGE_KEY = "refreshToken";

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function safeJsonParse<T>(value: string): T | null {
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

function normalizeUser(raw: unknown): CurrentUser | null {
  if (!raw || typeof raw !== "object") return null;

  const source = raw as Record<string, unknown>;

  const id =
    typeof source.id === "string"
      ? source.id
      : typeof source._id === "string"
        ? source._id
        : "";

  const fullName =
    typeof source.fullName === "string"
      ? source.fullName
      : typeof source.name === "string"
        ? source.name
        : "";

  const email = typeof source.email === "string" ? source.email : "";

  if (!fullName || !email) {
    return null;
  }

  return {
    id,
    fullName,
    email,
  };
}

export function getCurrentUser(): CurrentUser | null {
  if (!isBrowser()) return null;

  const rawUser = window.localStorage.getItem(USER_STORAGE_KEY);
  if (!rawUser) return null;

  const parsedUser = safeJsonParse<unknown>(rawUser);
  return normalizeUser(parsedUser);
}

export function setCurrentUser(user: unknown): CurrentUser | null {
  if (!isBrowser()) return null;

  const normalizedUser = normalizeUser(user);
  if (!normalizedUser) return null;

  window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(normalizedUser));

  return normalizedUser;
}

export function clearCurrentUser(): void {
  if (!isBrowser()) return;
  window.localStorage.removeItem(USER_STORAGE_KEY);
}

export function getAccessToken(): string | null {
  if (!isBrowser()) return null;
  return window.localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
}

export function getRefreshToken(): string | null {
  if (!isBrowser()) return null;
  return window.localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);
}

export function clearAuthStorage(): void {
  if (!isBrowser()) return;

  window.localStorage.removeItem(USER_STORAGE_KEY);
  window.localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
  window.localStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);
}

export function isLoggedIn(): boolean {
  return !!getAccessToken() || !!getCurrentUser();
}
