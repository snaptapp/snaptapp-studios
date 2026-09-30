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
    const email = data.email.trim().toLowerCase();
    if (email.split("@")[1] !== ADMIN_EMAIL_DOMAIN) {
      return { ok: false as const, message: `Accounts are limited to @${ADMIN_EMAIL_DOMAIN} email addresses.` };
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password: data.password,
      email_confirm: true,
    });

    if (error) {
      return { ok: false as const, message: error.message };
    }
    return { ok: true as const, message: "Account created. You can sign in now." };
  });
