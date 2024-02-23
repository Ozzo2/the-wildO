import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jgrnusjklwizmhobsqlc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impncm51c2prbHdpem1ob2JzcWxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwMzM0ODQsImV4cCI6MjAyMTYwOTQ4NH0.SPuqZFz7H1yQEKfOE0ImrTj2qaNOPKgUNxnphdniyTI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
