import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPBASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

const client = createClient(SUPABASE_URL, SUPBASE_ANON_KEY);

export { client as supabaseClient };