"use client"; // ✅ Client Component

import { AuthProvider } from "../context/AuthContext";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
