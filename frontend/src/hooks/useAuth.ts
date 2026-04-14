"use client";

import { useEffect, useMemo, useState } from "react";

type UserRole = "client" | "assistant" | "admin";

type AuthUser = {
  id?: string;
  fullName?: string;
  email?: string;
  role?: UserRole;
};

type UseAuthResult = {
  isAuthenticated: boolean;
  role: UserRole | null;
  user: AuthUser | null;
  loading: boolean;
};

export function useAuth(): UseAuthResult {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    try {
      const token = localStorage.getItem("accessToken");
      const savedUser = localStorage.getItem("user");

      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      if (savedUser) {
        const parsedUser = JSON.parse(savedUser) as AuthUser;
        setUser(parsedUser);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = useMemo(
    () => ({
      isAuthenticated: !!user,
      role: user?.role ?? null,
      user,
      loading,
    }),
    [user, loading],
  );

  return value;
}
