CREATE TABLE public.deck_generations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  visitor_hash text NOT NULL,
  topic text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.deck_generations TO service_role;
ALTER TABLE public.deck_generations ENABLE ROW LEVEL SECURITY;
CREATE INDEX deck_generations_visitor_idx ON public.deck_generations (visitor_hash, created_at DESC);