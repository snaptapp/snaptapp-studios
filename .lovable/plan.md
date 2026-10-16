# Grant admin access to confirmed @snaptapp.us accounts

## Problem
New accounts created on the sign-in page never receive the admin role, so they always see "Admins only" with no way to be approved.

## Change
- Automatically grant the admin role once a @snaptapp.us account has **confirmed its email**. Confirming the inbox proves the person controls a studio address, which is what the signup restriction already relies on.
- Accounts that are not confirmed, or not @snaptapp.us, never get the role.
- Update the "Admins only" message to say "Confirm your email, then sign in again" instead of "Ask the site owner to approve it".

## Technical details
- Migration: `SECURITY DEFINER` function `public.grant_admin_on_confirm()` plus trigger `AFTER INSERT OR UPDATE OF email_confirmed_at ON auth.users`; when `email_confirmed_at IS NOT NULL` and `lower(split_part(email,'@',2)) = 'snaptapp.us'`, insert `(user_id, 'admin')` into `public.user_roles` with `ON CONFLICT DO NOTHING` (add unique `(user_id, role)` constraint if missing).
- Backfill: same insert for already-confirmed @snaptapp.us users.
- Copy tweak in `src/routes/_authenticated/admin.insights.tsx`.
- Verify by signing in as a confirmed account and loading `/admin/insights/`.
