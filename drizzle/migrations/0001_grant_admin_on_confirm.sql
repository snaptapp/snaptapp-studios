DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'user_roles_user_id_role_key') THEN
    ALTER TABLE public.user_roles ADD CONSTRAINT user_roles_user_id_role_key UNIQUE (user_id, role);
  END IF;
END $$;

CREATE OR REPLACE FUNCTION public.grant_admin_on_confirm()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NEW.email_confirmed_at IS NOT NULL AND lower(split_part(NEW.email, '@', 2)) = 'snaptapp.us' THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin') ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
  RETURN NEW;
END $$;

REVOKE EXECUTE ON FUNCTION public.grant_admin_on_confirm() FROM PUBLIC, anon, authenticated;

DROP TRIGGER IF EXISTS on_auth_user_confirmed_grant_admin ON auth.users;
CREATE TRIGGER on_auth_user_confirmed_grant_admin
AFTER INSERT OR UPDATE OF email_confirmed_at ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.grant_admin_on_confirm();

INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin' FROM auth.users
WHERE email_confirmed_at IS NOT NULL AND lower(split_part(email, '@', 2)) = 'snaptapp.us'
ON CONFLICT (user_id, role) DO NOTHING;