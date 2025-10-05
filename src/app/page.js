"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase/supabase.js";


export default function HomePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!error && data?.user) {
        setUser(data.user);
      }
    };
    fetchUser();
  }, []);

  const firstName = user?.user_metadata?.first_name || "Guest";

  return (
    <div className="min-h-screen bg-blue-100 text-gray-900 flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-bold">MAKER</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="/" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Quests</a>
          <a href="#" className="hover:underline">Skills</a>
          <a href="#" className="hover:underline">Forums</a>
          <a href="#" className="hover:underline">About</a>
          {user ? (
            <a href="#" className="hover:underline">Account</a>
          ) : (
            <a href="/login" className="hover:underline">Login</a>
          )}
        </div>
        <img
          src="/user.png"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-12 relative">
        <img src="/mascot.png" alt="Mascot" className="w-28 mx-auto mb-4" />
        <h2 className="text-3xl font-semibold">Hi there, {firstName}!</h2>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded-lg font-semibold">
            Continue Quest
          </button>
          <button className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800">
            View My Skills
          </button>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold">
            Start New Quest
          </button>
        </div>
      </section>

      {/* Quest Card */}
      <section className="flex-grow flex justify-center py-10">
        <div className="bg-white w-11/12 md:w-2/3 rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <img src="/dst.png" alt="DOST-STII Logo" className="w-20" />
            <div className="text-right">
              <h3 className="bg-blue-600 text-white px-4 py-1 rounded-lg font-semibold inline-block">
                Light The Tower
              </h3>
              <p className="bg-red-500 text-white inline-block px-3 py-1 mt-2 rounded-full text-sm">
                Beginner
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Goal Of This Quest</h4>
            <p className="text-gray-700 leading-relaxed">
              Design and build a functional sensor array using an Arduino that can detect
              motion or environmental changes, triggering a signal to light up a
              watchtower. This quest introduces the basics of physical computing,
              wiring, and sensor integration — your mission is to bring the tower
              to life and guard the realm!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-700 py-4">© Maker</footer>
    </div>
  );
}
