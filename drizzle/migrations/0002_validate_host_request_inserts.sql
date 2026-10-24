DROP POLICY IF EXISTS "Anyone can submit a host request" ON public.host_requests;
CREATE POLICY "Anyone can submit a valid host request" ON public.host_requests
FOR INSERT TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 200
  AND length(email) BETWEEN 3 AND 320
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (group_name IS NULL OR length(group_name) <= 200)
  AND (group_size IS NULL OR length(group_size) <= 50)
  AND (message IS NULL OR length(message) <= 5000)
);