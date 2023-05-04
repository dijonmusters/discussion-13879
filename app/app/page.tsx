import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default async function Page() {
  const supabase = createServerComponentSupabaseClient({ headers, cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <>
      <h1>App page</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
}
