"use client";

import { useRouter } from "next/navigation";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../lib/firebase"; // ✅ Make sure this path is correct

export default function Login() {
  const auth = getAuth(app);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/dashboard"); // ✅ Redirect after successful login
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Login</h1>
      <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded">
        Sign in with Google
      </button>
    </div>
  );
}
