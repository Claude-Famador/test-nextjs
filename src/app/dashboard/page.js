"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/login"); 
      } else {
        setUser(data.user);
      }
    };
    getUser();
  }, [router]);

  if (!user) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {user.email}!</h1>
      <p className="mt-2">This is your protected dashboard.</p>
    </div>
  );
}
