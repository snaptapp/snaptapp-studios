import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const ADMIN_EMAIL_DOMAIN = "snaptapp.us";

const schema = z.object({
  email: z.string().email().max(200),
  password: z.string().min(8).max(200),
});

export const createAdminAccount = createServerFn({ method: "POST" })
  .inputValidator((d) => schema.parse(d))
  .handler(async ({ data }) => {
    const origin = process.env["SITE_URL"] ?? "https://snaptapp.us";
    const email = data.email.trim().toLowerCase();
    if (email.split("@")[1] !== ADMIN_EMAIL_DOMAIN) {
      return { ok: false as const, message: `Accounts are limited to @${ADMIN_EMAIL_DOMAIN} email addresses.` };
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password: data.password,
      // Never pre-confirm: the owner of the inbox must prove control of it.
      email_confirm: false,
    });

    if (error) {
      console.error("admin signup failed:", error.message);
      return { ok: false as const, message: "Could not create the account. It may already exist." };
    }

    const { createClient } = await import("@supabase/supabase-js");
    const anon = createClient(process.env["SUPABASE_URL"]!, process.env["SUPABASE_PUBLISHABLE_KEY"]!, {
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    });
    const { error: resendError } = await anon.auth.resend({
      type: "signup",
      email,
      options: { emailRedirectTo: `${origin}/auth/` },
    });
    if (resendError) console.error("admin signup confirmation email failed:", resendError.message);

    return {
      ok: true as const,
      message: "Account created. Check your inbox and confirm your email before signing in.",
    };
  });
