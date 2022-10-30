import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = 'https://ggjawtqydvftmyqpiinw.supabase.co';
const SUPBASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnamF3dHF5ZHZmdG15cXBpaW53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY4MDU5NDgsImV4cCI6MTk4MjM4MTk0OH0.gIpWoDk0DG1I9G1Ncc_tubGUVEPIHGtSGMaVJOzGXxQ';

const client = createClient(SUPABASE_URL, SUPBASE_ANON_KEY);

export { client as supabaseClient };