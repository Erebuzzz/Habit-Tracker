"use client";

import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {user?.displayName || "User"}!</h1>
      <p>Your email: {user?.email}</p>
    </div>
  );
}
