"use client";

import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import TeaChecklist from "../../components/TeaChecklist"; // ✅ Import the Checklist

export default function Dashboard() {
  const { user, isLoading, logout } = useAuth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || isLoading) {
    return <p>Loading...</p>; // Prevents hydration mismatch
  }

  if (!user) {
    return <p>Please log in...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {user.displayName || "User"}!</h1>
      <p>Your email: {user.email}</p>

      {/* ✅ Tea Consumption Checklist */}
      <TeaChecklist />

      {/* Logout Button */}
      <button
        onClick={logout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
