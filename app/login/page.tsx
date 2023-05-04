"use client";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default function Page() {
  const supabase = createBrowserSupabaseClient();

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email: "jon@supabase.com",
      password: "sup3rs3cur3",
    });
  };

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: "jon@supabase.com",
      password: "sup3rs3cur3",
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignUp}>Sign up</button>
      <button onClick={handleSignOut}>Sign out</button>
    </>
  );
}
