"use client";

import { supabase } from "../../lib/supabaseClient";
import { useState, useEffect } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      setError("");
  
      const { data, error } = supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        setLoading(false);
      } else {
        console.log("Logged In", data.user);
        router.push("/");
      }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-black text-center">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm text-black font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400 placeholder-slate-400 placeholder-opacity-50 text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
    
              <div>
                <label className="block mb-1 text-sm text-black font-medium">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400 placeholder-slate-400 placeholder-opacity-50 text-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
    
              {error && <p className="text-red-500 text-sm">{error}</p>}
    
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      );
    }
